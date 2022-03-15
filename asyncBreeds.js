// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, done) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) done(data);
    else done(undefined);
  });
};

// export the function
module.exports = breedDetailsFromFile;

// Testing
// const printOutCatBreed = breed => {
//   console.log('Return Value: ', breed) // => print out details correctly.
// };

// // two arguments into breedDetailsFromFile: breed string and a callback function
// breedDetailsFromFile('Bombay', printOutCatBreed);