var x = 0;
var y = 0;
var tam = 50;
var y2 = 50;

var x2 = 50;

function setup() {
  createCanvas(800, 800);
  background(255);

  
  //Pintar número de cuadrados
for ( var j = 0 ; j < 16 ; j ++){
  for ( var i = 0 ; i < 16 ; i ++){
  
   
   
  fill(0);
  noStroke();
   triangle(x+(tam*j), y+(tam*i), x2+(tam*j), y+(tam*i), x2+(tam*j), y2+(tam*i));
  
  fill(255);
  noStroke();
  triangle(x+(tam*i), y+(tam*j), x+(tam*i), y2+(tam*j), x2+(tam*i), y2+(tam*j));
	
  
 
}  
}
}