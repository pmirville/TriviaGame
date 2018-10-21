// TIMER VARIABLE
// Total time for game to run
var totalTime = 10000;

//Timer for overall game
var intervalId;

//Timer for time remaining display
var countDownIntervalId;

// TRIVIA QUESTIONS AND ANSWERS
var question1 = {
  questionText: "What was the first full length CGI movie?",
  answer1: "A Bug's Life",
  answer2: "Monster's Inc.",
  answer3: "Toy Story",
  answer4: "Lion King",
  correctAnswer: "Toy Story"
};

var question2 = {
  questionText: "Which one of these is NOT a name of one of the Spice Girls?",
  answer1: "Sporty Spice",
  answer2: "Old Spice",
  answer3: "Scary Spice",
  answer4: "Posh Spice",
  correctAnswer: "Old Spice"
};
var question3 = {
  questionText: "Which NBA team won the most titles in the 90s?",
  answer1: "New York Knicks",
  answer2: "Portland Trailblazers",
  answer3: "Los Angeles Lakers",
  answer4: "Chicago Bulls",
  correctAnswer: "Chicago Bulls"
};

var question4 = {
  questionText: "Which group release the hit song, Smells Like Teen Spirit?",
  answer1: "Nirvana",
  answer2: "Backstreet Boys",
  answer3: "The Offspring",
  answer4: "No Doubt",
  correctAnswer: "Nirvana"
};

// ARRAY THAT HOLDS ALL QUESTION OBJECTS DEFINED ABOVE
var questionArray = [question1, question2, question3, question4];






//  =================================================
//  OLD CODE BELOW
//  Activity


// TODO: Use jQuery to run "startTriviaGame" when we click the "start-trivia-button" button.
$("#start-trivia-button").click(startTriviaGame);

//THIS FUNCTION IS CALLED WHEN THE GAME IS OVER
function endTriviaGame() {
  alert("Time's Up!");
  clearInterval(countDownIntervalId);
  $(timerDiv).text("0 Seconds Remaining");
}

//THIS FUNCTION IS CALLLED AT THE START OF GAME, UPON USER CLICKING START BUTTON
function startTriviaGame() {
  console.log("Trivia Game Starts Here!");

  //CLEAR THE GAME CONTAINER TO REMOVE THE BUTTON
  $("#game-container").empty();

  //START GAME COUNTDOWN TIMER
  intervalId = setTimeout(endTriviaGame, totalTime);



  //DISPLAY GAME TIMER
  var timerDiv = $("<div></div>").text(Math.floor(totalTime/1000) + " Seconds Remaining");
  var start = new Date;
  countDownIntervalId = setInterval(function () {
    $(timerDiv).text(Math.floor((totalTime-(new Date - start)) / 1000) + " Seconds Remaining");
  }, 1000);



  $("#game-container").append(timerDiv);

  //INSERT HTML FOR THE QUESTIONS
  $.each(questionArray, function (index, value) {
    console.log(value.questionText);



  });

}