
const heading = document.getElementById("mouseclick");
//displays the coords where the mouse clicked
function showcoords(event) {
  let x = event.pageX;
  let y = event.pageY;
  let coords = "X: " + x + ", Y: " + y;
  let element = document.getElementById("h2coords");
  
  element.innerHTML = coords;
}

heading.addEventListener("click", showcoords);

//removes the eventlistener for the h2 tag
function removeEvent() {
    heading.removeEventListener("click", showcoords);
}


