for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    drumPlay(this.innerHTML);
  });
}
function drumPlay(buttonTExt) {
	switch (buttonTExt) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log(buttonTExt);
      break;
  }
}
/* function HouseKeeper(name, age, workPermit, language, cleaningReport) {
  this.name = name;
  this.age = age;
  this.workPermit = workPermit;
  this.language = language;
  this.clean = function () {
    alert("....cleaning in progress");
  };
}
var houseKeeper1 = new HouseKeeper("timmy", 23, true, ["spanish", "English"]);
console.log(houseKeeper1.language); */

document.addEventListener("keypress", function (event) {
	drumPlay(event.key);
});