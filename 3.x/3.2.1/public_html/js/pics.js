let picIndex = 0;

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


