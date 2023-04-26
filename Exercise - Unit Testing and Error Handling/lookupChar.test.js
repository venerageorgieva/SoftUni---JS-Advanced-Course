const lookupChar = require("./lookupChar");
const { assert } = require("chai");

describe("lookupChar function tests", () => {
  it("Return char at index", () => {
    assert(lookupChar("Love", 1) === "o");
  });
  it("Return char at index", () => {
    assert(lookupChar("L", 0) === "L");
  });
  it("index over the string length", () => {
    assert(lookupChar("Love", 10) === "Incorrect index");
  });
  it("Negative string index", () => {
    assert(lookupChar("Love", -10) === "Incorrect index");
  });
  it("Return indefined if the first parameter is not string", () => {
    assert(lookupChar(100, 10) === undefined);
  });
  it("Return indefined if the second parameter is a decimal", () => {
    assert(lookupChar("Love", 10.5) === undefined);
  });
  it("Return indefined if the second parameter is not a number", () => {
    assert(lookupChar("Love", "10") === undefined);
  });
  it("Return indefined if the second parameter is not a number", () => {
    assert(lookupChar("Love", "10") === undefined);
  });
});
