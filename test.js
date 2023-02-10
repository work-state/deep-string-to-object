const assert = require("chai").assert;
require("mocha");
const deepConvert = require(".");

describe("deep string to object", function () {
  it("should convert a deep string to object", function () {
    var chain = "a.b.c.d.e";
    var value = 12;

    var output = { a: { b: { c: { d: { e: 12 } } } } };
    assert.deepEqual(deepConvert(chain, value), output);
  });

  it("should convert a string to object", function () {
    var chain = "a";
    var value = 12;

    var output = { a: 12 };
    assert.deepEqual(deepConvert(chain, value), output);
  });
});
