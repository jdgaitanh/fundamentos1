var Pussy;
var manzanaBuena;
var manzanaPodrida;
var manzanaRender;


var velo = 1;
var podridas = 0;
var tam = 40;



function preload() {
 
  
  
  fuenteTexto = loadFont('assets/NanumPenScript-Regular.ttf');
 manzanaBuena = loadImage('assets/rotten_apple.png');
  manzanaPodrida = loadImage('assets/podrida.jpg');
 manzanaRender = loadImage('assets/render.jpg');
  Pussy = loadSound('assets/rotten_apple.mp3');
  
}


function setup() {
  createCanvas(400, 400);
  
   
    
}

 miAmplitud = new p5.Amplitude();
  miAmplitud.setInput(Pussy);


var manzanitas=2;

var peritas=6;
  

function draw() {
  
   frameRate(20)
  background(255);

  
    if (Pussy.isPlaying() == false) {
   
    var tTotal = Pussy.duration();
  
    Pussy.play();
      
      
  }
  
 
 
    var tamanito = map(miAmplitud.getLevel(), 0, 1, 200, 400);
  
   var tamanito2 = map(miAmplitud.getLevel(), 0, 1, 0, 15);
  

  
    r = random(255);
  g = random(255);
  b = random(255);
  
  
     if (Pussy.currentTime() > 36&& Pussy.currentTime() <40){
      
      
        for(var k = 0; k < peritas; k++){
          
          
          
   frameRate(15)

   textFont(fuenteTexto);
   textAlign(CENTER);
       textSize(50);
    textWidth(300);
 
   fill(r,g,b);
      stroke(r,g,b);
      strokeWeight(7);
      strokeCap(ROUND);
      rectMode(CENTER);
      textLeading(70);
          noStroke();
   text("You thought that I just made this for the club", posX2, posY2);
 
            var posX2 = random(-width,width);
      var posY2 = random(0,height);
        }
       
            }
  
  
  
  
   if (Pussy.currentTime() > 41&& Pussy.currentTime() <44){
      
      
        for(var m = 0; m < peritas; m++){
          
          
          
   frameRate(15)

   textFont(fuenteTexto);
   textAlign(CENTER);
       textSize(50);
    textWidth(300);
 
   fill(r,g,b);
      stroke(r,g,b);
      strokeWeight(7);
      strokeCap(ROUND);
      rectMode(CENTER);
      textLeading(70);
          noStroke();
   text("I got this microphone to wake you up", posX3, posY3);
 
            var posX3 = random(-width,width);
      var posY3 = random(0,height);
        }
       
            }
  
  
  
    if (Pussy.currentTime() > 45&& Pussy.currentTime() <49){
      
      
        for(var n = 0; n < peritas; n++){
          
          
          
   frameRate(15)

   textFont(fuenteTexto);
   textAlign(CENTER);
       textSize(50);
    textWidth(300);
 
   fill(r,g,b);
      stroke(r,g,b);
      strokeWeight(7);
      strokeCap(ROUND);
      rectMode(CENTER);
      textLeading(70);
          noStroke();
   text("That I can do just what I want right here", posX4, posY4);
 
            var posX4 = random(-width,width);
      var posY4 = random(0,height);
        }
       
            }
  
  
  
  
    if (Pussy.currentTime() > 50&& Pussy.currentTime() <53){
      
      
        for(var n = 0; n < peritas; n++){
          
          
          
   frameRate(15)

   textFont(fuenteTexto);
   textAlign(CENTER);
       textSize(50);
    textWidth(300);
 
   fill(r,g,b);
      stroke(r,g,b);
      strokeWeight(7);
      strokeCap(ROUND);
      rectMode(CENTER);
      textLeading(70);
          noStroke();
   text("And I don't hear those sirens anyway", posX4, posY4);
 
            var posX4 = random(-width,width);
      var posY4 = random(0,height);
        }
       
            }
  
  
  
  
  
  
  
    if (Pussy.currentTime() > 72&& Pussy.currentTime() <76){
      
      
        for(var o = 0; o < peritas; o++){
          
          
          
   frameRate(15)

   textFont(fuenteTexto);
   textAlign(CENTER);
       textSize(50);
    textWidth(300);
 
   fill(r,g,b);
      stroke(r,g,b);
      strokeWeight(7);
      strokeCap(ROUND);
      rectMode(CENTER);
      textLeading(70);
          noStroke();
   text("You say that you don’t like my attitude", posX5, posY5);
 
            var posX5 = random(-width,width);
      var posY5 = random(0,height);
        }
       
            }
  
  
    if (Pussy.currentTime() > 77&& Pussy.currentTime() <80){
      
      
        for(var q = 0; q < peritas; q++){
          
          
          
   frameRate(15)

   textFont(fuenteTexto);
   textAlign(CENTER);
       textSize(50);
    textWidth(300);
 
   fill(r,g,b);
      stroke(r,g,b);
      strokeWeight(7);
      strokeCap(ROUND);
      rectMode(CENTER);
      textLeading(70);
          noStroke();
   text("I made it just for me and not for you", posX6, posY6);
 
            var posX6 = random(-width,width);
      var posY6 = random(0,height);
        }
       
            }
  
      if (Pussy.currentTime() > 81&& Pussy.currentTime() <85){
      
      
        for(var r = 0; r < peritas; r++){
          
          
          
   frameRate(15)

   textFont(fuenteTexto);
   textAlign(CENTER);
       textSize(50);
    textWidth(300);
 
   fill(r,g,b);
      stroke(r,g,b);
      strokeWeight(7);
      strokeCap(ROUND);
      rectMode(CENTER);
      textLeading(70);
          noStroke();
   text("You can cry until your face turns blue", posX7, posY7);
 
            var posX7 = random(-width,width);
      var posY7 = random(0,height);
        }
       
            }
  
  
  
  
  if (Pussy.currentTime() > 86&& Pussy.currentTime() <90){
      
      
        for(var s = 0;s < peritas; s++){
          
          
          
   frameRate(15)

   textFont(fuenteTexto);
   textAlign(CENTER);
       textSize(50);
    textWidth(300);
 
   fill(r,g,b);
      stroke(r,g,b);
      strokeWeight(7);
      strokeCap(ROUND);
      rectMode(CENTER);
      textLeading(70);
          noStroke();
   text("That I would be the one to watch you lose ", posX8, posY8);
 
            var posX8 = random(-width,width);
      var posY8 = random(0,height);
        }
       
            }
  
  
  
  
  
   if (Pussy.currentTime() > 0&& Pussy.currentTime() <35||Pussy.currentTime() > 91){

  	 for(var i = 0; i < manzanitas; i++){

         
       imageMode(CENTER);
       
 tint(r, g, b);
       
       
  	image(manzanaPodrida, posX1, posY1);
      
      var posX1 = random(-width,width);
      var posY1 = random(0,height);
      
       }
  
  
     }

  
  if(Pussy.currentTime() > 0&& Pussy.currentTime() <56||Pussy.currentTime() > 72&& Pussy.currentTime() <91){
       
   for(var j = 0; j < manzanitas; j++){
       
       imageMode(CENTER);
       
 noTint()
  	image(manzanaBuena, posX, posY, tamanito,tamanito);
      
      var posX = random(200,tamanito)
      var posY = random(200,tamanito);
       
       
       
       
       }
  
}
  
  var papayitas = 2
  
  
   if (Pussy.currentTime() > 1&& Pussy.currentTime() <140||Pussy.currentTime() > 165&& Pussy.currentTime() <182){
      
      
        for(var s2 = 0;s2 < papayitas; s2++){
          
          
          
   frameRate(5)

   textFont(fuenteTexto);
   textAlign(CENTER);
       textSize(50);
    textWidth(300);
 
   fill(255);
      stroke(r,g,b);
      strokeWeight(tamanito2);
      strokeCap(ROUND);
      rectMode(CENTER);
      textLeading(70);
      
   text("Bad apples are good for something", posX9, posY9);
         text("When they're 6 feet underground ", posX10, posY10);
 
            var posX9 = random(-width,width);
      var posY9 = random(-height,height);
          
             var posX10 = random(-width,width);
      var posY10 = random(-height,height);
        }
       
            }
  
     if (Pussy.currentTime() > 3&& Pussy.currentTime() <15){

   textFont(fuenteTexto);
   textAlign(CENTER);
       textSize(100);
    textWidth(300);
       textStyle(BOLD);
  fill(r,g,b);
      stroke(r,g,b);
      strokeWeight(7);
      strokeCap(ROUND);
      rectMode(CENTER);
      textLeading(70);
   text("PUSSY RIOT", 200, tamanito, 200,300);
  }
  
    if (Pussy.currentTime() > 17&& Pussy.currentTime() <25){

   textFont(fuenteTexto);
   textAlign(CENTER);
       textSize(100);
    textWidth(300);
 
   fill(r,g,b);
      stroke(r,g,b);
      strokeWeight(7);
      strokeCap(ROUND);
      rectMode(CENTER);
      textLeading(70);
   text("BAD APPLES", 200, tamanito, 200,300);
  }
  
  
 
  
  
  
  
  
 if (Pussy.currentTime() > 40&& Pussy.currentTime() < 41){
   background(255,0,0);
   textFont(fuenteTexto);
   textAlign(CENTER);
    textSize(50);
   fill(255);
   noStroke();
   text("NO WAY!", 200, 200);
  }
  
  
   if (Pussy.currentTime() > 44&& Pussy.currentTime() < 45){
   background(255,0,0);
   textFont(fuenteTexto);
   textAlign(CENTER);
    textSize(50);
   fill(255);
   text("and say!", 200, 200);
  }
  
  
    if (Pussy.currentTime() > 49&& Pussy.currentTime() < 50){
   background(255,0,0);
   textFont(fuenteTexto);
   textAlign(CENTER);
    textSize(50);
   fill(255);
   text("today!", 200, 200);
  }
  
  
      if (Pussy.currentTime() > 53&& Pussy.currentTime() < 54){
   background(255,0,0);
   textFont(fuenteTexto);
   textAlign(CENTER);
    textSize(50);
   fill(255);
   text("OKAY!", 200, 200);
  }
  
  
      if (Pussy.currentTime() > 76&& Pussy.currentTime() < 77){
   background(255,0,0);
   textFont(fuenteTexto);
   textAlign(CENTER);
    textSize(50);
   fill(255);
   text("It’s true", 200, 200);
  }
  
  
  
      if (Pussy.currentTime() > 80&& Pussy.currentTime() < 81){
   background(255,0,0);
   textFont(fuenteTexto);
   textAlign(CENTER);
    textSize(80);
   fill(255);
   text("Boo-hoo", 200, 200);
  }
  
       if (Pussy.currentTime() > 85&& Pussy.currentTime() < 86){
   background(255,0,0);
   textFont(fuenteTexto);
   textAlign(CENTER);
    textSize(90);
   fill(255);
   text("You knew", 200, 200);
  }
  
  
  
      if (Pussy.currentTime() > 90&& Pussy.currentTime() < 91){
   background(255,0,0);
   textFont(fuenteTexto);
   textAlign(CENTER);
    textSize(100);
   fill(255);
   text("Woo-hoo", 200, 200);
  }
  
  
  
  
  
       if (Pussy.currentTime() > 91&& Pussy.currentTime() < 94){
rectMode(CENTER)
   textFont(fuenteTexto);
   textAlign(CENTER);
    textSize(40);
   fill(255);
   text("Your back's against the wall what will you do?", 200, 200, 200,200);
  }
  
        if (Pussy.currentTime() > 95&& Pussy.currentTime() < 99){
rectMode(CENTER)
   textFont(fuenteTexto);
   textAlign(CENTER);
    textSize(40);
   fill(255);
   text("I would join our gang if I were you", 200, 200, 200,200);
  }
  
       if (Pussy.currentTime() > 100&& Pussy.currentTime() < 104){
rectMode(CENTER)
   textFont(fuenteTexto);
   textAlign(CENTER);
    textSize(40);
   fill(255);
   text("We always stick together like a glue", 200, 200, 200,200);
  }
  
   if (Pussy.currentTime() > 105&& Pussy.currentTime() < 109){
rectMode(CENTER)
   textFont(fuenteTexto);
   textAlign(CENTER);
    textSize(40);
   fill(255);
   text("There are many more of us than you", 200, 200, 200,200);
  }
  
    push()
  
  translate(200, 200);
  
   if(Pussy.currentTime() > 56&& Pussy.currentTime() < 72|| Pussy.currentTime() > 110){
       
  for ( var a = 0 ; a < tamanito2; a++){
  for ( var b = 0 ; b < tamanito2; b++){
       
       imageMode(CENTER);
       
 noTint()
   
  	image(manzanaBuena, nueposX+(tam*b), nueposY+(tam*a), tamanito2+20,tamanito2+20);
      
      var nueposX = tamanito2+1;
      var nueposY = tamanito2+1;
       
       
       
       
       }
  }
   }
  pop()
  
  
  
  push()
  
  translate(200, 200);
  rotate(radians(180));
   if(Pussy.currentTime() > 56&& Pussy.currentTime() < 72|| Pussy.currentTime() > 110){
       
  for ( var a1 = 0 ; a1 < tamanito2; a1++){
  for ( var b1 = 0 ; b1 < tamanito2; b1++){
       
       imageMode(CENTER);
       
 noTint()
   
  	image(manzanaBuena, nueposX1+(tam*b1), nueposY1+(tam*a1), tamanito2+20,tamanito2+20);
      
      var nueposX1 = tamanito2+1;
      var nueposY1 = tamanito2+1;
       
       
       
       
       }
  }
   }
  
  pop()
  
  if(Pussy.currentTime() >56&& Pussy.currentTime() < 72|| Pussy.currentTime() > 110){
       
   for(var p = 0; p < manzanitas; p++){
    
     noStroke()
       fill(r,g,b,150);
     ellipse(200,200, tamanito, tamanito); 
     
     
     imageMode(CENTER);
       
 noTint()
  	image(manzanaBuena, 200, 200, tamanito,tamanito);
      
 
      
       
       
       
       }
  }
  
  
   if(tamanito > 400){
     
     
     
      for(var r = 0; r < manzanitas; r++){
    
     noStroke()
       fill(r,g,b,150);
     ellipse(200,200, tamanito, tamanito); 
     
     
     imageMode(CENTER);
       
 noTint()
  	image(manzanaBuena, 200, 200, tamanito,tamanito);
     
     
   }
   }
  
  
  
}