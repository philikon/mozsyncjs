
test("properties", ["resource-xhr"], function (resource) {
  var res = new resource.Resource("http://planetexpress.com/");
  equals(res.uri, "http://planetexpress.com/");
});

runTests();
