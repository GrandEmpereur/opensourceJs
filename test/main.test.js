// Path: src/main.test.js

const getRandomInt = require("../main.js");
// create a unit test for getRandomInt
const { it, expect } = require("@jest/globals");

it("getRandomInt returns a number greater than or equal to 0", () => {
	const result = getRandomInt();
	expect(typeof result).toBe("number");
	expect(result).toBeGreaterThanOrEqual(0);
});



