$(document).ready( () => {
    console.log("DOM is ready!");
    let score = 0;
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
    }

    console.log(getRandomInt(9));

    const pickAMole = () => {
        let randomNumber = getRandomInt(9);
        $(`#image-${randomNumber}`).fadeIn(500).fadeOut(200);
    }

    setInterval(pickAMole, 500);

    $('.images').click( () => {
       score++;
       $('.images').fadeOut();
       $('#score').html(score);
    });


});