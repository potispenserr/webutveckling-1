kinput.onkeypress = handle;

function handle(key) {
    let textarea = document.getElementById("keypresses");
    textarea.innerHTML = key.key;
}

function mouseisover() {
    let textarea = document.getElementById("keypresses");
    textarea.innerHTML = "musen hovrar över textfältet";
}

function mouseisout() {
    let textarea = document.getElementById("keypresses");
    textarea.innerHTML = "";
}


