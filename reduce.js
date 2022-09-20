import { brands } from './data';
import { dogs } from './data';
// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  //reduce takes two arguments brand aka the previous value
  //and brandObject the current value
  //everything will return as a sum in brand
  return brands.reduce((brand, brandObject) => {
    //we use a for loop to interate through the current value key object
    //and return the contents of a sub array
    for (const shoe of brandObject.shoes) {
      //push each shoe onto brand
      brand.push(shoe);
    }
    //return has to go outside the loop block to let code execute for length
    return brand;
  }, []);
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {
  const aggDogAge = dogs.reduce((dog, dogObject) => (dog += dogObject.age), 0);
  return aggDogAge / dogs.length;
};
