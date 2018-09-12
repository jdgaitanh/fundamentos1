var miHora;
var miMinuto;
var miSegundo;
var miMilli;



var anguloGrados = 0;

var angulito = 0

apagadas = 1;





var rojo =136; 
var verde= 148; 
var azul = 152;







function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);



  miHora = hour();
  miMinuto = minute();
  miSegundo = second();
  miMilli = millis();
  
  
    var miNuevoSegundo = (map(miSegundo, 0, 59, 0, 818));
  
    var miNuevoSegundo2 = (map(miSegundo, 0, 59, 0, 543));


  rectMode(CORNER);

  //Fondo Cemento
  fill(rojo, verde, azul);
  noStroke();
  rect(0, 0, width, height);
  
  if(miHora>=4 && miHora<=6){
    
 rojo=76;
    verde= 148;
    azul= 152;
     
     
     }
  
  
    if(miHora>=15 && miHora<=18){
    
 rojo=207;
    verde= 137;
    azul= 100;
     
     
     }
  
  
  if(miHora==19 || miHora==20|| miHora==21 || miHora==22 || miHora==23 || miHora==24 || miHora==0|| miHora==1 || miHora==2 || miHora==3 ){
    
 rojo=34;
    verde= 45;
    azul= 77;
    apagadas=255;
    
    if (miMinuto==53|| miMinuto==20|| miMinuto==21 || miMinuto==22 || miMinuto==23 ){ 
    
    apagadas=random(miSegundo+80)}
     
     
     }




  //Luces Fondo

  fill(255, 255, 255, apagadas);
  ellipse(158, 231, 14, 14);


  fill(255, 255, 255, apagadas);
  ellipse(175, 226, 14, 14);


  fill(255, 255, 255, apagadas);
  ellipse(232, 486, 14, 14);


  fill(255, 255, 255, apagadas);
  ellipse(249, 481, 14, 14);





  //Parqueadero fondo Cemento

  //Línea Origen 
  stroke(255);
  strokeWeight(1);
  line(204, 120, 252, 320);
  stroke(255);
  strokeWeight(1);
  line(172, 154, 248, 137);
  stroke(255);
  strokeWeight(1);
  line(178, 179, 254, 162);
  stroke(255);
  strokeWeight(1);
  line(184, 204, 260, 187);
  stroke(255);
  strokeWeight(1);
  line(190, 229, 266, 212);
  stroke(255);
  strokeWeight(1);
  line(196, 254, 272, 237);
  stroke(255);
  strokeWeight(1);
  line(202, 279, 278, 262);
  stroke(255);
  strokeWeight(1);
  line(208, 304, 284, 287);



  push();
  translate(-144, 30);

  stroke(255);
  strokeWeight(1);
  line(204, 120, 252, 320);
  stroke(255);
  strokeWeight(1);
  line(172, 154, 248, 137);
  stroke(255);
  strokeWeight(1);
  line(178, 179, 254, 162);
  stroke(255);
  strokeWeight(1);
  line(184, 204, 260, 187);
  stroke(255);
  strokeWeight(1);
  line(190, 229, 266, 212);
  stroke(255);
  strokeWeight(1);
  line(196, 254, 272, 237);
  stroke(255);
  strokeWeight(1);
  line(202, 279, 278, 262);
  stroke(255);
  strokeWeight(1);
  line(208, 304, 284, 287);
  pop();

  push();
  translate(80, 372);

  stroke(255);
  strokeWeight(1);
  line(204, 120, 252, 320);
  stroke(255);
  strokeWeight(1);
  line(172, 154, 248, 137);
  stroke(255);
  strokeWeight(1);
  line(178, 179, 254, 162);
  stroke(255);
  strokeWeight(1);
  line(184, 204, 260, 187);
  stroke(255);
  strokeWeight(1);
  line(190, 229, 266, 212);
  stroke(255);
  strokeWeight(1);
  line(196, 254, 272, 237);
  stroke(255);
  strokeWeight(1);
  line(202, 279, 278, 262);
  stroke(255);
  strokeWeight(1);
  line(208, 304, 284, 287);
  pop();


  push();
  translate(-60, 400);

  stroke(255);
  strokeWeight(1);
  line(204, 120, 252, 320);
  stroke(255);
  strokeWeight(1);
  line(172, 154, 248, 137);
  stroke(255);
  strokeWeight(1);
  line(178, 179, 254, 162);
  stroke(255);
  strokeWeight(1);
  line(184, 204, 260, 187);
  stroke(255);
  strokeWeight(1);
  line(190, 229, 266, 212);
  stroke(255);
  strokeWeight(1);
  line(196, 254, 272, 237);
  stroke(255);
  strokeWeight(1);
  line(202, 279, 278, 262);
  stroke(255);
  strokeWeight(1);
  line(208, 304, 284, 287);
  pop();


  //Vía 1 Nivel 1
  stroke(255, 255, 166);
  strokeWeight(95);
  line(1031, -120, -307, 208);

  stroke(0);
  strokeWeight(1);
  line(1031, -120, -307, 208);

  stroke(0);
  strokeWeight(9);
  line(1024, -173, -314, 163);

  stroke(0);
  strokeWeight(9);
  line(1044, -79, -296, 251);
  
    //Carrito Vía 1 Nivel 1

     push();
    translate(0, 152);
    rotate(radians(345));
    rectMode(CENTER);
    fill(239, 194, 80);
    noStroke();
  
    rect(miNuevoSegundo2*3, 0, 80, 40)
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(miNuevoSegundo2*3 - 30, 0, 10, 30);
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(miNuevoSegundo2*3 + 30, 0, 10, 30);
    pop();
     
 
   if (miMinuto == 2 || miMinuto == 4 || miMinuto == 6 || miMinuto == 8 || miMinuto == 12 || miMinuto == 14|| miMinuto == 16|| miMinuto == 18 || miMinuto == 20 || miMinuto == 22 || miMinuto == 23|| miMinuto == 24|| miMinuto == 26 || miMinuto == 28 || miMinuto == 30|| miMinuto == 32 || miMinuto == 34 || miMinuto == 36 || miMinuto == 38) {
     push();
    translate(0, 152);
    rotate(radians(345));
    rectMode(CENTER);
    fill(88, 239, 233);
    noStroke();
  
    rect(miNuevoSegundo2, 0, 80, 40)
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(miNuevoSegundo2 - 30, 0, 10, 30);
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(miNuevoSegundo2 + 30, 0, 10, 30);
    pop();
     
     
      
 
   }
  
  




  //Vía 1 Nivel 2


  stroke(88, 146, 157);
  strokeWeight(148);
  line(-48, -129, 161, 888);

  stroke(204, 215, 233);
  strokeWeight(1);
  line(-18, -128, 179, 829);

  stroke(204, 215, 233);
  strokeWeight(1);
  line(-68, -117, 122, 829);

  stroke(204, 215, 233);
  strokeWeight(9);
  line(-120, -117, 72, 813);

  stroke(204, 215, 233);
  strokeWeight(9);
  line(29, -129, 222, 813);




  //Vía 2 Nivel 2


  stroke(169, 7, 32);
  strokeWeight(114);
  line(335, -33, 509, 825);

  stroke(211, 149, 154);
  strokeWeight(1);
  line(335, -33, 509, 825);

  stroke(211, 149, 154);
  strokeWeight(9);
  line(275, -35, 450, 826);

  stroke(211, 149, 154);
  strokeWeight(9);
  line(391, -35, 564, 817);


  
  
  
   //Carrito Vía 1 Nivel 2

     push();
    translate(-9, 0);
    rotate(radians(80));
    rectMode(CENTER);
    fill(239, 194, 80);
    noStroke();
  
    rect(miNuevoSegundo*4, 0, 118, 50)
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(miNuevoSegundo*4 - 30, 0, 17, 45);
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(miNuevoSegundo*4 + 30, 0, 17, 45);
    pop();
     
 
   if (miMinuto == 2 || miMinuto == 3 || miMinuto == 5 || miMinuto == 7 || miMinuto == 9 || miMinuto == 11|| miMinuto == 13|| miMinuto == 17 || miMinuto == 19 || miMinuto == 30 || miMinuto == 23|| miMinuto == 29|| miMinuto == 31 || miMinuto == 37 || miMinuto == 41 || miMinuto == 43 || miMinuto == 47 || miMinuto == 53 || miMinuto == 59) {
    push();
    translate(186, 800);
    rotate(radians(259));
    rectMode(CENTER);
    fill(239, 238, 27);
    noStroke();
  
    rect(miNuevoSegundo, 0, 118, 50)
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(miNuevoSegundo - 30, 0, 17, 45);
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(miNuevoSegundo + 30, 0, 17, 45);
    pop();
     
     
         push();
    translate(-68, 0);
    rotate(radians(78));
    rectMode(CENTER);
    fill(88, 239, 236);
    noStroke();
        rect(miNuevoSegundo, 0, 118, 50)
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(miNuevoSegundo - 30, 0, 17, 45);
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(miNuevoSegundo + 30, 0, 17, 45);
    pop();
 
   }
  
  
  
  
  
 
  
  
  //Carrito Vía 2 Nivel 2

     push();
    translate(515, 800);
    rotate(radians(260));
    rectMode(CENTER);
    fill(142, 239, 94);
    noStroke();
  
    rect(miNuevoSegundo*2, 0, 118, 50)
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(miNuevoSegundo*2 - 30, 0, 17, 45);
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(miNuevoSegundo*2 + 30, 0, 17, 45);
    pop();
     
 
   if (miMinuto == 1 || miMinuto == 3 || miMinuto == 9 || miMinuto == 12 || miMinuto == 15 || miMinuto == 18|| miMinuto == 21|| miMinuto == 24 || miMinuto == 27 || miMinuto == 30 || miMinuto == 33|| miMinuto == 36|| miMinuto == 42 || miMinuto == 45 || miMinuto == 48 || miMinuto == 51 || miMinuto == 54 || miMinuto == 57) {
    push();
    translate(515, 800);
    rotate(radians(260));
    rectMode(CENTER);
    fill(239, 238, 27);
    noStroke();
  
    rect(miNuevoSegundo, 0, 118, 50)
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(miNuevoSegundo - 30, 0, 17, 45);
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(miNuevoSegundo + 30, 0, 17, 45);
    pop();
     
     
         push();
    translate(316, 0);
    rotate(radians(79));
    rectMode(CENTER);
    fill(88, 239, 236);
    noStroke();
        rect(miNuevoSegundo, 0, 118, 50)
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(miNuevoSegundo - 30, 0, 17, 45);
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(miNuevoSegundo + 30, 0, 17, 45);
    pop();
 
   }
  
  

  

  //Vía 3 Nivel 2


  push()

  translate(550, 0);

  stroke(169, 7, 32);
  strokeWeight(186);
  line(-48, -129, 161, 888);

  stroke(211, 149, 154);
  strokeWeight(1);
  line(-18, -128, 179, 829);

  stroke(211, 149, 154);
  strokeWeight(1);
  line(-68, -117, 122, 829);

  stroke(211, 149, 154);
  strokeWeight(9);
  line(-120, -117, 72, 813);

  stroke(211, 149, 154);
  strokeWeight(9);
  line(29, -129, 222, 813);


  pop()
  
  
  
  //Carrito Vía 3 Nivel 2

     push();
    translate(687, 800);
    rotate(radians(260));
    rectMode(CENTER);
    fill(239, 136, 103);
    noStroke();
  
    rect((miNuevoSegundo*5)+30, 0, 118, 50)
    rectMode(CENTER);
    fill(96, 96, 96);
    rect((miNuevoSegundo*5)+30 - 30, 0, 17, 45);
    rectMode(CENTER);
    fill(96, 96, 96);
    rect((miNuevoSegundo*5)+30 + 30, 0, 17, 45);
    pop();
  
  



  //Vía 1 Nivel 3
  push();

  translate(0, 303);

  stroke(182, 97, 92);
  strokeWeight(95);
  line(1031, -120, -307, 208);

  stroke(211, 156, 166);
  strokeWeight(1);
  line(1031, -120, -307, 208);


  stroke(211, 156, 166);
  strokeWeight(9);
  line(1024, -173, -314, 163);


  stroke(211, 156, 166);
  strokeWeight(9);
  line(1044, -79, -296, 251);

  pop();



  //Vía 1 Nivel 4

  noFill();
  stroke(255, 174, 114);
  strokeWeight(186);
  ellipse(800, 800, 889, 889);



  noFill();
  stroke(255, 242, 0);
  strokeWeight(5);
  ellipse(800, 800, 889, 889)



  //Carro



  push();



  translate(800, 800);
  var miNuevoSeg = map(miSegundo, 0, 59, 0, 359);

  rotate(radians(100 + miMilli / 359))







  rectMode(CENTER);

  fill(239, 136, 103);
  noStroke();
  rect(0, 390, 148, 69)
  rectMode(CENTER);
  fill(96, 96, 96);
  rect(-50, 390, 17, 50);
  rectMode(CENTER);
  fill(96, 96, 96);
  rect(50, 390, 17, 50);



  pop();





}