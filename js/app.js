$(document).ready( () => {
    console.log("DOM is ready!");
    let score = 0;
    let time = 1500;
    let interval;
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
    }

    console.log(getRandomInt(9));

    const checkIfWin = (score) => {
        if(score === 18) {
            let winner = "WINNER! WINNER! CHICKEN DINNER!";
            $('#score').html(winner);
            clearInterval(interval);
            $("#top-score").html(score);
            $('#newGame').css("visibility", "visible");
            score = 0;
            time = 1500;
            $("#score").html(score);
        }
    }

    const pickAMole = () => {
        let randomNumber = getRandomInt(9);
        $(`#image-${randomNumber}`).fadeIn(time).fadeOut();
    }

    let init = () => {
        interval = setInterval(pickAMole, 1500);
    }

    let stopGameTimeOut = () => {
        clearInterval(interval);
        $('#newGame').css("visibility", "visible");
        $("#top-score").html(score);
    }

    $('.images').click( () => {
        score++;
        time = time-100;
        $('.images').css("display", "none");
        $('#score').html(score);
        checkIfWin(score);
    });

    $('#newGame').click( () => {
        setTimeout(stopGameTimeOut, 15000);
        $('#newGame').css("visibility", "hidden");
        score = 0;
        time = 1500;
        $("#score").html(score);
        init();
    });



});