// Document ready shorthand function
$(function() {
    console.log("ready!")

    //Song and FX button interactivity
    var soundFXwin = document.createElement("audio");
    soundFXwin.setAttribute("src", "assets/pokesoundFXwin.mp3");

    var soundFXdeny = document.createElement("audio");
    soundFXdeny.setAttribute("src", "assets/pokesoundFXdeny.mp3");

    var soundFX = document.createElement("audio");
    soundFX.setAttribute("src", "assets/pokemonsoundFX.mp3");

    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/poketheme.mp3");

    // Theme Button
    $(".theme-button").on("click", function() {
        audioElement.play();
    });

    $(".pause-button").on("click", function() {
        audioElement.pause();
    });

    // Global variables
    var wins = 0;
    var losses = 0;

    var computer = Math.floor(Math.random() * 101) + 19;
    // function to write computer choice to html doc
    $("#computerChoice").text(computer);

    var user = 0;
    // function to write computer choice to html doc
    $("#userTally").text(user);

    var gamesPlayed = 0;
    // function to write computer choice to html doc
    $("#gamesPlayed").text(gamesPlayed);




    var poke1 = Math.floor(Math.random() * 11) + 1;
    var poke2 = Math.floor(Math.random() * 11) + 1;
    var poke3 = Math.floor(Math.random() * 11) + 1;
    var poke4 = Math.floor(Math.random() * 11) + 1;

    // function to write computer choice to html doc
    $("#wins").html(wins);
    $("#losses").html(losses);


    // Game restart
    function restartGame() {
        // computer gets new number as well as pokeballs
        computer = Math.floor(Math.random() * 101) + 19;
        $("#computerChoice").text(computer);
        poke1 = Math.floor(Math.random() * 11) + 1;
        poke2 = Math.floor(Math.random() * 11) + 1;
        poke3 = Math.floor(Math.random() * 11) + 1;
        poke4 = Math.floor(Math.random() * 11) + 1;
        user = 0;
        $("#userTally").text(user);
        // Games played tally goes up every time game restarts.
        gamesPlayed++;
        $("#gamesPlayed").text(gamesPlayed);

    }

    function win() {

        soundFXwin.play();
        alert("You win!");
        wins++;
        $("#wins").text(wins);
        restartGame();
    }

    function lose() {

        soundFXdeny.play();
        alert("You lose!");
        losses++;
        $("#losses").text(losses);
        restartGame();
    }

    $('#poke1').on('click', function() {
        soundFX.play();
        user = user + poke1;

        $('#userTally').text(user);

        if (user == computer) {
            win();
        }
        else if (user > computer) {
            lose();
        }
    });

    $('#poke2').on('click', function() {
        soundFX.play();
        user = user + poke2;

        $('#userTally').text(user);

        if (user == computer) {
            win();
        }
        else if (user > computer) {
            lose();
        }
    });

    $('#poke3').on('click', function() {
        soundFX.play();
        user = user + poke3;

        $('#userTally').text(user);

        if (user == computer) {
            win();
        }
        else if (user > computer) {
            lose();
        }
    });

    $('#poke4').on('click', function() {
        soundFX.play();
        user = user + poke4;

        $('#userTally').text(user);

        if (user == computer) {
            win();
        }
        else if (user > computer) {
            lose();
        }
    });
});
