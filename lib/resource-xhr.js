/**
 * API for a REST resource (get, put, post, delete) wrapping around XHR
 *
 *   Resource("http://site.com/api/frobnaz").get(function (error, response) {
 *     ...
 *   });
 */

"use strict";

define("resource-xhr", ["exports"], function (exports) {

  /**
   * Object template for a result object.
   */
  var result = {
    response: null,
    status: null,
    success: null,

    getHeader: function getHeader(header) {
      throw "Not implemented";
    },

    toString: function toString() {
      return this.response;
    }
  };

  function makeRequest(method, uri, headers, body, callback) {
    var req = new XMLHttpRequest();
    req.open(method, uri);

    req.onload = function onload() {
      var res = Object.create(result);
      res.response = this.responseText;
      res.status = this.status;
      res.success = this.status === 200;
      res.getHeader = function getHeader(header) {
        return req.getResponseHeader(header);
      };
      callback(null, res);
    };

    req.onerror = function onerror(event) {
      callback("ERROR", null);
    };

    req.onabort = function onabort() {
      callback("ABORTED", null);
    };

    if (Object.prototype.toString.call(body) !== "[object String]") {
      body = JSON.stringify(body);
    }
    req.send(body);
  }

  /**
   * Object template for a resource object.
   */
  var resource = {
    uri: null,
    headers: null,

    setHeader: function setHeader(name, value) {
      if (this.headers === null) {
        this.headers = {};
      }
      this.headers[name.toLowerCase()] = value;
    },

    get: function get(callback) {
      makeRequest("GET", this.uri, this.headers, null, callback);
    },

    put: function put(body, callback) {
      makeRequest("PUT", this.uri, this.headers, body, callback);
    },

    post: function post(body, callback) {
      makeRequest("POST", this.uri, this.headers, body, callback);
    },

    del: function del(callback) {
      makeRequest("DELETE", this.uri, this.headers, null, callback);
    }
  };

  exports.Resource = function Resource(uri) {
    var res = Object.create(resource);
    res.uri = uri;
    return res;
  };

  exports.BasicAuthResourceMaker = function BasicAuthResourceMaker(username, password) {
    //TODO
  };

});
