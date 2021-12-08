function cclear(){
    var draw = document.getElementById("christree").getContext("2d");
    draw.clearRect(0,0,660,700);//x and y coorddinates then width and height
}

function ctree(){
    var canvas = document.getElementById('christree');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d')
        //Tree//
        ctx.beginPath();
        ctx.fillStyle="green"
        ctx.moveTo(110,30);
        ctx.lineTo(150,5);
        ctx.lineTo(190,30);
        ctx.fill();
        //
        ctx.moveTo(100,50);
        ctx.lineTo(150,10);
        ctx.lineTo(200,50);
        ctx.fill();
        //
        ctx.moveTo(90,70);
        ctx.lineTo(150,20);
        ctx.lineTo(210,70);
        ctx.fill();
        //
        ctx.moveTo(80,90);
        ctx.lineTo(150,30);
        ctx.lineTo(220,90);
        ctx.fill();
        //
        ctx.moveTo(70,110);
        ctx.lineTo(150,40);
        ctx.lineTo(230,110);
        ctx.fill();
        //-----------------------//

        //Trunk//
        ctx.beginPath();
        ctx.fillStyle="#5e4013"
        ctx.fillRect(135,110,30,20);
        ctx.fill();
        //-----------------------//
    }
}
