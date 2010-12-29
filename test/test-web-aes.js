require(["web-aes", "web-util"], function (aes, util) {

  test("encrypt", function (next) {
    var result = aes.encrypt("These are exactly 32 characters!",
                             "16 characters!!!", "hi");
         print(result);
    //equals(result, util.decodeBase64("48GxPGTAavNXEDoVAuiC3w=="));
    next();
  });

});

runTests();
