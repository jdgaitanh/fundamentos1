 var ursus;
var plantica;
var witzy;

 var estrellas = [];

 var plantulas = [];

var bichos=[];

var aranas=[];

var hoyo;
var bichito;
var aranita;

function preload (){
  
hoyo = loadImage('assets/blackhole.png');
bichito = loadImage('assets/bicho.png');
  aranita = loadImage('assets/arana.png');
  
}



 function setup() {
   createCanvas(700, 400);

   ursus = new estrellita(600, 50);
   
   witzy = new arana(0, 0);



 }

 function draw() {
   background(0);

   frameRate(25);


   //Dibujar Estrellas
   ursus.dibujarse();
   ursus.parpadea();
   
   
   witzy.aparece();
   witzy.zumba();
   
   
   aranas[aranas.length] = new arana (width,height)
   
   if (frameCount % 50 == 0) {
     estrellas[estrellas.length] = new estrellita(random(0, width), random(0, 250));


   }
if (frameCount % 50 == 0) {
     plantulas[plantulas.length] = new plantula(random(0, width), random(200, 250));


   }
   
   
   if (frameCount % 50 == 0) {
     bichos[bichos.length] = new bicho(random(0, width), random(300, height));


   }
   
   
  
   for (var j = 0; j < estrellas.length; j = j + 1) {

     estrellas[j].dibujarse();
     estrellas[j].parpadea();


     if (estrellas[j].edad > 200) {

       estrellas[j].morir();
     }

   }

   for (var i = 0; i < estrellas.length; i = i + 1) {

     if (estrellas[i].wei > 25 && estrellas[i].morir) {

       estrellas[i].agujeroNegro();
     }

     if (estrellas[i].wei2 > 100) {

       // estrellas[i].morirAgu();

       estrellas[i].wei2 = 1
       if (frameCount >= 750) {

         estrellas[i].morirAgu();
       }

     }

   }



   for (var m = 0; m < plantulas.length; m = m + 1) {

    plantulas[m].dibujarse();
     plantulas[m].moverse();
     
     
     
     
    
     
       if (plantulas[m].edad > 100) {

       plantulas[m].crecer();
     }
     
     
        if (plantulas[m].edad > 1200) {

       plantulas[m].morir();
     }
   
       
  
   }
   
   
   
     for (var z = 0; z < bichos.length; z = z + 1) {

    bichos[z].aparece();
     bichos[z].zumba();
     
     
       
     var d= dist(plantulas[z].x,plantulas[z].y,bichos[z].x,bichos[z].y);
    
     
       if(d<100){
        bichos[z].crecer();
       
       }
       
       if(bichos[z].tam>100){
         
         bichos[z].tam=100
         
       }
       
     
     
        if (bichos[z].edad > 200) {

       bichos[z].muerebicho();
     }
       
       
       
       var dw= dist(pmouseX,pmouseY,bichos[z].x,bichos[z].y);
   
   if(dw<10){
   
     bichos[z].muerebicho();
   
   }
       
          
 

 
 
 
     }
   
   
    
   
   
      
 
 }


 function mousePressed() {}


 function mouseReleased() {

   if (mouseY < 250) {
     estrellas[estrellas.length] = new estrellita(mouseX, mouseY);

   }

 }

 //Especie 1 y 2
 function estrellita(estreX, estreY,img) { 
   //Características

   this.x = estreX;
   this.y = estreY;
   this.x1 = estreX;
   this.y1 = estreY;
   this.wei = 5;
   this.edad = 0;
   this.esEstrella = true;
   this.esAgujero = true;
   this.brillo = 200;
   this.wei2 = 6;
this.img=img;





   //Habilidades
   this.dibujarse = function() {

     if (this.esEstrella == true) {

       //Cuerpo
       strokeWeight(this.wei);
       stroke(this.brillo);
       fill(this.brillo)
       point(this.x, this.y);




     }


   };

   this.parpadea = function() {
     this.wei = this.wei + random(-1, 1);
     this.brillo = this.brillo + random(-250, 250);


     this.edad = this.edad + 1;


   };

   this.morir = function() {



     this.esEstrella = false;




   };



   this.agujeroNegro = function() {
     if (this.esAgujero == true) {
tint(this.wei2)
imageMode(CENTER);
    image(hoyo,this.x1, this.y1, 60+this.wei2, 40+this.wei2);
       this.wei2 = this.wei2 + 1
       /* stroke(255);
       strokeWeight(5);
       fill(0);
       ellipse(this.x1, this.y1, this.wei2 * 2, this.wei2)
       strokeWeight(2);
       noFill();
       ellipse(this.x1, this.y1, this.wei2 * 3, this.wei2 * 2)
       this.wei2 = this.wei2 + 1
       */

     }

     this.morirAgu = function() {

       this.esAgujero = false;

     }




   };


 }


 //Especie 3
 function plantula(plantuX) { 
   
     this.x = plantuX;
   this.x1 = plantuX;
   this.y = 400;
   this.a = 5;
   this.edad = 0;
   this.plantavive = true;
   
    //Habilidades
   this.dibujarse = function() {

     if (this.plantavive == true) {

       //Cuerpo
    

       
       strokeWeight(2);
       stroke(255);
       line (this.x, height,this.x1,this.y-100);




     }


   };
   
     this.moverse = function() {
     
         this.y = this.y + random(-1,1);
       
     this.x1 = this.x1 + random(-2, 2);
    this.edad = this.edad+1;

  };
   
   
 this.morir = function() {



     this.plantavive = false;




   };

    this.crecer = function() {



    this.y = this.y + random(-1);




   };
 
 
 
 }

//Especie 4
 function bicho(bichoX,bichoY) { 
   
     this.x = bichoX;
   this.y = bichoY;
   this.edad = 0;
   this.tam=20
   this.bichovive = true;
   
    //Habilidades
   this.aparece = function() {
     
       if (this.bichovive == true){

      tint(this.x);   
imageMode(CENTER);
    image(bichito,this.x, this.y, this.tam, this.tam);
         
       }     
     
     
   }
     
  this.zumba = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    
    this.edad = this.edad+1;


  };
  
  this.muerebicho = function(){
    
    this.bichovive = false;
   
    
    
    
  };  
 
   this.crecer = function() {



    this.tam = this.tam + random(1);




   };
 
 
 }




 function arana(araX,araY) { 
   
     this.x = araX;
   this.y = araY;
   
   this.tam=40
   this.aravive = true;
   
    //Habilidades
   this.aparece = function() {
     
       if (this.aravive == true){

       
imageMode(CENTER);
         noTint();
    image(aranita,this.x, this.y, this.tam, this.tam);
         
           this.x = pmouseX
           this.y = pmouseY
         
         
       }     
     
     
   }
     
  this.zumba = function() {
    this.tam = this.tam + random(-1, 1);
    



  };
  
  this.muereara= function(){
    
    this.aravive = false;
   
    
    
    
  };  
 
 
 
 
 }






