// EVENTS
// the events are happening on the html file and all we do in JavaScript is to list to them and react to them
// triggered by user or browser
// two ways to listen to events: 1)listen in html inline or 2) in JavaScript

var submitBtn = document.getElementById("submit"),
  container = document.querySelector(".container");

submitBtn.addEventListener("click", function (event) {
  console.log("Clicked!");
});

container.addEventListener("mouseenter", MouseEnterContainer);

function MouseEnterContainer() {
  console.log("Hey there was a mouser enter event triggered!");
  container.removeEventListener("mouseenter", MouseEnterContainer);
}

document.addEventListener("keyup", function (event) {
  console.log(event.keyCode);
});
