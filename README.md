# CLI-APP

### Requirements

- Make a Node.js app that depends on user input from the command line

- Integrate BandsInTown, Spotify, and OMDb APIs via the appropriate NPM modules

- Use API calls and parse through returned JSON objects, outputting them in a specified format

- Read commands and queries from file

### Target

- This app is an easy solution for those who want to search a song, or a movie, or look the next concert for their favorite artist

### Technologies Used

- Node.js
- JavaScript
- Spotify API (via spotify npm module)
- OMDb API (via request npm module)
- BandsInTown API

### Code Explanation

- Authentication keys for spotify are stored in "keys.js", and we are exporting its contents to the main "liri.js" file

- What our app does depends on what the user types, and there are 4 main functions:

  - (1) prints location of concert, location and time

  - (2) Spotify lookup for a song

  - (3) OMDb lookup for a movie

  - (4) read command and query from another file

* The program makes request to the BandsInTown API, and we get back a JSON object that includes everything we need (location and time of concert)

* The program also makes a request to the Spotify API, and we get back a JSON object that includes everything we need (artist(s), song, preview link, and album)

* The program also makes a HTTP request to the OMDb API using the request NPM module, and we get back a JSON object that includes everything we need (title, year, IMDb rating, language, etc.)

* The program also reads from a file called "random.text" and executes the command and query found there using string and array methods
  Appropriate comments and error-checking has been added

### Video of results

- Video Of Working Product(https://www.youtube.com/watch?v=e3ULJARsBhU)
