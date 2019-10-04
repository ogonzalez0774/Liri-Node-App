//gloval 
require("dotenv").config();
const axios = require("axios")
const keys = require("./keys.js");
let [, , ...args] = process.argv

// this will determine what the search will be and what to do if nothing is searched

//Concert search
if (args[0] === "concert-this") {
    if (args[0] === "concert-this" && args[1] === undefined) {
        console.log(
            "----------------------------",
            "\nPlease Enter An Artist's Name",
            "\n----------------------------")
    } else {
        axios.get("https://rest.bandsintown.com/artists/" + args[1] + "/events?app_id=codingbootcamp").then(
            function (response) {
                let name = response.data[0].venue.name
                let city = response.data[0].venue.city
                let country = response.data[0].venue.country
                let date = response.data[0].datetime
                console.log(
                    "-----------------",
                    "\nName: " + name,
                    "\nLocation: " + city + ", " + country,
                    "\nDate: " + date,
                    "\n-----------------"
                );
            })
    }
};
// this will determine what the search will be and what to do if nothing is searched

//spotify song search
// if (args[0] === "spotify-this-song") {
//     if (args[0] === "spotify-this-song" && args[1] === undefined) {
//         console.log("----------------------------",
//             "\nPlease Enter A Song Name",
//             "\n----------------------------")
//     } else {
//         const Spotify = require('node-spotify-api');

//         const spotify = new Spotify({
//             id: "4e4cfacf4f944db59467b76d1627692b",
//             secret: "40b7c8d69a704900adf7ea9329857328"
//         });

//         spotify
//             .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//             .then(function (data) {
//                 console.log(data);
//             })
//             .catch(function (err) {
//                 console.error('Error occurred: ' + err);
//             });
//     }
// }

// this will determine what the search will be and what to do if nothing is searched

//movie search
if (args[0] === "movie-this") {
    if (args[0] === "movie-this" && args[1] === undefined) {

    } else {
        axios.get("http://www.omdbapi.com/?s=" + args[1] +
            "&type=movie&apikey=3f79447c").then(
            function (response) {
                console.log(response.data)
                let title = response.data[0].title
                let year = response.data[0].year
                let imdb = response.data[0].imdbID
                console.log(
                    "--------------------",
                    "\nTittle: " + title,
                    "\nYear: " + year,
                    "\n-------------------")

            })
    }
}