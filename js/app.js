$(document).ready( () => {
    console.log("DOM is ready!");
    let score = 0;
    let time = 1500;
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
    }

    console.log(getRandomInt(9));

    const checkIfWin = (score) => {
        if(score === 19) {
            let winner = "WINNER! WINNER! CHICKEN DINNER!";
            $('#score').html(winner);
            clearInterval(interval);
        }
    }

    const pickAMole = () => {
        let randomNumber = getRandomInt(9);
        $(`#image-${randomNumber}`).fadeIn(time).fadeOut();
    }

   let interval = setInterval(pickAMole, 1500);

    let stopGameTimeOut = () => {
        clearInterval(interval);
    }

    setTimeout(stopGameTimeOut, 30000);

    $('.images').click( () => {
        score++;
        time = time-100;
        $('.images').css("display", "none");
        $('#score').html(score);
        checkIfWin(score);
    });



});