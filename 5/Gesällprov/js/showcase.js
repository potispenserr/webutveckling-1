var timeoutHolder;

var timeoutIndex = 0;

picInterval = setTimeout(picTimeout, 3000);

//function that handles the timeout
function picTimeout() {
    console.log("timeout");
    $("#timeoutPic").fadeOut("slow", function(){
        let picture = document.getElementById("timeoutPic");
        if(timeoutIndex === 0){
            picture.src = "media/crane.jpg";
            timeoutIndex = 1;
            return;
        }
        picture.src = "media/beach.jpg";
        timeoutIndex = 0;

      });
    $("#timeoutPic").fadeIn("slow", "swing");
    timeoutHolder = setTimeout(picTimeout, 3000);
}
