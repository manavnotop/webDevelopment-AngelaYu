var numberOfDrumButtons = document.querySelectorAll(".drum").length; //finds all number od buttons using the .lenth property on the query selected class

for(var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function handleClick(){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
    });
}// we use for loop to assign the all button the function of addEventListners, which give them the ears to listen to the event specified
// we use above lines of code to give the buttons the ears to listen to the event of clicking the buttons and then respond the click with the sound of the specifed sound
//we can also create function inside a function in javascript.

document.addEventListener("keydown", function(event){
    makeSound(event.key);
});// we use event listner again to add ears to whole page but this time the ears are to detect any button pressed and then respond the specified button click with the sound

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();   
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();   
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();   
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();   
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();   
            break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();   
            break;

        case "l":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();   
            break;

        default:
            console.log(buttonInnerHtml);
    }
}
