const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("X");

const params = {
  q: "ac milan",
  location: "portugal"
  game_spotlight: "games"
};

const callback = function(data) {
	console.log(data["sports_results"]);
};

// Show result as JSON
const result = search.json(params, callback);
console.log(search.json(params, callback));
console.log(result);
console.log(result);