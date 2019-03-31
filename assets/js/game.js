var wins = 0;
$("#wins").html(wins)
var losses = 0;
$("#losses").html(losses)
var targetNumber
var playerCount

var crystals =
    ["assets/images/crystals.jpg",
        "assets/images/crystals.jpg",
        "assets/images/crystals.jpg",
        "assets/images/crystals.jpg"
    ]

function start() {
    targetNumber = (Math.floor(Math.random() * 101)) + 19;
    $("#target-number").html(targetNumber);

    playerCount = 0;
    $("#count").text(playerCount);

    $("#crystals").empty();

    for (var i = 0; i < crystals.length; i++) {
        var newCrystal = $("<img>");
        newCrystal.attr("src", crystals[i]);
        newCrystal.addClass("crystal");
        newCrystal.attr("random-value", Math.ceil(Math.random() * 12));
        $("#crystals").append(newCrystal);
    
    };
   
};

start();


$(document).on("click", ".crystal", function () {
    var randomValue = $(this).attr("random-value")
    playerCount = parseInt(randomValue) + playerCount;
    $("#count").text(playerCount);

    if (playerCount === targetNumber) {
        wins++;
        alert("You win!");
        $("#wins").html(wins)
        start();

    }
    if (playerCount > targetNumber) {
        losses++;
        alert("You lose!")
        $("#losses").html(losses)
        start();
    }
})

