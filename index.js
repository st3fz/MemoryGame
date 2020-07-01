var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

// Detecting initial keypress
$(document).keypress(function() {
  if (!started) {
    $("#level-title").html("Level " + level);
    nextSequence();
    started = true;
  };
});

$(document).click(function() {
  if (!started) {
    $("#level-title").html("Level " + level);
    nextSequence();
    started = true;
  };
});

// Correct pattern
function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  level++;
  $("#level-title").html("Level " + level);
};

// User click
$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

// Play audio
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

// Darken animation
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
};

// Check answer
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success, son.");
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  }
  else {
    console.log("Dayum son, failure.");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    // or
    // playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").html("Game Over, Press Any Key to Restart");
    // or
    // $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
};

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
};
