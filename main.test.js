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

