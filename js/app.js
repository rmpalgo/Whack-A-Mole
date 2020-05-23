$(document).ready( () => {
    console.log("DOM is ready!");
    let score = 0;
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
    }

    console.log(getRandomInt(9));


    const pickAMole = () => {
        let randomNumber = getRandomInt(9);
        $(`#image-${randomNumber}`).fadeIn(1000).fadeOut();
    }

    setInterval(pickAMole, 1000);

    $('.images').click( () => {
        score++;
        $('.images').css("display", "none");
        $('#score').html(score);
    });

});