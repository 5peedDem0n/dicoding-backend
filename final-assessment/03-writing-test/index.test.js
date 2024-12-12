import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("should sum 2 numbers", () => {
  const operandA = 2;
  const operandB = 3;

  const actuanValue = sum(operandA, operandB);

  const expectedValue = 5;
  assert.equal(actuanValue, expectedValue);
});
