//sends a request and sets the response to an element
function ajaxLoad() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("ajaxtext").innerHTML = this.responseText;
    }

    xhttp.open("GET", "https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php?number1=123&number2=456", true);
    xhttp.send();
}