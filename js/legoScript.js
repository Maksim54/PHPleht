function clearall(){
    var draw = document.getElementById("tmntraph").getContext("2d");
    draw.clearRect(0,0,630,700);//x and y coorddinates then width and height
}



function legspaint(){
    var draw = document.getElementById("tmntraph").getContext("2d");
    draw.beginPath()
    draw.fillStyle="#12781e"
    //body
    //draw.fillRect(125,60,50,50)
    //draw.fillStyle="darkgreen"
    //legs
    draw.fillRect(110,125,30,20)
    draw.fillRect(145,125,30,20)
    //
    draw.fillStyle="#32c243"
    draw.fillRect(110,145,30,3)
    draw.fillRect(145,145,30,3)
    //
    draw.fillStyle="black"
    draw.fillRect(110,144,30,0.6)
    draw.fillRect(145,144,30,0.6)
    //
    draw.fillStyle="black"
    draw.fillRect(145,125,1,23)
    draw.fillRect(110,125,1,23)
    //
    draw.fillRect(174,125,1,23)
    draw.fillRect(139,125,1,23)
    //
    draw.fillRect(140,130,6,0.8)
    //
    draw.fillStyle="#12781e"
    draw.fillRect(140,125,5.2,5)
    //
    draw.fillStyle="#5C3317"
    draw.fillRect(146,128,28,4)
    draw.fillRect(146,133,28,4)
    draw.fillRect(146,136,28,4)
    //
    draw.fillStyle="#5C3317"
    draw.fillRect(111,128,28,4)
    draw.fillRect(111,133,28,4)
    draw.fillRect(111,136,28,4)
    //
    draw.fillStyle="black"
    draw.fillRect(111,128,28,1)
    draw.fillRect(111,132,28,1)
    draw.fillRect(111,135,28,1)
    draw.fillRect(111,139,28,1)
    //
    draw.fillStyle="black"
    draw.fillRect(146,128,28,1)
    draw.fillRect(146,132,28,1)
    draw.fillRect(146,135,28,1)
    draw.fillRect(146,139,28,1)
    //
}

function bodypaint(){
    var draw = document.getElementById("tmntraph").getContext("2d");
    draw.beginPath()
    draw.fillStyle="#12781e"
    //body
    draw.fillRect(110,90,65,35)
    //belt
    draw.fillStyle="#5C3317"
    draw.fillRect(110,116,65,8.6)
    //
    draw.fillStyle="black"
    draw.fillRect(110,124,65,1)
    draw.fillRect(110,115,65,1)
    //
    draw.fillStyle="black"
    draw.fillRect(170,117,1,2)
    draw.fillRect(150,117,1,2)
    //
    draw.fillRect(170,121,1,2)
    draw.fillRect(150,121,1,2)
    //
    draw.fillRect(150,117,20,1)
    draw.fillRect(150,118,20,1)
    //
    draw.fillRect(150,122,20,1)
    draw.fillRect(150,121,20,1)
    //
    draw.fillRect(162,115,4,10)
    //stomach
    draw.fillStyle="#d6cb8b"
    draw.fillRect(110,90,65,25)
    //green lines
    draw.fillStyle="#12781e"
    draw.fillRect(175,90,2,35)
    draw.fillRect(110,90,2,35)
    draw.fillRect(110,90,65,1)
    //black lines
    draw.fillStyle="black"
    draw.fillRect(112,103,63,1)
    draw.fillRect(143,91,2,24)
    //
    //draw.fillStyle="black"
    //draw.fillRect(176,90,2,20)
    //
}

function paint() {
    bodypaint()
    hands()
    legspaint()
    carapace()
    headpaint()
    eyeright()
    eyeleft()
    mouth()
}

function hands() {
    var canvas = document.getElementById("tmntraph"),
        context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(111,91);
    context.lineTo(80,110);
    context.lineTo(70,120);
    //
    context.moveTo(177,91);
    context.lineTo(208,110);
    context.lineTo(218,120);
    //
    context.moveTo(111,91);
    context.lineTo(110,110);
    context.lineTo(100,120);
    context.lineTo(70,120);
    //
    context.moveTo(177,91);
    context.lineTo(177,110);
    context.lineTo(188,120);
    context.lineTo(218,120);
    context.fillStyle= "#12781e";
    context.fill();
    //
    context.beginPath();
    context.moveTo(111,91);
    context.lineTo(80,110);
    context.lineTo(70,120);
    //
    context.moveTo(177,91);
    context.lineTo(208,110);
    context.lineTo(218,120);
    //
    context.moveTo(111,91);
    context.lineTo(110,110);
    context.lineTo(100,120);
    context.lineTo(70,120);
    //
    context.moveTo(177,91);
    context.lineTo(177,110);
    context.lineTo(188,120);
    context.lineTo(218,120);
    context.strokeStyle = "black";
    context.stroke();
    //fists
    context.fillStyle="#12781e";
    context.fillRect(73,120,25,3)
    context.fillRect(190,120,25,3)
    //
    context.fillRect(70,123,8,5)
    context.fillRect(187,123,8,5)
    context.fillRect(93,123,8,5)
    context.fillRect(210,123,8,5)
    //lines on fists
    context.fillStyle="black";
    context.fillRect(73,120,1,3)
    context.fillRect(190,120,1,3)
    context.fillRect(70,123,1,5)
    context.fillRect(187,123,1,5)
    context.fillRect(93,123,1,5)
    context.fillRect(210,123,1,5)
    //
    context.fillRect(97,120,1,3)
    context.fillRect(215,120,1,3)
    context.fillRect(77,123,1,5)
    context.fillRect(194,123,1,5)
    context.fillRect(100,123,1,5)
    context.fillRect(217,123,1,5)
    //
    context.fillRect(195,123,15,1)
    context.fillRect(78,123,15,1)
    context.fillRect(210,128,8,1)
    context.fillRect(70,128,8,1)
    context.fillRect(187,128,8,1)
    context.fillRect(93,128,8,1)
    context.fillRect(187,122,3,1)
    context.fillRect(98,122,3,1)
    context.fillRect(215,122,3,1)
    context.fillRect(70,122,3,1)
    //
}

function headpaint() {
    var canvas = document.getElementById("tmntraph"),
        context = canvas.getContext("2d");
    context.beginPath();
    context.fillStyle = "#12781e";
    context.fill();
    context.moveTo(111, 75);
    context.quadraticCurveTo(141,55, 176, 75)
    context.closePath();
    //
    context.moveTo(110, 80);
    context.quadraticCurveTo(141,100, 177, 80)
    context.closePath();
    context.strokeStyle = "black";
    context.stroke();
    //mask
    var draw=context;
    draw.fill();
    draw.fillStyle = "red";
    draw.fillRect(111,73,65,7)
    //
    draw.fillStyle = "#d6cb8b";
    draw.fillRect(124.5,88,37,2)
    //
    draw.fillStyle="black"
    draw.fillRect(110,72,67,1)
    draw.fillRect(110,73,2,7)
    draw.fillRect(110,80,67,1)
    draw.fillRect(175,73,2,7)
}

function carapace() {
    var canvas = document.getElementById("tmntraph"),
        context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(111, 90);
    context.quadraticCurveTo(141,80, 176, 90)
    context.fillStyle = "#a0ad6a";
    context.fill();
    context.closePath();
    //
}

function mask() {
    var canvas = document.getElementById("tmntraph"),
        context = canvas.getContext("2d");
    //mask
    var draw=context;
    draw.beginPath();
    draw.fill();
    draw.fillStyle = "red";
    draw.fill();
    draw.fillRect(111,73,65,7)
    //black lines
    draw.fillStyle="black"
    draw.fillRect(110,72,67,1)
    draw.fillRect(110,73,2,7)
    draw.fillRect(110,80,67,1)
    draw.fillRect(175,73,2,7)
    //
}

function eyeleft(){
    var canvas = document.getElementById("tmntraph");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(130,76.5,3,0,2 * Math.PI);
    context.fillStyle = "white";
    context.fill();
    context.strokeStyle = "black";
    context.stroke();
}

function eyeright(){
    var canvas = document.getElementById("tmntraph");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(155,76.5,3,0,2 * Math.PI);
    context.fillStyle = "white";
    context.fill();
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
}

function mouth(){
    var context=document.getElementById("tmntraph").getContext("2d");
    context.beginPath();
    context.fillStyle="black"
    context.fillRect(129,84,27,1)
    context.fillRect(155,83,1,3)
}