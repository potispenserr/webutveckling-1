var dateInterval;

var timeout;

var picInterval;

let intervalIndex = 0;

window.onload = function(){ 
    dateInterval = setInterval(displayTime, 1000);
    picInterval = setInterval(changePicInterval, 1000);
    
    timeout = setTimeout(displayTimeout, 5000);
    
    let pow = Math.pow(2, 2);
    document.getElementById("mathp").innerHTML += pow + "?";
    
    document.getElementById("boolp").innerHTML = Math.pow(2,2) === 4;
    
    let text = "Globala JavaScript-objekt";
    if (text.search("JavaScript") > 0){
        document.getElementById("regexp").innerHTML += "Ja";
    }
    
    prompt ("Lösenord?");
    
    
};

function displayTime() {
    const datenow = new Date();
    document.getElementById("date").innerHTML = datenow;
}

function displayTimeout() {
    document.getElementById("timeoutp").innerHTML = "TIMEOUT!!!";
}

function dostopTimeoutbutton() {
    window.clearTimeout(timeout);
    
}

function dostopIntervalbutton() {
    window.clearInterval(dateInterval);
}

function changePicInterval() {
    let picture = document.getElementById("picForInterval");
    if(intervalIndex === 0){
        console.log("switching to crane");
        picture.src = "crane.jpg";
        intervalIndex = 1;
        return;
    }
    console.log("switching to beach");
    picture.src = "beach.jpg";
    intervalIndex = 0;
    
    
    
}