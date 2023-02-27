const express = require('express');
const app = express();
const hbs = require('hbs');
const { getGameData } = require('./index.js');

// Set up the view engine
app.set('view engine', 'hbs');

// Set up the path to your views directory
app.set('views', __dirname + '/views');

// Register the partials directory
hbs.registerPartials(__dirname + '/views');

// set the MIME type for .css files
app.set('Content-Type', 'text/css');

// serve static files from the 'public' directory
app.use(express.static('public'));

// Set up the route to render the template
app.get('/', function(req, res) {
  getGameData(function(gameData) {
    const today = new Date().toDateString();
    const context = {
      title: 'AC Milan Game',
      date: today,
      tournament: gameData.tournament,
      homeTeam: gameData.homeTeam,
      homeTeamImgLink: gameData.homeTeamImgLink,
      awayTeam: gameData.awayTeam,
      awayTeamImgLink: gameData.awayTeamImgLink,
      gameDate: gameData.date,
    };    
    res.render('template', context);
  });
});

// Start the server
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
