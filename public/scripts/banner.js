var leftButton = document.querySelector("#carousel-button-left");
var rightButton = document.querySelector("#carousel-button-right");

var button0 = document.querySelector("li#carousel-button0");
var button1 = document.querySelector("li#carousel-button1");

function checkForChanges() {
  if ($(".left-item").hasClass("active")) {
    leftButton.childNodes[1].style.background = "#f4cb5e";
    rightButton.childNodes[1].style.background = "#e4e4e4";
  } else if ($(".right-item").hasClass("active")) {
    rightButton.childNodes[1].style.background = "#f4cb5e";
    leftButton.childNodes[1].style.background = "#e4e4e4";
  }
}
setInterval(checkForChanges, 500);

function clickHandler(event) {
  if (event.target.id === "carousel-button-left") {
    button0.click();
  } else if (event.target.id === "carousel-button-right") {
    button1.click();
  }
}

leftButton.addEventListener("click", clickHandler);
rightButton.addEventListener("click", clickHandler);
