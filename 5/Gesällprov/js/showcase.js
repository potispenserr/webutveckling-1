var timeoutHolder;

var timeoutIndex = 1;

picInterval = setTimeout(picTimeout, 3000);

//function that handles the timeout
function picTimeout() {
    $(".bgimg1").fadeOut("slow", function(){
        let picture = document.getElementsByClassName("bgimg1");
        if(timeoutIndex === 0){
            picture[0].style.backgroundImage = "url(media/parallax.jpg)";
            timeoutIndex = 1;
            return;
        }
        picture[0].style.backgroundImage = "url(media/parallax4.jpg)";
        timeoutIndex = 0;

      });
    $(".bgimg1").fadeIn("fast", "swing");
    timeoutHolder = setTimeout(picTimeout, 3000);
}
