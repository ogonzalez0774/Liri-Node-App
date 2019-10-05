//gloval
require("dotenv").config();
const axios = require("axios");
const keys = require("./keys.js");
let [, , ...args] = process.argv;

// this will determine what the search will be and what to do if nothing is searched

//Concert search
if (args[0] === "concert-this") {
  if (args[0] === "concert-this" && args[1] === undefined) {
    console.log(
      "----------------------------",
      "\nPlease Enter An Artist's Name",
      "\n----------------------------"
    );
  } else {
    axios
      .get(
        "https://rest.bandsintown.com/artists/" +
          args[1] +
          "/events?app_id=codingbootcamp"
      )
      .then(function(response) {
        let name = response.data[0].venue.name;
        let city = response.data[0].venue.city;
        let country = response.data[0].venue.country;
        let date = response.data[0].datetime;
        console.log(
          "-----------------",
          "\nName: " + name,
          "\nLocation: " + city + ", " + country,
          "\nDate: " + date,
          "\n-----------------"
        );
      });
  }
}
// this will determine what the search will be and what to do if nothing is searched

// spotify song search

// this will determine what the search will be and what to do if nothing is searched

//movie search
if (args[0] === "movie-this") {
  if (args[0] === "movie-this" && args[1] === undefined) {
  } else {
    axios
      .get(
        "http://www.omdbapi.com/?s=" + args[1] + "&type=movie&apikey=3f79447c"
      )
      .then(function(response) {
        console.log(response.data);
        let title = response.data[0].title;
        let year = response.data[0].year;
        let imdb = response.data[0].imdbID;
        console.log(
          "--------------------",
          "\nTittle: " + title,
          "\nYear: " + year,
          "\n-------------------"
        );
      });
  }
}
