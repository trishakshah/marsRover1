var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var roverWidth=100;
var roverHeight=90;
var roverX=10;
var roverY=10;
var bgImg="mars.jpg";
var roverImg="rover.png";

function add(){
    var bgImgT=new Image();
    bgImg.onload=uploadBackground;
    bgImgT.src=bgImg;
    var roverImgT=new Image();
    roverImg.onload=uploadBackground;
    roverImgT.src=roverImg;
}

function uploadBackground(){
    ctx.drawImage(bgImgT, 0, 0, canvas.width, canvas.height);
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    var keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="38"){
        up();
        console.log("up");
    }
    if (keyPressed=="40"){
        down();
        console.log("down");
    }
    if (keyPressed=="37"){
        left();
        console.log("left");
    }
    if (keyPressed=="39"){
        right();
        console.log("right");
    }
}