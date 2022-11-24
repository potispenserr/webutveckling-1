let modal = document.getElementsByClassName("modal");

let img = document.getElementById("painting");
let modalImg = document.getElementById("modalImg");
let captionText = document.getElementById("caption");

//displays the modal when it's clicked
function displayModal() {
    modal[0].style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

//closes the modal
function closeModal() {
    modal[0].style.display = "none";
}
