let picIndex = 0;
//changes picture when mouse is over picture
function mouseoverpic() {
    if(picIndex === 0){
        let picture = document.getElementById("mousepic");
        picture.src = "crane.jpg";
        picIndex = 1;
        
    }
    else {
        let picture = document.getElementById("mousepic");
        picture.src = "beach.jpg";
        picIndex = 0;
    }
    
    
}


