
const heading = document.getElementById("mouseclick");

function showcoords(event) {
  let x = event.pageX;
  let y = event.pageY;
  let coords = "X: " + x + ", Y: " + y;
  let element = document.getElementById("h2coords");
  
  element.innerHTML = coords;
}

heading.addEventListener("click", showcoords);


function removeEvent() {
    heading.removeEventListener("click", showcoords);
}


