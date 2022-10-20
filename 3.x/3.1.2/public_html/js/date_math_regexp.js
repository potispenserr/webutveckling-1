var dateInterval;

var timeout;

window.onload = function(){ 
    dateInterval = setInterval(displayTime, 1000);
    
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