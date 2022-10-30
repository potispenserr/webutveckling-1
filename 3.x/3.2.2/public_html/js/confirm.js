// creates a confirm and expects an answer
function domathbutton() {
    var result;  
    var r = confirm("Välj ett svar!");  
    if (r === true) {  
        result = "Ja!";  
    } else {  
        result = "Nej!";  
    }  
    document.getElementById("boolp").innerHTML = result;  
}


