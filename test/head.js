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

var _tests = [],
    _results = [],
    _current = null,
    _total = 0,
    _failed = 0,
    _quit = false;

function test(name, callback) {
  _tests.push([name, callback]);
}

function setTestStatus(status, error) {
  if (status === "FAIL") {
    _failed += 1;
  }
  _results.push([_current[0], status, error]);
  print(_current[0] + "\t" + (error ? status + " " + error : status));
}

function runTests() {
  if (!_tests.length) {
    print("Ran " + _total + " tests. " + (_total - _failed) + " passed, "
          + _failed + " failed.");
    _quit = true;
    return;
  }
  _current = _tests.shift();
  _total += 1;
  try {
    _current[1](function () {
      setTestStatus("PASS", null);
      runTests();
    });
  } catch(ex) {
    setTestStatus("FAIL", ex);
    runTests();
  }
  _main();
}

// Keep test runner alive until last test has run
function _main() {
  var thread = Components.classes["@mozilla.org/thread-manager;1"]
                         .getService().currentThread;

  while (!_quit)
    thread.processNextEvent(true);

  while (thread.hasPendingEvents())
    thread.processNextEvent(true);
}

function assert(bool, message) {
  message = message || "Assertion failed!";
  if (!bool) {
    try {
      setTestStatus("FAIL", message);
      throw message;
    } finally {
      runTests();
    }
  }
}

function equals(actual, expected, message) {
  assert(actual === expected, message || (actual + " != " + expected));
}
