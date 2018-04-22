$(document).ready(function(){

function getQuote() {
  var quotes =
  ["You have enemies? Good. That means you’ve stood up for something, sometime in your life.",
   "Success consists of going from failure to failure without loss of enthusiasm.",
   "If more politicians knew poetry, and more poets knew politics, I am convinced the world would be a little better place in which to live.",
   "We celebrate the past to awaken the future.",
   "America will never be destroyed from the outside. If we falter and lose our freedoms, it will be because we destroyed ourselves.",
   "I am a slow walker, but I never walk back."];

  var authors = [
  "Winston Churchill",
  "Winston Churchill",
  "John F. Kennedy",
  "John F. Kennedy",
  "Abraham Lincoln",
  "Abraham Lincoln"];

  var randomNumber = Math.floor((Math.random()*quotes.length));

  var randomQuote = quotes[randomNumber];
  var randomAuthor = authors[randomNumber];

  $('.quote').text(randomQuote);
  $('.author').text(randomAuthor);
}

$('.btn').on('click', function(){
  getQuote();
});

});
