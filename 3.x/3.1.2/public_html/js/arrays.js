const arr = [];

function doarraybtn() {
    arr.push(1)
    document.getElementById("arrayp").innerHTML = arr;
    document.getElementById("arrayp").setAttribute("newattribute", "newvalue")
    alert("Du la till 1 till arrayen");
}

function docleararraybtn() {
    arr.length = 0;
    let arrayhtml = document.getElementById("arrayp");
    arrayhtml.parentElement.removeChild(arrayhtml); 
}


