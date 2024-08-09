# Olympic Medal Count Calculator Kata

## Overview

This kata is designed to calculate the total number of medals won by various countries in the Olympics based on their medal counts. The task involves taking an array of countries, each with their respective counts of gold, silver, and bronze medals, and returning an array that lists each country alongside its total medal count.

## Requirements

- **Input:** An array of objects, where each object contains:
  - `country`: Name of the country (string)
  - `gold`: Number of gold medals (integer)
  - `silver`: Number of silver medals (integer)
  - `bronze`: Number of bronze medals (integer)

- **Output:** An array of objects with each country and their total medal count:
  - `country`: Name of the country (string)
  - `totalMedals`: Total number of medals (integer)

### Input Example 
const countries = [
    { country: "USA", gold: 10, silver: 5, bronze: 7 },
    { country: "China", gold: 8, silver: 10, bronze: 5 }
];
