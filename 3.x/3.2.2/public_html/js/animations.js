//adds click events to buttons and controls animations
$(document).ready(function() {
    $("#fadeOutButton").click(function() {
        $("#picForInterval").fadeOut();

    });

    $("#fadeInButton").click(function() {
        $("#picForInterval").fadeIn();

    });

    $("#fadeToggleButton").click(function() {
        $("#picForInterval").fadeToggle();

    });

    $("#fadeToButton").click(function() {
        $("#picForInterval").fadeTo("slow", 1);

    });

    $("#hideButton").click(function() {
        $("#mousepic").hide();

    });

    $("#showButton").click(function() {
        $("#mousepic").show();

    });

    $("#toggleButton").click(function() {
        $("#mousepic").toggle();

    });

    $("#moveRightButton").click(function() {
        $("#picForInterval").animate({
            left: 500
        }, "fast", "linear", function() {
            alert("Den har animerat klart");

        });

    });



});
