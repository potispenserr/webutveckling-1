let modal = document.getElementsByClassName("modal");

let img = document.getElementsByClassName("imgToReplace");
let modalImg = document.getElementsByClassName("modalImg");
let captionText = document.getElementsByClassName("modalCaption");

let navbar = document.getElementById("topnav");

//displays the modal when it's clicked
function displayModal(index) {
    modal[index].style.display = "block";
    modalImg[index].src = img[index].src;
    captionText[index].innerHTML = img[index].alt;
    navbar.style.display = "none";
}

//closes the modal
function closeModal(index) {
    modal[index].style.display = "none";
    navbar.style.display = "block";
}
