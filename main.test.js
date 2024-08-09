import { describe, test, expect } from "vitest";
import { calculateTotalMedals } from "./main.js"; // Ensure this path is correct

describe('calculateTotalMedals', () => {
    test('should return total medals for each country', () => {
        // Input data
        const countries = [
            { country: "USA", gold: 10, silver: 5, bronze: 7 },
            { country: "China", gold: 8, silver: 10, bronze: 5 }
        ];
        
        // Call the function with the input
        const result = calculateTotalMedals(countries);
        
        // Expected output
        expect(result).toEqual([
            { country: "USA", totalMedals: 22 },
            { country: "China", totalMedals: 23 }
        ]);
    });

    
  
});







/*import { describe, test, expect } from "vitest"; // Import describe, test, and expect from Vites
import { getTopCountries } from "./main.js";

// Import the function to test
const getTopCountries = require('./main'); // Ensure the path to main.js is correct

// Test suite for the getTopCountries function
describe('getTopCountries', () => {

    test('should return countries sorted by total score', () => {
        const countries = [
            { country: "USA", gold: 10, silver: 5, bronze: 7 },
            { country: "China", gold: 8, silver: 10, bronze: 5 },
            { country: "Russia", gold: 8, silver: 10, bronze: 6 },
            { country: "Japan", gold: 7, silver: 5, bronze: 10 }
        ];
        const result = getTopCountries(countries);
        expect(result).toEqual(["USA", "Russia", "China", "Japan"]);
    });

    test('should handle countries with zero medals', () => {
        const countries = [
            { country: "CountryA", gold: 0, silver: 0, bronze: 0 },
            { country: "CountryB", gold: 1, silver: 0, bronze: 0 }
        ];
        const result = getTopCountries(countries);
        expect(result).toEqual(["CountryB", "CountryA"]);
    });

    test('should return countries sorted by gold medals when scores are tied', () => {
        const countries = [
            { country: "CountryA", gold: 5, silver: 5, bronze: 5 },
            { country: "CountryB", gold: 6, silver: 4, bronze: 5 },
            { country: "CountryC", gold: 5, silver: 6, bronze: 5 }
        ];
        const result = getTopCountries(countries);
        expect(result).toEqual(["CountryB", "CountryC", "CountryA"]);
    });

    test('should return countries sorted by silver medals when gold medals are tied', () => {
        const countries = [
            { country: "CountryA", gold: 5, silver: 5, bronze: 5 },
            { country: "CountryB", gold: 5, silver: 6, bronze: 5 },
            { country: "CountryC", gold: 5, silver: 4, bronze: 6 }
        ];
        const result = getTopCountries(countries);
        expect(result).toEqual(["CountryB", "CountryA", "CountryC"]);
    });

    test('should return countries sorted by bronze medals when both gold and silver medals are tied', () => {
        const countries = [
            { country: "CountryA", gold: 5, silver: 5, bronze: 5 },
            { country: "CountryB", gold: 5, silver: 5, bronze: 6 },
            { country: "CountryC", gold: 5, silver: 5, bronze: 4 }
        ];
        const result = getTopCountries(countries);
        expect(result).toEqual(["CountryB", "CountryA", "CountryC"]);
    });

    test('should maintain original order if all medals are the same', () => {
        const countries = [
            { country: "CountryA", gold: 1, silver: 1, bronze: 1 },
            { country: "CountryB", gold: 1, silver: 1, bronze: 1 },
            { country: "CountryC", gold: 1, silver: 1, bronze: 1 }
        ];
        const result = getTopCountries(countries);
        expect(result).toEqual(["CountryA", "CountryB", "CountryC"]);
    });
});*/



/*test("should return -1 for strings with an odd length", () => {
  const expected = -1;
  const actual = checkLength("table");
  expect(actual).toBe(expected);
});

test("should return 1 for strings with an even length", () => {
  const expected = 1;
  const actual = checkLength("wizard");
  expect(actual).toBe(expected);
});*/
