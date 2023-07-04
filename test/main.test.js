// Path: src/main.test.js

const getRandomInt = require("../main.js");
// create a unit test for getRandomInt
const { it, expect } = require("@jest/globals");

it("should return a random number between 0 and 10", () => {
	const result = getRandomInt(0, 10);
	expect(result).toBeGreaterThanOrEqual(0);
	expect(result).toBeLessThanOrEqual(10);
}
);



