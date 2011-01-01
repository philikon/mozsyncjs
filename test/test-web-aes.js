require(["web-aes", "web-util"], function (aes, util) {

  test("encrypt", function (next) {
    var result = aes.encrypt("These are exactly 32 characters!",
                             "16 characters!!!", "hi");
    equals(util.encodeBase64(result), "48GxPGTAavNXEDoVAuiC3w==");
    next();
  });

});

runTests();
