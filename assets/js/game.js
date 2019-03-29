var wins = 0;
var losses = 0;
var targetNumber
var playerCount

var crystals =
    ["http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg",
        "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg",
        "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg",
        "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg"
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
        alert("you Win ");
        $("#wins").html(wins)
        start();

    }
    if (playerCount > targetNumber) {
        losses++;
        alert("You lose")
        $("#losses").html(losses)
        start();
    }
})

