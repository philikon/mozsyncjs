/**
 * Simple test harness
 * 
 * Requires the 'load' and 'print' functions as provided by SpiderMonkey.
 * 
 * Define a test like so:
 * 
 *   test("test name", [dependencies], function (dep1) {
 *     ...
 *   });
 * 
 * Then run tests:
 * 
 *   runTests();
 * 
 */
require.attach = function (url, contextName, moduleName, callback, type) {
  load(url);
  require.s.contexts[contextName].completeLoad(moduleName);
};

var tests = [],
    total = 0,
    failed = 0,
    results = [];

function test(name, deps, callback) {
  tests.push([name, deps, callback]);
}

function runTests() {
  if (!tests.length) {
    print("Ran " + total + " tests. " + (total - failed) + " passed, "
          + failed + " failed.");
    return;
  }
  var testCase = tests.shift();
  require(testCase[1], function () {
    var status = "PASS";
    var error = null;
    try {
      testCase[2].apply(this, arguments);
    } catch(ex) {
      error = ex;
      status = "FAIL";
      failed += 1;
    }
    total += 1;
    results.push([testCase[0], status, error]);
    print(testCase[0] + "\t" + (error ? status + " " + error : status));
    runTests();
  });
}

function assert(bool, message) {
  message = message || "Assertion failed!";
  if (!bool) {
    throw message;
  }
}

function equals(actual, expected, message) {
  assert(actual == expected, message);
}
