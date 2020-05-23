$(document).ready( () => {
    console.log("DOM is ready!");

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
    }

    console.log(getRandomInt(9));
    const pickAMole = () => {
        $(`#image-${getRandomInt(9)}`).fadeIn(1500).fadeOut();
    }
    setInterval(pickAMole, 1500);


});