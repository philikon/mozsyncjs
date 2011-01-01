var Cc = Components.classes;
var Ci = Components.interfaces;

// Force stupid offline mode to be false so we can run tests on OSX
// with just localhost networking.
var ioSvc = Cc["@mozilla.org/network/io-service;1"]
              .getService(Ci.nsIIOService);
ioSvc.offline = false;

// Test fixtures: HTTP server providing a resource
var server = Cc["@mozilla.org/server/jshttp;1"]
               .createInstance(Ci.nsIHttpServer);

/**
 * Read bytes string from an nsIInputStream.  If 'count' is omitted,
 * all available input is read.
 */
function readBytesFromInputStream(inputStream, count) {
  var BinaryInputStream = Components.Constructor(
      "@mozilla.org/binaryinputstream;1",
      "nsIBinaryInputStream",
      "setInputStream");
  count = count || inputStream.available();
  return new BinaryInputStream(inputStream).readBytes(count);
}

var serverResource = {
  data: "",
  responseHeaders: {},
  getHeader: null,

  handler: function handler(request, response) {
    var body = "";

    switch (request.method) {
      case "GET":
        body = this.data;
        break;
      case "PUT":
      case "POST":
        this.data = readBytesFromInputStream(request.bodyInputStream);
        body = this.data.length + " bytes received";
        break;
      case "DELETE":
        this.data = "";
        break;
    }

    this.getHeader = function getHeader(header) {
      if (request.hasHeader(header)) {
        return request.getHeader(header);
      }
      return null;
    };

    for (var header in this.responseHeaders) {
      response.setHeader(header, this.responseHeaders[header]);
    }

    response.setStatusLine(request.httpVersion, this.status, "Ignored");
    response.bodyOutputStream.write(body, body.length);
  },

  clear: function clear() {
    this.data = "";
    this.responseHeaders = {};
    this.getHeader = null;
  }
};

server.registerPathHandler("/resource",
                           serverResource.handler.bind(serverResource));
server.start(8080);

/**
 * Provide the XMLHttpRequest constructor on the top level.
 */
function XMLHttpRequest() {
  return Cc["@mozilla.org/xmlextras/xmlhttprequest;1"]
           .createInstance(Ci.nsIXMLHttpRequest);
}

require(["web-resource"], function (resource) {

  test("URI property", function (next) {
    var res = resource.Resource("http://planetexpress.com/");
    equals(res.uri, "http://planetexpress.com/");
    next();
  });

  test("Network error", function (next) {
    var res = resource.Resource("http://localhost:12345/closed-port");
    res.get(function (error, result) {
      equals(error, "ERROR");
      next();
    });
  });

  test("GET 404", function (next) {
    var res = resource.Resource("http://localhost:8080/non-existent");
    res.get(function (error, result) {
      equals(error, null);
      equals(result.status, 404);
      equals(result.success, false);
      next();
    });
  });

  test("GET 200", function (next) {
    serverResource.data = "Ford Model T";
    var res = resource.Resource("http://localhost:8080/resource");
    res.get(function (error, result) {
      equals(error, null);
      equals(result.toString(), "Ford Model T");
      equals(result.status, 200);
      equals(result.success, true);
      serverResource.clear();
      next();
    });
  });

  test("PUT string", function (next) {
    var res = resource.Resource("http://localhost:8080/resource");
    res.put("Austin Seven", function (error, result) {
      equals(result.toString(), "12 bytes received");
      equals(result.status, 200);
      equals(serverResource.data, "Austin Seven");
      serverResource.clear();
      next();
    });
  });

  test("PUT object", function (next) {
    var res = resource.Resource("http://localhost:8080/resource");
    res.put({cylinders: 6}, function (error, result) {
      equals(result.toString(), "15 bytes received");
      equals(result.status, 200);
      equals(serverResource.data, '{"cylinders":6}');
      serverResource.clear();
      next();
    });
  });

  test("POST string", function (next) {
    var res = resource.Resource("http://localhost:8080/resource");
    res.post("BMW 507", function (error, result) {
      equals(result.toString(), "7 bytes received");
      equals(result.status, 200);
      equals(serverResource.data, "BMW 507");
      serverResource.clear();
      next();
    });
  });

  test("POST object", function (next) {
    var res = resource.Resource("http://localhost:8080/resource");
    res.post({cylinders: 12}, function (error, result) {
      equals(result.toString(), "16 bytes received");
      equals(result.status, 200);
      equals(serverResource.data, '{"cylinders":12}');
      serverResource.clear();
      next();
    });
  });

  test("DELETE", function (next) {
    serverResource.data = "Mercedes 300 SL";
    var res = resource.Resource("http://localhost:8080/resource");
    res.del(function (error, result) {
      equals(serverResource.data, "");
      serverResource.clear();
      next();
    });
  });

// XXX the following tests look sound, but they hang for some reason.
return;

  test("request headers", function (next) {
    serverResource.data = "Lamborghini Miura";
    var res = resource.Resource("http://localhost:8080/resource");
    res.setHeader("User-Agent", "Pure JavaScript Awesomeness");
    res.setHeader("X-Power", "120 bhp");
    //TODO user-agent header should be ignored acc to spec
    res.get(function (error, result) {
      equals(serverResource.getHeader("user-agent"),
             "Pure JavaScript Awesomeness");
      equals(serverResource.getHeader("x-power"), "120 bhp");
      serverResource.clear();
      next();
    });
  });

  test("response headers", function (next) {
    serverResource.data = "Volkswagen Beetle";
    serverResource.responseHeaders = {"X-Power": "250 KW",
                                      "Content-Type": "pure/awesomeness"};
    var res = resource.Resource("http://localhost:8080/resource");
    res.get(function (error, result) {
      equals(serverResource.getHeader("content-type"), "pure/awesomeness");
      equals(serverResource.getHeader("x-power"), "250 KW");
      serverResource.clear();
      next();
    });
  });

  //TODO add a "cleanup" hook?
  test("clean up", function (next) {
    server.stop(next);
  });

});

runTests();
