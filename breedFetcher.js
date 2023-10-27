// require request
const request = require("request");

//try {

const URL = "https://api.thecatapi.com/v1/breeds/search?q=sib";

const result = URL;

/*
  console.log('Result:', result);
} catch (error) {
  // Code that will run if there's an exception
  console.log('An error occurred:', error);
}
*/


request(URL, function(error, response, body) {

  //
  if (error) {
    console.log("There could be a major error.", error);
  }

  if (response.statusCode === 200) {
    console.log(body);

    const data = JSON.parse(body);

    console.log(data);
  }

/*
  console.error('error:', error); // Print the error if one occurred

  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received


  console.log('body:', body); // Print the HTML for the Google homepage.
*/

  
  
});

// Code that may throw an exception


