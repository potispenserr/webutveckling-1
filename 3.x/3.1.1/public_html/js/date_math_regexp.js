//window onload function that shows the time, adds numbers and searches a string
window.onload = function(){ 
    const datenow = new Date();
    document.getElementById("date").innerHTML = datenow;
    
    let pow = Math.pow(2, 2);
    document.getElementById("mathp").innerHTML += pow + "?";
    
    document.getElementById("boolp").innerHTML = Math.pow(2,2) == 4
    
    let text = "Globala JavaScript-objekt";
    if (text.search("JavaScript") > 0){
        document.getElementById("regexp").innerHTML += "Ja";
    }
}