prompt('Welcome to the Crystal Challenge");

var targetNumber = Math.floor(Math.random() * 120) + 19;
var counter 0;
var wins 0;
var losses 0;

$(#"number-to-guess").text(targetNumber);
$("#wins").text(wins);
$("#losses").text(losses);

for (var i = 0; i < numberOptions.length; i++) {
}
// For each iteration, we will create an imageCrystal
var imageCrystal = $("<img>");
// First each crystal will be given the class ".crystal-image".
// This will allow the CSS to take effect.
imageCrystal.addClass("crystal-image");

// Each imageCrystal will be given a src link to the crystal image
imageCrystal.attr("src", "file:///C:/Users/Icesmooth/Desktop/code/week-4-game/assets/images/164187718-crystal-wallpapers.jpg");

$(document).ready(function () {



    var compPick = Math.floor(Math.random() * 102) + 19;
    console.log("compPick: " + compPick);
    $(".randomNumber").html(compPick);

    // var randomArray = []; 
    // 	console.log("randomArray: " + randomArray); 

    // for (i = 0 ; i < 4 ; i++) {
    // 	var gemNumber = Math.floor(Math.random() * 12) + 1; 
    // 		console.log("gemNumber: " + gemNumber); 
    // 	randomArray.push(gemNumber); 
    // }

    var gemOne = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 1: " + gemOne);
    $("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + gemOne + ">");

    var gemTwo = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 2: " + gemTwo);
    $("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + gemTwo + ">");

    var gemThree = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 3: " + gemThree);
    $("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + gemThree + ">");

    var gemFour = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 4: " + gemFour);
    $("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + gemFour + ">");

    var wins = 0;
    console.log("wins: " + wins);

    var losses = 0;
    console.log("losses: " + losses);

    var score = 0;
    console.log("score: " + score);

    function reset() {
        compPick = Math.floor(Math.random() * 102) + 19;
        console.log("compPick: " + compPick);
        $(".randomNumber").html(compPick);

        score = 0;
        $(".scoreDisplay").html(score);

        gemOne = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 1: " + gemOne);
        $("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + gemOne + ">");

        gemTwo = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 2: " + gemTwo);
        $("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + gemTwo + ">");

        gemThree = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 3: " + gemThree);
        $("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + gemThree + ">");

        gemFour = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 4: " + gemFour);
        $("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + gemFour + ">");

        $("img").on("click", function () {
            var newScore = score += parseInt($(this).attr("value"));
            console.log("New Score: " + newScore);
            $(".scoreDisplay").html(newScore);

            if (newScore === compPick) {
                wins++;
                $(".wins").html("Wins: " + wins);
                console.log("Wins: " + wins);
                reset();

            }

            else if (newScore > compPick) {
                losses++;
                $(".losses").html("Losses: " + losses);
                console.log("Losses: " + losses);
                reset();

            }

        });



    }

    $("img").on("click", function () {
        var newScore = score += parseInt($(this).attr("value"));
        console.log("New Score: " + newScore);
        $(".scoreDisplay").html(newScore);

        if (newScore === compPick) {
            wins++;
            $(".wins").html("Wins: " + wins);
            console.log("Wins: " + wins);
            reset();
        }

        else if (newScore > compPick) {
            losses++;
            $(".losses").html("Losses: " + losses);
            console.log("Losses: " + losses);
            reset();
        }

    });

});