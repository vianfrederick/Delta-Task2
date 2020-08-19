

var juz = 1;
var colourCount = 0;
var pauseHelp = 1;
var pauseCount = 1;
var counter = -1;
var another =0;
var request;
var finish =[];
var help = 1;
var yside2 = 80;
var count = 1;
var myGamePiece;
var ibegyou;
var myMusic;
var audio= new Audio("ThemeMusic.mp3");
myMusic = new Audio("pop.mp3");
var gamover = new Audio("gameover.wav");
//var angle = 0;//
const speed = 500;
var yside3 = 300;
var req = 1;




function startGame() {
    myGamePiece = new component(30, 30, "red", 170, 500);
    myGamePiece.gravity = 0.05;

    myGameArea.start();
    if (req == 1){
    request = setInterval(createBarriers,1);}

}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

setInterval(myScore,20);
function myScore(){

    myGamePiece.scoreGame = (500 - myGamePiece.y);
var final = myGamePiece.scoreGame.toFixed(2);
    localStorage.setItem("SCORE",final);

}



var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 345;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;

        updateGameArea();
        },
    clear : function() {

        this.context.clearRect(myGamePiece.x-7,myGamePiece.y-7,14,14);
    },

    clear2 : function(){
      this.context.clearRect(0,0,345,500);
    }
}

function component(width, height, color, x, y, type) {
    this.radius = 7;
    this.type = type;
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.scoreSpeed = 0;
    this.scoreGame =0;
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
            ctx.fill();
        }
    }
    this.newPos = function() {

        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
    /*this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }*/
}

function updateGameArea() {

if(pauseHelp == 1){
  myGameArea.clear();
myGamePiece.newPos();
  myGamePiece.update();
}




    for (var i = 0;i<myBarriers.length;i++){
finish.push(window.requestAnimationFrame(myBarriers[i].installBarrier.bind(myBarriers[i])));

myBarriers[i].crash();
}









if(help ==1){
var another = window.requestAnimationFrame(updateGameArea);
}
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function accelerate(n) {
  audio.play();
  myMusic.play();
/*  if(help == 1){
    if (!myGameArea.interval) {myGameArea.interval = setInterval(updateGameArea,20);}

    myGamePiece.gravity = n;
  }*/



  myGamePiece.gravity = n;
}



function everyinterval(n){
  if(150<n<180){ return true;}
  else { return false;}
}






var myBarriers = [];
var myColourChange = [];

function createBarriers(){
  colourCount ++;
  audio.play();

  var randomRadius = Math.floor((Math.random()*(70 - 40 + 1))+ 40);
  var randomGap = Math.floor((Math.random()*(240 - 190 + 1))+ 190);




myBarriers.push ( new Obstacle1(170,yside3,randomRadius,'red','purple','yellow','blue'));
 counter++;



//next = myBarriers[counter].y2;//



yside3 = yside3 - randomGap;


}




function Obstacle1(x1,y2,randomRadiusHere,color1,color2,color3,color4){

  this.x1 = x1;
  this.y2 = y2;
  this.r2 = randomRadiusHere;
  this.color1 = color1;
  this.color2 = color2;
  this.color3 = color3;
  this.color4 = color4;
  this.speed= 500;
  this.randomcount =  Math.floor((Math.random()*(4 - 1 + 1))+ 1);
this.angle = 0;
this.ctx2 = document.querySelector("canvas").getContext("2d");
  this.installBarrier = function(){

switch(this.randomcount){

case 1 :
      if(juz == 1){  if(myGamePiece.y< 250){
        this.y2 = this.y2 + 1;}

       var no = 170 - this.r2-10;
       var no1 = this.y2 - this.r2 - 10;
       var no3 =  20 + (2*this.r2);
       var no4 =  20 + (2*this.r2);
       this.ctx2.clearRect(no,no1,no3,no4);
      this.ctx2.save();

      this.ctx2.beginPath();
      this.ctx2.strokeStyle = this.color1;
      this.ctx2.translate(170,this.y2);
      this.ctx2.rotate(this.angle*Math.PI/180);
      this.ctx2.arc(0,0,this.r2,0,Math.PI/2);

      this.ctx2.lineWidth = 10;
      this.ctx2.stroke();
      this.ctx2.beginPath();
      this.ctx2.strokeStyle = this.color2;

      this.ctx2.arc(0,0,this.r2,Math.PI/2,Math.PI,false);
       this.ctx2.lineWidth = 10;
       this.ctx2.stroke();
      this.ctx2.beginPath();
      this.ctx2.strokeStyle = this.color3;
      this.ctx2.arc(0,0,this.r2,Math.PI,Math.PI*3/2,false);
      this.ctx2.lineWidth = 10;
      this.ctx2.stroke();
      this.ctx2.beginPath();
      this.ctx2.strokeStyle = this.color4;
      this.ctx2.arc(0,0,this.r2,Math.PI*3/2,2*Math.PI,false);
      this.ctx2.lineWidth = 10;
      this.ctx2.stroke();
    //  if(colourCount%1 == 0){


      this.ctx2.restore();
      if(this.angle % (360) == 0){
        this.angle = 0;
        this.angle = this.angle + 3;}
        else{
      this.angle = this.angle + 3;}

      this.check = this.angle;}


            break;

            case 2 :if(juz == 1){if(myGamePiece.y< 250){
            this.y2 = this.y2 + 1;}

           var no = 170 - this.r2-10;
           var no1 = this.y2 - this.r2 - 10;
           var no3 =  20 + (2*this.r2);
           var no4 =  20 + (2*this.r2);
           this.ctx2.clearRect(no,no1,no3,no4);
          this.ctx2.save();


          this.ctx2.beginPath();
          this.ctx2.strokeStyle = this.color4;
          this.ctx2.translate(170,this.y2);
          this.ctx2.rotate(this.angle*Math.PI/180);
          this.ctx2.arc(0,0,this.r2,0,Math.PI/2);

          this.ctx2.lineWidth = 10;
          this.ctx2.stroke();
          this.ctx2.beginPath();
          this.ctx2.strokeStyle = this.color1;

          this.ctx2.arc(0,0,this.r2,Math.PI/2,Math.PI,false);
           this.ctx2.lineWidth = 10;
           this.ctx2.stroke();
          this.ctx2.beginPath();
          this.ctx2.strokeStyle = this.color2;
          this.ctx2.arc(0,0,this.r2,Math.PI,Math.PI*3/2,false);
          this.ctx2.lineWidth = 10;
          this.ctx2.stroke();
          this.ctx2.beginPath();
          this.ctx2.strokeStyle = this.color3;
          this.ctx2.arc(0,0,this.r2,Math.PI*3/2,2*Math.PI,false);
          this.ctx2.lineWidth = 10;
          this.ctx2.stroke();
      //    if(colourCount%500 == 0){


          this.ctx2.restore();
          if(this.angle % (360) == 0){
            this.angle = 0;
            this.angle = this.angle + 3;}
            else{
          this.angle = this.angle + 3;}

          this.check = this.angle;}


                break;

                case 3:
                if(juz == 1){if(myGamePiece.y< 250){
                this.y2 = this.y2 + 1;}

               var no = 170 - this.r2-10;
               var no1 = this.y2 - this.r2 - 10;
               var no3 =  20 + (2*this.r2);
               var no4 =  20 + (2*this.r2);
               this.ctx2.clearRect(no,no1,no3,no4);
              this.ctx2.save();

              this.ctx2.beginPath();
              this.ctx2.strokeStyle = this.color3;
              this.ctx2.translate(170,this.y2);
              this.ctx2.rotate(this.angle*Math.PI/180);
              this.ctx2.arc(0,0,this.r2,0,Math.PI/2);

              this.ctx2.lineWidth = 10;
              this.ctx2.stroke();
              this.ctx2.beginPath();
              this.ctx2.strokeStyle = this.color4;

              this.ctx2.arc(0,0,this.r2,Math.PI/2,Math.PI,false);
               this.ctx2.lineWidth = 10;
               this.ctx2.stroke();
              this.ctx2.beginPath();
              this.ctx2.strokeStyle = this.color1;
              this.ctx2.arc(0,0,this.r2,Math.PI,Math.PI*3/2,false);
              this.ctx2.lineWidth = 10;
              this.ctx2.stroke();
              this.ctx2.beginPath();
              this.ctx2.strokeStyle = this.color2;
              this.ctx2.arc(0,0,this.r2,Math.PI*3/2,2*Math.PI,false);
              this.ctx2.lineWidth = 10;
              this.ctx2.stroke();
          //    if(colourCount%500 == 0){


              this.ctx2.restore();
              if(this.angle % (360) == 0){
                this.angle = 0;
                this.angle = this.angle + 3;}
                else{
              this.angle = this.angle + 3;}

              this.check = this.angle;}


                    break;

                    case 4 :if(juz == 1){
                    if(myGamePiece.y< 250){
                    this.y2 = this.y2 + 1;}

                   var no = 170 - this.r2-10;
                   var no1 = this.y2 - this.r2 - 10;
                   var no3 =  20 + (2*this.r2);
                   var no4 =  20 + (2*this.r2);
                   this.ctx2.clearRect(no,no1,no3,no4);
                  this.ctx2.save();

                  this.ctx2.beginPath();
                  this.ctx2.strokeStyle = this.color2;
                  this.ctx2.translate(170,this.y2);
                  this.ctx2.rotate(this.angle*Math.PI/180);
                  this.ctx2.arc(0,0,this.r2,0,Math.PI/2);

                  this.ctx2.lineWidth = 10;
                  this.ctx2.stroke();
                  this.ctx2.beginPath();
                  this.ctx2.strokeStyle = this.color3;

                  this.ctx2.arc(0,0,this.r2,Math.PI/2,Math.PI,false);
                   this.ctx2.lineWidth = 10;
                   this.ctx2.stroke();
                  this.ctx2.beginPath();
                  this.ctx2.strokeStyle = this.color4;
                  this.ctx2.arc(0,0,this.r2,Math.PI,Math.PI*3/2,false);
                  this.ctx2.lineWidth = 10;
                  this.ctx2.stroke();
                  this.ctx2.beginPath();
                  this.ctx2.strokeStyle = this.color1;
                  this.ctx2.arc(0,0,this.r2,Math.PI*3/2,2*Math.PI,false);
                  this.ctx2.lineWidth = 10;
                  this.ctx2.stroke();
              //    if(colourCount%500 == 0){


                  this.ctx2.restore();
                  if(this.angle % (360) == 0){
                    this.angle = 0;
                    this.angle = this.angle + 3;}
                    else{
                  this.angle = this.angle + 3;}

                  this.check = this.angle;}
                
                        break;
                      }
                      window.requestAnimationFrame(myBarriers[i].installBarrier.bind(myBarriers[i]));


}

this.crash = function(){
  if(this.randomcount ==1){
  var plzz = this.y2 + this.r2 + 10;


     if(myGamePiece.y > (this.y2 + this.r2 + 10)){
       if(this.check >91 && this.check <360 && (myGamePiece.y-7) <= plzz){
        if(another){ window.cancelAnimationFrame(another);}
clearInterval(request);

         for(var k = 0;k<finish.length;k++){
         window.cancelAnimationFrame(finish[k]);}
        gamover.play();
           help = 0;

           setTimeout(function(){
           window.location.replace("gameOver.html");},2000);

       }

     }
     else{
       if((this.check > 0 && this.check < 180 && (myGamePiece.y-7) <= (this.y2 - this.r2) && (myGamePiece.y-7) >=(this.y2 - this.r2 - 10)) || ( this.check>271 && this.check <360 && (myGamePiece.y-7) <= (this.y2 - this.r2) && (myGamePiece.y-7) >=(this.y2 - this.r2 - 10)) ) {
         help = 0;
           if(another){ window.cancelAnimationFrame(another);}
clearInterval(request);

         for(var k = 0;k<finish.length;k++){
         window.cancelAnimationFrame(finish[k]);}
         gamover.play();

setTimeout(function(){
window.location.replace("gameOver.html");},2000);


       }

     }

}

if(this.randomcount ==2){
  var plzz1 = this.y2 + this.r2 + 10;


     if(myGamePiece.y > (this.y2 + this.r2 + 10)){
       if(this.check >1 && this.check < 270 && (myGamePiece.y-7) <= plzz1){
         window.cancelAnimationFrame(another);
clearInterval(request);

         for(var k = 0;k<finish.length;k++){
         window.cancelAnimationFrame(finish[k]);}
        help = 0;
        gamover.play();


        setTimeout(function(){
        window.location.replace("gameOver.html");},2000);

       }

     }
     else{
       if((this.check > 180 && this.check < 360 && (myGamePiece.y-7) <= (this.y2 - this.r2) && (myGamePiece.y-7) >=(this.y2 - this.r2 - 10)) || ( this.check>0 && this.check <90 && (myGamePiece.y-7) <= (this.y2 - this.r2) && (myGamePiece.y-7) >=(this.y2 - this.r2 - 10)) ) {
         help = 0;
         window.cancelAnimationFrame(another);
clearInterval(request);

         for(var k = 0;k<finish.length;k++){
         window.cancelAnimationFrame(finish[k]);}
         gamover.play();


         setTimeout(function(){
         window.location.replace("gameOver.html");},2000);


       }

}
}


if(this.randomcount ==3){
  var plzz2 = this.y2 + this.r2 + 10;


     if(myGamePiece.y > (this.y2 + this.r2 + 10)){
       if((this.check >0 && this.check < 180 && (myGamePiece.y-7) <= plzz2)  || (this.check>270 && this.check <360 && (myGamePiece.y-7) <=plzz2 )  ){
         window.cancelAnimationFrame(another);
clearInterval(request);

         for(var k = 0;k<finish.length;k++){
         window.cancelAnimationFrame(finish[k]);}
        help = 0;
        gamover.play();


        setTimeout(function(){
        window.location.replace("gameOver.html");},2000);

       }

     }
     else{
       if((this.check > 90 && this.check < 360 && (myGamePiece.y-7) <= (this.y2 - this.r2) && (myGamePiece.y-7) >=(this.y2 - this.r2 - 10)) ) {
         help = 0;
         window.cancelAnimationFrame(another);
clearInterval(request);

         for(var k = 0;k<finish.length;k++){
         window.cancelAnimationFrame(finish[k]);}
         gamover.play();


         setTimeout(function(){
         window.location.replace("gameOver.html");},2000);


       }

}
}

if(this.randomcount ==4){
  var plzz2 = this.y2 + this.r2 + 10;


     if(myGamePiece.y > (this.y2 + this.r2 + 10)){
       if((this.check >1 && this.check < 90 && (myGamePiece.y-7) <= plzz2)  || (this.check>180 && this.check <360 && (myGamePiece.y-7) <=plzz2 )  ){
         window.cancelAnimationFrame(another);
clearInterval(request);

         for(var k = 0;k<finish.length;k++){
         window.cancelAnimationFrame(finish[k]);}
        help = 0;
        gamover.play();


        setTimeout(function(){
        window.location.replace("gameOver.html");},2000);

       }

     }
     else{
       if((this.check > 0 && this.check < 270 && (myGamePiece.y-7) <= (this.y2 - this.r2) && (myGamePiece.y-7) >=(this.y2 - this.r2 - 10)) ) {
         help = 0;
         window.cancelAnimationFrame(another);
clearInterval(request);

         for(var k = 0;k<finish.length;k++){
         window.cancelAnimationFrame(finish[k]);}
         gamover.play();


         setTimeout(function(){
         window.location.replace("gameOver.html");},2000);


       }

}
}


































}


}
