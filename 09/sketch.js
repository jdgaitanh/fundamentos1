var celuDiago;
var celu;
var llamada;

var x = 400;
var y = 10;
var dir = 1;
var velo = 2;
var diagoposY1 = 0;
var tam1=0;
var yCelu=800;
var yCelu2=890;
var yCelu3=940;
var yCelu4=970;
var yCelu5=1000;
var yCelu6=1030;
var miTabla;


function preload() {
  celuDiago = loadImage('assets/celuDiago.png');
  celu = loadImage('assets/celu.png');
  llamada = loadImage('assets/llamada.png');
    miTabla = loadTable('assets/amenazas.csv', 'csv', 'header');
}




function setup() {
  createCanvas(800, 800);
  
    text(miTabla.getRowCount(), 20,20);
  text(miTabla.getColumnCount(), 20,40);
}

function draw() {
  background(255);



  //Llamada
  imageMode(CENTER);

  noTint()
  image(llamada, x, 400, 500, 500);
  x = x + velo * dir;
  y = y + velo * dir;

  if (x > 398) {
    //x=1; 
    dir = -1;
  }

  if (x < 402) {
    dir = 1;
  }
  
  if (frameCount>=200) {
velo = 0;
    
rectMode(CENTER)
    	fill(255);
     rect(width/2, 400, 800, 800);
        imageMode(CENTER)
     image(celu, x, yCelu,505,tam1);
    
    

    
    var valor1_1 = miTabla.get(1,'Ano');
    textSize(32);
    fill(0);
   text(valor1_1,240,yCelu2);
    
    var valor1_2 = miTabla.get(1,'Numero_amenazas');
    textSize(32);
    fill(0);
   text(valor1_2,450,yCelu2);
    
    
        var valor2_1 = miTabla.get(2,'Ano');
    textSize(32);
    fill(0);
   text(valor2_1,240,yCelu3);
    
    var valor2_2 = miTabla.get(2,'Numero_amenazas');
    textSize(32);
    fill(0);
   text(valor2_2,450,yCelu3);
    
        var valor3_1 = miTabla.get(3,'Ano');
    textSize(32);
    fill(0);
   text(valor3_1,240,yCelu4);
    
    var valor3_2 = miTabla.get(3,'Numero_amenazas');
    textSize(32);
    fill(0);
   text(valor3_2,450,yCelu4);
    
        var valor4_1 = miTabla.get(4,'Ano');
    textSize(32);
    fill(0);
   text(valor4_1,240,yCelu5);
    
    var valor4_2 = miTabla.get(4,'Numero_amenazas');
    textSize(32);
    fill(0);
   text(valor4_2,450,yCelu5);
    
        var valor5_1 = miTabla.get(5,'Ano');
    textSize(32);
    fill(0);
   text(valor5_1,240,yCelu6);
    
    var valor5_2 = miTabla.get(5,'Numero_amenazas');
    textSize(32);
    fill(0);
   text(valor5_2,450,yCelu6);
    
    
    
    
    
    
    
    tam1 = tam1+10;
    yCelu = yCelu-3
      yCelu2 = yCelu2-7
        yCelu3 = yCelu3-6
        yCelu4 = yCelu4-5
        yCelu5 = yCelu5-4
        yCelu6 = yCelu6-3.7
    
    
     if (tam1>=774) {
       
        tam1 = 774;
     }
    
 if (yCelu<=600) {
       
        yCelu = 600;
     }
    
     if (yCelu2<=380) {
       
        yCelu2 = 380;
     }
    
        if (yCelu3<=420) {
       
        yCelu3 = 420;
     }
    
        if (yCelu4<=460) {
       
        yCelu4 = 460;
     }
    

            if (yCelu5<=500) {
       
        yCelu5 = 500;
     }
    
           if (yCelu6<=540) {
       
        yCelu6 = 540;
     }

  
  }







}