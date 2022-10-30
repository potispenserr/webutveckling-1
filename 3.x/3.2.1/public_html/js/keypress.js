kinput.onkeypress = handle;
//displays what key was pressed
function handle(key) {
    let textarea = document.getElementById("keypresses");
    textarea.innerHTML = key.key;
}
//function for when mouse is over the text field
function mouseisover() {
    let textarea = document.getElementById("keypresses");
    textarea.innerHTML = "musen hovrar över textfältet";
}

//funtion for when the mouse moved away from the text field
function mouseisout() {
    let textarea = document.getElementById("keypresses");
    textarea.innerHTML = "";
}


