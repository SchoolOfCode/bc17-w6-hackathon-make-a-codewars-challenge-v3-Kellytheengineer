/*
 * Hello Challenger! 
 * Your task is to write a function named `calculateTotalMedals` which takes in an array of countries.
 * Each country object contains the number of gold, silver, and bronze medals won.
 * The function should return an array of objects, each containing the country name and the total number of medals.
 * 
 * The total number of medals is calculated as: totalMedals = gold + silver + bronze.
 * 
 * Your implementation should handle arrays with at least 0 and up to 2500 countries.
 *
 * Good luck!
 */

// Function to calculate total medals for each country

function calculateTotalMedals(countries) {
  return countries.map(({ country, gold, silver, bronze }) => ({
      country,
      totalMedals: gold + silver + bronze
  }));
}

export { calculateTotalMedals };

// User code to input countries and calculate medals
const countries = [
    { country: "USA", gold: 10, silver: 5, bronze: 7 },
    { country: "Great Britian ", gold: 8, silver: 10, bronze: 5 }
];

// Calling the function with the countries array
const result = calculateTotalMedals(countries);

// Output the result
console.log(result);

// Named export
export { calculateTotalMedals };



