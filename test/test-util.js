require(["util"], function (util) {

  test("Base64 (RFC-4648 Section 10)", function (next) {
    var base64_test_vectors = {
      "f": "Zg==",
      "fo": "Zm8=",
      "foo": "Zm9v",
      "foob": "Zm9vYg==",
      "fooba": "Zm9vYmE=",
      "foobar": "Zm9vYmFy"
    };

    for (var raw in base64_test_vectors) {
      var base64 = base64_test_vectors[raw];
      equals(util.encodeBase64(raw), base64);
      equals(util.decodeBase64(base64), raw);
    }
    next();
  });

  test("Base64 empty string", function (next) {
    equals(util.encodeBase64(""), "");
    equals(util.decodeBase64(""), "");
    next();
  });

});

runTests();
