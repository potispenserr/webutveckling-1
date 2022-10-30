var dateInterval;

var timeout;

//window onload function that shows the time, adds numbers, searches a string, displays an alert
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

// function for updating the time on an interval 
function displayTime() {
    const datenow = new Date();
    document.getElementById("date").innerHTML = datenow;
}

//displays text on a timeout
function displayTimeout() {
    document.getElementById("timeoutp").innerHTML = "TIMEOUT!!!";
}

//stops timeout
function dostopTimeoutbutton() {
    window.clearTimeout(timeout);
    
}

//stops interval
function dostopIntervalbutton() {
    window.clearInterval(dateInterval);
    
}