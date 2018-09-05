
var x = 0;
var y = 10;
var dir = 1;
var velo = 1;
var angulito = 10;

var posXbot1 = 30;

var posYbot1 = 15;

var tamBot1 = 20;


var posXbot2 = 60;

var posYbot2 = 15;

var tamBot2 = 20;


var posXbot3 = 90;

var posYbot3 = 15;

var tamBot3 = 20;



var posXbot14 =120;
var posYbot14 = 15;
var tamBot14 = 20;


var posXbot15 = 150;
var posYbot15 = 15;
var tamBot15 = 20;

var posXbot16 = 180;
var posYbot16 = 15;
var tamBot16 = 20;


var posXbot17 = 210;
var posYbot17 = 15;
var tamBot17 = 20;

var posXbot18 = 240;
var posYbot18 = 15;
var tamBot18 = 20;


var posXbot19 = 270;
var posYbot19 = 15;
var tamBot19 = 20;


var posXbot20 = 300;
var posYbot20 = 15;
var tamBot20 = 20;

var posXbot21 = 330;
var posYbot21 = 15;
var tamBot21 = 20;





var posXbot4 = 10;

var posYbot4 = 90;

var tamBot4 = 20;


var posXbot5 = 10;

var posYbot5 = 120;

var tamBot5 = 20;


var posXbot6 = 10;

var posYbot6 = 150;

var tamBot6 = 20;


var posXbot7 = 10;

var posYbot7 = 180;

var tamBot7 = 20;


var posXbot8 = 10;

var posYbot8 = 210;

var tamBot8 = 20;


var posXbot9 = 10;

var posYbot9 = 240;

var tamBot9 = 20;



var posXbot10 = 10;

var posYbot10 = 270;

var tamBot10 = 20;



var posXbot11 = 10;

var posYbot11 = 300;

var tamBot11 = 20;


var posXbot12 = 10;

var posYbot12 = 330;

var tamBot12 = 20;


var posXbot13 = 10;

var posYbot13 = 360;

var tamBot13 = 20;


var circuX = 0;
var circuY = 0;



var herramienta = 1;

var colorcito = 1;


var r = 255;
var g = 255;
var b = 255;




function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

}

//Herramientas
function draw() {
  stroke(0);
  strokeWeight(2)
  fill(255, 255, 255);
  rect(posXbot1, posYbot1, tamBot1, tamBot1);

 
  rect(posXbot2, posYbot2, tamBot2, tamBot2);
  
  fill(0);
  
  line (posXbot2, posYbot2+20,posXbot2+20, posYbot2 );
  noStroke();
 ellipse(posXbot2+15, posYbot2+5, tamBot2/3, tamBot2/3);

  
  stroke(0);
  strokeWeight(2)
  fill(255, 255, 255);
  rect(posXbot3, posYbot3, tamBot3, tamBot3);
  
    fill(0);
  noStroke();
 ellipse(posXbot3+5, posYbot3+10, tamBot3/3, (tamBot3*0,9));
  ellipse(posXbot3+15, posYbot3+10, tamBot3/7, (tamBot3*0,9));

 
    stroke(0);
  strokeWeight(2)
  fill(255, 255, 255);
  rect(posXbot14, posYbot14, tamBot14, tamBot14);
  fill(0);
  noStroke();
  ellipse(posXbot14+10, posYbot14+10, tamBot14/3, (tamBot14*0,9));
  ellipse(posXbot14+10, posYbot14+5, tamBot14/7, (tamBot14*0,9));
 
 
  stroke(0);
  strokeWeight(2)
  fill(255, 255, 255);
  rect(posXbot15, posYbot15, tamBot15, tamBot15);
  
    line (posXbot15, posYbot15,posXbot15+15, posYbot15+15 );
  noStroke();
  fill (0);
 rect(posXbot15+13, posYbot15+14, tamBot15/3, tamBot15/3);

 
   stroke(0);
  strokeWeight(2)
  fill(255, 255, 255);
  rect(posXbot16, posYbot16, tamBot16, tamBot16);
  ellipse (posXbot16+10, posYbot16+10, tamBot16/2, tamBot16/2);

 
   stroke(0);
  strokeWeight(2)
  fill(255, 255, 255);
  rect(posXbot17, posYbot17, tamBot17, tamBot17);
  rect(posXbot17+5, posYbot17+5, tamBot17/2, tamBot17/2);

  
 stroke(0);
  strokeWeight(2)
  fill(255, 255, 255);
  rect(posXbot18, posYbot18, tamBot18, tamBot18);
fill(0);
  rect(posXbot18, posYbot18, tamBot18/4, tamBot18/4);
  fill(255);
   rect(posXbot18+5, posYbot18+5, tamBot18/4, tamBot18/4);
  fill(0);
  rect(posXbot18+10, posYbot18+10, tamBot18/4, tamBot18/4);
  
  stroke(0);
  strokeWeight(2)
  fill(255, 255, 255);
  rect(posXbot19, posYbot19, tamBot19, tamBot19);
  fill(0);
   ellipse(posXbot19+10, posYbot19+10, tamBot19/2, tamBot19/2);
 strokeWeight(1);
  fill(255);
   triangle(posXbot19+10, posYbot19+10,posXbot19+20, posYbot19+18,posXbot19+9, posYbot19+18);

  
 stroke(0);
  strokeWeight(2)
  fill(255, 255, 255);
  rect(posXbot20, posYbot20, tamBot20, tamBot20);
  
  stroke(0);
strokeWeight(1);
beginShape();
vertex(posXbot20, posYbot20);
bezierVertex(posXbot20+8, posYbot20+2, posXbot20+8, posYbot20+7, posXbot20+3, posYbot20+7);
bezierVertex(posXbot20+5, posYbot20+8, posXbot20+6, posYbot20+2, posXbot20+3, posYbot20+2);
endShape();
 
  
  
  

  stroke(0);
  strokeWeight(2)
  fill(255, 255, 255);
  rect(posXbot21, posYbot21, tamBot21, tamBot21);
  ellipse(posXbot21+10, posYbot21+10, tamBot21/2, tamBot21/2);
    ellipse(posXbot21+10, posYbot21+10, tamBot21/2, tamBot21/2);
  strokeWeight(1)
  arc(posXbot21+10, posYbot21+10, tamBot21/4, tamBot21/4, 60, PI + QUARTER_PI);






  // Colores
  noStroke();
  fill(29, 184, 208);
  rect(posXbot4, posYbot4, tamBot4, tamBot4);

  noStroke();
  fill(255, 100, 0);
  rect(posXbot5, posYbot5, tamBot5, tamBot5);


  noStroke();
  fill(255, 139, 252);
  rect(posXbot6, posYbot6, tamBot6, tamBot6);


  noStroke();
  fill(58, 216, 255)
  rect(posXbot7, posYbot7, tamBot7, tamBot7);

  noStroke();
  fill(249, 255, 58)
  rect(posXbot8, posYbot8, tamBot8, tamBot8);

  noStroke();
  fill(58, 255, 210);
  rect(posXbot9, posYbot9, tamBot9, tamBot9);

  noStroke();

  fill(151, 90, 71)

  rect(posXbot10, posYbot10, tamBot10, tamBot10);

  noStroke();
  fill(65, 84, 13);
  rect(posXbot11, posYbot11, tamBot11, tamBot11);


  noStroke();
  fill(13, 82, 84)
  rect(posXbot12, posYbot12, tamBot12, tamBot12);

  noStroke();
  fill(255, 214, 151);
  rect(posXbot13, posYbot13, tamBot13, tamBot13);






  if (mouseIsPressed == false) {

    circuX = 0;
    circuY = 0;
    angulito =0;

  }

  if (mouseIsPressed == true) {

    circuX = circuX + 10;
    circuY = circuY + 10;
    angulito = angulito+10;





    if (mouseY > 80) {

      if (mouseX > 60) {

        //ellipse(mouseX, mouseY, 20, 20)

        if (herramienta == 1) {

          frameRate(20);
          stroke(r, g, b);
          fill(r, g, b);
          line(pmouseX, pmouseY, mouseX, mouseY);
          line(70, (height / 2), mouseX, mouseY);
          ellipse(pmouseX, pmouseY, 20, 20);

        }

        if (herramienta == 2) {

          fill(r, g, b);
                 frameRate(300);

          ellipse(mouseX, mouseY, random(10), 20);
       


        }
        
           if (herramienta == 3) {

          stroke(r, g, b);
             frameRate (200);
                            strokeWeight(mouseY-300);

point(mouseX, mouseY);


               }
        
         if (herramienta == 4) {

          stroke(r, g, b);
            fill(r, g, b);
             frameRate (200);
                           
           bezier(mouseX, mouseY, mouseX+10, mouseY+10, mouseX+90,mouseY+90, mouseX, mouseY);
   line(pmouseX, pmouseY, mouseX, mouseY);
           
          rect(pmouseX+40, pmouseY+40, 10, 10);
           }
           
        


          if (herramienta == 5) {


            stroke(r, g, b);
            strokeWeight(7);
            noFill();
            frameRate(30);
            ellipse(pmouseX, pmouseY, circuX, circuY);
            
            fill(255, 255, 255);
            ellipse(pmouseX, pmouseY, (circuX - 100), (circuY - 100));

          }
          
          if (herramienta == 6) {


            stroke(r, g, b);
            strokeWeight(7);
            noFill();
            frameRate(30);
            rect(pmouseX, pmouseY, circuX, circuY);
            
            fill(255, 255, 255);
            rect(pmouseX, pmouseY, (circuX/2), (circuY/2));

          }
          
             


        if (herramienta == 8) {


          fill(r, g, b);
          noStroke();
          frameRate(30);
         ellipse(pmouseX, pmouseY, circuX, circuY);

          fill(255, 255, 255);
          stroke(r,g,b)        
          triangle(pmouseX, pmouseY,pmouseX+30, pmouseY+30, pmouseX+20, pmouseY+60);

        }
        
        
          if (herramienta == 7) {
            fill(r,g,b)
         rect(x, y, 20, 20);
  x = x + velo * dir;
  y = y + velo * dir;

  if (x > width) {
    //x=1; 
    dir = -1;
  }

  if (x < -20) {
    dir = 1;
  }
  
  
  
  if (x > 0 && x < 100) {
    velo = 5;
  }


            
            
            
}
    
    
    
  

 if (herramienta == 9) {

fill(r,g,b)
noStroke();
beginShape();
vertex(pmouseX,pmouseY);
bezierVertex(pmouseX+50, pmouseY,pmouseX+50, pmouseY+55,pmouseX, pmouseY+55);
bezierVertex(pmouseX+20,pmouseY+60, pmouseX+30,pmouseY+5, pmouseX, pmouseY);
endShape(close);
   
          }
        
         if (herramienta == 10) {
           frameRate(30);

  stroke (r,g,b);
           strokeWeight(3);
           noFill();
                arc(pmouseX, pmouseY, circuX, circuY, 10+angulito, PI + QUARTER_PI);
           
           
            }
          



        if (colorcito == 1) {

          r = 29;
          g = 184;
          b = 208;




        }






        if (colorcito == 2) {

          r = 255;
          g = 100;
          b = 0;

        }


        if (colorcito == 3) {

          r = 255;
          g = 139;
          b = 252;

        }



        if (colorcito == 4) {

          r = 58;
          g = 216;
          b = 255;

        }

        if (colorcito == 5) {

          r = 249;
          g = 255;
          b = 58;

        }

        if (colorcito == 6) {

          r = 58;
          g = 255;
          b = 210;

        }

        if (colorcito == 7) {

          r = 151;
          g = 90;
          b = 71;

        }

        if (colorcito == 8) {

          r = 65;
          g = 84;
          b = 13;

        }

        if (colorcito == 9) {

          r = 13;
          g = 82;
          b = 84;

        }

        if (colorcito == 10) {

          r = 255;
          g = 214;
          b = 151;

        }







      }
    }




    if (mouseX > posXbot1 && mouseX < posXbot1 + tamBot1 &&
      mouseY > posYbot1 && mouseY < posYbot1 + tamBot1) {
      background(255);




    }
    if (mouseX > posXbot3 && mouseX < posXbot3 + tamBot3 &&
      mouseY > posYbot3 && mouseY < posYbot3 + tamBot3) {


      herramienta = 2


    }

    if (mouseX > posXbot2 && mouseX < posXbot2 + tamBot2 &&
      mouseY > posYbot2 && mouseY < posYbot2 + tamBot2) {

      herramienta = 1




    }

    if (mouseX > posXbot4 && mouseX < posXbot4 + tamBot4 &&
      mouseY > posYbot4 && mouseY < posYbot4 + tamBot4) {

      colorcito = 1




    }
    
    
    
      if (mouseX > posXbot14 && mouseX < posXbot14 + tamBot14 &&
      mouseY > posYbot14 && mouseY < posYbot14 + tamBot14) {

      herramienta = 3

  }

 if (mouseX > posXbot15 && mouseX < posXbot15 + tamBot15 &&
      mouseY > posYbot15 && mouseY < posYbot15 + tamBot15) {

      herramienta = 4

  }
    
     if (mouseX > posXbot16 && mouseX < posXbot16 + tamBot16 &&
      mouseY > posYbot16 && mouseY < posYbot16 + tamBot16) {

      herramienta = 5

  }
    
       if (mouseX > posXbot17 && mouseX < posXbot17 + tamBot17 &&
      mouseY > posYbot17 && mouseY < posYbot17 + tamBot17) {

      herramienta = 6

  }

    
         if (mouseX > posXbot18 && mouseX < posXbot18 + tamBot18 &&
      mouseY > posYbot18 && mouseY < posYbot18 + tamBot18) {

      herramienta = 7

  }
    
      if (mouseX > posXbot19 && mouseX < posXbot19 + tamBot19 &&
      mouseY > posYbot19 && mouseY < posYbot19 + tamBot19) {

      herramienta = 8

  }


      if (mouseX > posXbot20 && mouseX < posXbot20 + tamBot20 &&
      mouseY > posYbot20 && mouseY < posYbot20 + tamBot20) {

      herramienta = 9

  }
    
    
    
      if (mouseX > posXbot21 && mouseX < posXbot21 + tamBot21 &&
      mouseY > posYbot21 && mouseY < posYbot21 + tamBot21) {

      herramienta = 10

  }



    if (mouseX > posXbot5 && mouseX < posXbot5 + tamBot5 &&
      mouseY > posYbot5 && mouseY < posYbot5 + tamBot5) {

      colorcito = 2




    }


    if (mouseX > posXbot6 && mouseX < posXbot6 + tamBot6 &&
      mouseY > posYbot6 && mouseY < posYbot6 + tamBot6) {

      colorcito = 3




    }


    if (mouseX > posXbot7 && mouseX < posXbot7 + tamBot7 &&
      mouseY > posYbot7 && mouseY < posYbot7 + tamBot7) {

      colorcito = 4




    }


    if (mouseX > posXbot8 && mouseX < posXbot8 + tamBot8 &&
      mouseY > posYbot8 && mouseY < posYbot8 + tamBot8) {

      colorcito = 5




    }

    if (mouseX > posXbot9 && mouseX < posXbot9 + tamBot9 &&
      mouseY > posYbot9 && mouseY < posYbot9 + tamBot9) {

      colorcito = 6




    }

    if (mouseX > posXbot10 && mouseX < posXbot10 + tamBot10 &&
      mouseY > posYbot10 && mouseY < posYbot10 + tamBot10) {

      colorcito = 7




    }

    if (mouseX > posXbot11 && mouseX < posXbot11 + tamBot11 &&
      mouseY > posYbot11 && mouseY < posYbot11 + tamBot11) {

      colorcito = 8




    }


    if (mouseX > posXbot12 && mouseX < posXbot12 + tamBot12 &&
      mouseY > posYbot12 && mouseY < posYbot12 + tamBot12) {

      colorcito = 9




    }

    if (mouseX > posXbot13 && mouseX < posXbot13 + tamBot13 &&
      mouseY > posYbot13 && mouseY < posYbot13 + tamBot13) {

      colorcito = 10




    }
    
    
    
  














  }


}