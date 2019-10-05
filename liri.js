//gloval
require("dotenv").config();
let Spotify = require('node-spotify-api');
const axios = require("axios");
const keys = require("./keys.js");
const fs = require("fs")
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
        "https://rest.bandsintown.com/artists/" + args[1] + "/events?app_id=codingbootcamp"
      )
      .then(function (response) {
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
if (args[0] === "spotify-this-song") {
  if (args[0] === "spotify-this-song" && args[1] === undefined) {
    console.log(
      "----------------------------",
      "\nPlease Enter A Song",
      "\n----------------------------"
    );
  } else {
    let spotify = new Spotify({
      id: "4e4cfacf4f944db59467b76d1627692b",
      secret: "40b7c8d69a704900adf7ea9329857328"
    });

    spotify
      .search({
        type: "track",
        query: args[1]
      }).then(function (response) {
        console.log(

          "-----------------------------",
          // "\n", response.tracks.items[0],
          "\n" + "Artist Name:", response.tracks.items[0].artists[0].name,
          "\n" + "Song Name:", response.tracks.items[0].name,
          "\n" + "URL Preview:", response.tracks.items[0].preview_url,
          "\n" + "Album Name:", response.tracks.items[0].album.name,
          "\n-----------------------------",
        )
      })

  }
}
// this will determine what the search will be and what to do if nothing is searched

//movie search
if (args[0] === "movie-this") {
  if (args[0] === "movie-this" && args[1] === undefined) {
    console.log(
      "----------------------------",
      "\nPlease Enter A Movie",
      "\n----------------------------"
    );
  } else {
    axios
      .get(
        "http://www.omdbapi.com/?t=" + args[1] + "&apikey=3f79447c"
      )
      .then(function (response) {
        console.log(
          "--------------------------------------------------",
          "\nTittle: " + response.data.Title,
          "\nYear: " + response.data.Year,
          "\nImdb Rating: " + response.data.imdbRating,
          "\nCountry: " + response.data.Country,
          "\nLanguage: " + response.data.Language,
          "\nPlot: " + response.data.Plot,
          "\nActors: " + response.data.Actors,
          "\n--------------------------------------------------"
        );
      });
  }
}

if (args[0] === "do-what-it-says") {

  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }
    console.log(data);




  });
}