var kellekord="images/nothing.png";

var part1=document.getElementById("part1");
var part2=document.getElementById("part2");
var part3=document.getElementById("part3");
var part4=document.getElementById("part4");
var part5=document.getElementById("part5");
var part6=document.getElementById("part6");
var part7=document.getElementById("part7");
var part8=document.getElementById("part8");
var part9=document.getElementById("part9");

var lopp=false;

function kartinka(picture){
    picture.src=kellekord;

    if(vyidukontroll()){
        alert("You collected that puzzle!");
        lopp=true;
    }

    if(ruududKasutatud()){
        lopp=true;
    }

}
function kartinkaValik(picture){
    kellekord=picture.src;
    document.getElementById("part").src=kellekord;

}

function ruududKasutatud(){
    pildid=document.images;
    for(var i=0;i<pildid.length; i++){
        if(pildid[i].src.split("/").pop()=="nothing.png"){
            return false;
        }
    }
    return true;
}

function sisu(nr){
    var fnimi=document.getElementById("picture"+nr).src;
    fnimi=fnimi.split("/").pop();
    return fnimi;
}
function kontrollsisu(a,b,c, sisulopp){
    if(sisu(a)==sisulopp.split("/").pop() && sisu(b)==sisulopp.split("/").pop() && sisu(c)==sisulopp.split("/").pop())
    {return true;}else {return false;}

}
function vyidukontroll(){
    if(document.getElementById("part1").src == document.getElementById("part10").src
        &&document.getElementById("part2").src == document.getElementById("part11").src
        &&document.getElementById("part3").src == document.getElementById("part12").src
        &&document.getElementById("part4").src == document.getElementById("part13").src
        &&document.getElementById("part5").src == document.getElementById("part14").src
        &&document.getElementById("part6").src == document.getElementById("part15").src
        &&document.getElementById("part7").src == document.getElementById("part16").src
        &&document.getElementById("part8").src == document.getElementById("part17").src
        &&document.getElementById("part9").src == document.getElementById("part18").src
    ){

        return true;
    }

    return false;

}