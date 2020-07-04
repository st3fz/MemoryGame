// Detecting clicks
for (var i = 0; i <= 6; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    this.style.color = "#ffae8f"
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


// Detecting keydown
document.addEventListener("keydown", function(event) {
  var button = document.getElementsByClassName(String.fromCharCode(event.which).toLowerCase())[0];
  var buttonInnerHTML = button.innerHTML;
  button.style.color = "#ffae8f";
  makeSound(event.key);
  buttonAnimation(event.key);
})

// makeSound function
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    case "l":
      var kickbass = new Audio("kick-bass.mp3");
      kickbass.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

// Animation
function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");
  setTimeout(function(){document.querySelector("." + currentKey).classList.remove("pressed");}, 80);
}
