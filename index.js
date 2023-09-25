function musicPlay(ButtonText) {
  switch (ButtonText) {
    case "a":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "f":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log("you clicked the worng button");
      break;
  }
}
function addClass(currentKey){
  var pressedKey = "." + currentKey;
  $(pressedKey).addClass("pressed");
  setTimeout(function(){
    $(pressedKey).removeClass("pressed");
  }, 100);
}

$("button").on("click", function () {
  var clickedButtonText = this.innerText;
  musicPlay(clickedButtonText);
  addClass(clickedButtonText);
});

document.addEventListener("keypress", function (event) {
  musicPlay(event.key);
  addClass(event.key);
});
