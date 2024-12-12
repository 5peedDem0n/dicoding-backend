import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("should sum 2 arguments correctly", () => {
  const operandA = 1;
  const operandB = 1;

  const actualValue = sum(operandA, operandB);

  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});

test("should return 0 if operandA is string", () => {
  const actualValue = () => {
    const operandA = "3";
    const operandB = 1;

    return sum(operandA, operandB);
  };

  const expectedValue = 0;

  assert.equal(actualValue(), expectedValue);
});

test("should return 0 if operandB is string", () => {
  const actualValue = () => {
    const operandA = 3;
    const operandB = "1";

    return sum(operandA, operandB);
  };

  const expectedValue = 0;

  assert.equal(actualValue(), expectedValue);
});

test("should return 0 if operandA is less than 0", () => {
  const actualValue = () => {
    const operandA = -2;
    const operandB = 1;

    return sum(operandA, operandB);
  };

  const expectedValue = 0;

  assert.equal(actualValue(), expectedValue);
});

test("should return 0 if operandB is less than 0", () => {
  const actualValue = () => {
    const operandA = 2;
    const operandB = -1;

    return sum(operandA, operandB);
  };

  const expectedValue = 0;

  assert.equal(actualValue(), expectedValue);
});
