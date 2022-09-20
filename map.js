// INPUT: the array of countries from data.js
import { countries } from './data';
import { brands } from './data';
// OUTPUT: an array of the names
// REQS: use .map

export const getCountryNames = (countries) => {
  const names = countries.map((country) => country.name);
  return names;
};

// INPUT: the array of countries from data.js
// OUTPUT: an array of the names and their iso2 country codes using .map
// REQS: use .map

export const getCountryCodes = (countries) => {
  const codes = countries.map((country) => [country.name, country.iso2]);
  return codes;
};

// INPUT: the array of shoes from data.js
// OUTPUT: an array of the brands
// REQS: use .map

export const getBrands = (brands) => {
  const brandNames = brands.map((brand) => brand.brand);
  return brandNames;
};
