$(document).ready( () => {
    console.log("DOM is ready!");
    let score = 0;
    let time = 2000;
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
    }

    console.log(getRandomInt(9));

    const checkIfWin = (score) => {
        if(score === 19) {
            let winner = "WINNER!";
            $('#score').html(winner);
            clearInterval(interval);
        }
    }

    const pickAMole = () => {
        let randomNumber = getRandomInt(9);
        $(`#image-${randomNumber}`).fadeIn(time).fadeOut();
    }

   let interval = setInterval(pickAMole, 1500);

    $('.images').click( () => {
        score++;
        time = time-100;
        $('.images').css("display", "none");
        $('#score').html(score);
        checkIfWin(score);
    });



});