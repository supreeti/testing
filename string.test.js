const stringLen = require("./stringLen");

// checks if function takes args and returns count
test("String length", () => {
  expect(stringLen("abc")).toBe(3);
  expect(stringLen("")).toBe(1);
  expect(stringLen("abcdefghijklmnopqrstuvwxyz")).toBeLessThanOrEqual(16);
});

const revString = require("./revString");

test("String is reversed", () => {
  expect(revString("abcd")).toBe("dcba");
});

const calculator = require("./calculator");

describe("Calculator", () => {
  test("Add", () => {
    expect(calculator.Add(1,1)).toBe(2);
  });
  test("Subtract", () => {
    expect(calculator.Subtract(1,1)).toBe(0);
  });
  test("Multiply", () => {
    expect(calculator.Multiply(1,1)).toBe(1);
  });
  test("Divide", () => {
    expect(calculator.Divide(1,1)).toBe(1);
  });
  
});

const capString = require("./capitalize");

test("string", () => {
  expect(capString("str")).toBe("String");
});