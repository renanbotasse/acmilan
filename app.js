
const { getGameData } = require('./index.js');

getGameData(function(gameData) {
  console.log(gameData);
  const today = document.querySelector('.today');
  const options = { weekday: 'long', month: 'long', day: 'numeric', timeZoneName: 'short' };
  const todayDate = new Date().toLocaleString('en-US', options);
  today.textContent = todayDate;
  console.log(todayDate);
});