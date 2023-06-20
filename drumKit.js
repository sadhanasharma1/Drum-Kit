// for(var i=0;i<document.querySelectorAll(".drum").length;i++){
// document.querySelectorAll("button")[i].addEventListener("click",handleClick);
// function handleClick(){
// alert("I got clicked!");
// }
// }

//  var sound= new Audio('tom-1.mp3');
//  for(var i=0;i<document.querySelectorAll(".drum").length;i++){
// document.querySelectorAll("button")[i].addEventListener("click",handleClick);
// function handleClick(){
// sound.play();
// }
// }

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",
function (){
var buttonInnerHTML=this.innerHTML;
switch(buttonInnerHTML){
    case "s":
        var audio= new Audio("tom-1.mp3");
        audio.play();
        break;
    case "a1":
        var audio= new Audio("tom-2.mp3");
        audio.play();
        break;
    case "d":
        var audio= new Audio("tom-3.mp3");
        audio.play();
        break;
    case "h":
        var audio= new Audio("tom-4.mp3");
        audio.play();
        break;
    case "a2":
        var audio= new Audio("snare.mp3");
        audio.play();
        break;
    case "n":
        var audio= new Audio("crash.mp3");
        audio.play();
        break;
    case "a3":
        var audio= new Audio("kick-bass.mp3");
        audio.play();
        break;
        default:
            alert("not the valid click");
    
    
}
});

}


