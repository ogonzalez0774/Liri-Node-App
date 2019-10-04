require("dotenv").config();
const axios = require("axios")
const keys = require("./keys.js");
let [, , ...args] = process.argv
if (args[0] === "concert-this") {
    axios.get("https://rest.bandsintown.com/artists/" + args[1] + "/events?app_id=codingbootcamp").then(
        function (response) {
            let name = response.data[0].venue.name
            let city = response.data[0].venue.city
            let country = response.data[0].venue.country
            let date = response.data[0].datetime
            console.log(
                "Name: " + name,
                "\nLocation: " + city + "," + country,
                "\nDate: " + date
            );

        })
};