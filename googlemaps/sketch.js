var posx1 = 40

var posx2 = 230

var s = 1.5;

var desplaza = 1;
var posy1 = 1000
var posy2 = 1000
var posy3 = 800
var posy4 = 600
var herramienta = 0;
var estado = 0;
var circuX = 0;
var circuY = 0;
var angulito = 10;
var mapa;
var tdepa;
var tamenaza;
var valor1_1;
var valor1_2;
var valor1_3;
var valor1_4;
var estrellas1;
var estrellas2;
var estrellas3;
var estrellas4;
var estrellas5;
var estrellas0;
var barra;
var familia;

var razoc;

var razom;

var razob;

var razcor;

var razos;

var razog;



//Departamentos
var saix = 54;
var saiy = 73;
var saia = 40;

var amazx = 441;
var amazy = 802;
var amaza = 40;

var antiox = 229;
var antioy = 367;
var antioa = 40;

var araux = 451;
var arauy = 360;
var araua = 40;


var atlax = 252;
var atlay = 140;
var atlaa = 40;


var bolix = 290;
var boliy = 270;
var bolia = 40;

var boyax = 353;
var boyay = 415;
var boyaa = 40;

var bogox = 307;
var bogoy = 469;
var bogoa = 40;


var caldax = 228;
var calday = 438;
var caldaa = 40;


var caqux = 293;
var caquy = 685;
var caqua = 40;


var casax = 427;
var casay = 432;
var casaa = 40;


var caucx = 139;
var caucy = 584;
var cauca = 40;


var cesax = 333;
var cesay = 191;
var cesaa = 40;


var chocx = 152;
var chocy = 431;
var choca = 40;


var cundx = 281;
var cundy = 437;
var cunda = 40;


var cordx = 210;
var cordy = 267;
var corda = 40;


var guaix = 573;
var guaiy = 569;
var guaia = 40;


var guavx = 403;
var guavy = 621;
var guava = 40;


var huilx = 220;
var huily = 579;
var huila = 40;


var guajx = 381;
var guajy = 109;
var guaja = 40;


var magdx = 282;
var magdy = 184;
var magda = 40;


var metax = 356;
var metay = 541;
var metaa = 40;


var narix = 82;
var nariy = 634;
var naria = 40;


var nsanx = 361;
var nsany = 289;
var nsana = 40;


var putux = 210;
var putuy = 690;
var putua = 40;


var quinx = 216;
var quiny = 480;
var quina = 40;


var risax = 199;
var risay = 451;
var risaa = 40;


var santx = 331;
var santy = 367;
var santa = 40;


var sucrx = 241;
var sucry = 234;
var sucra = 40;


var tolix = 242;
var toliy = 500;
var tolia = 40;


var vallx = 169;
var vally = 527;
var valla = 40;


var vaupx = 472;
var vaupy = 674;
var vaupa = 40;


var vichx = 545;
var vichy = 463;
var vicha = 40;

var home;


var xpuntaje = 160


var xpuntaje2 = 100


function preload() {


  estrellas1 = loadImage('assets/estrellas1.png');
  estrellas2 = loadImage('assets/estrellas2.png');
  estrellas3 = loadImage('assets/estrellas3.png');
  estrellas4 = loadImage('assets/estrellas4.png');
  estrellas5 = loadImage('assets/estrellas5.png');
  estrellas0 = loadImage('assets/estrellas0.png');


  razoc = loadImage('assets/razocesar.png');

  razom = loadImage('assets/razomagda.png');

  razob = loadImage('assets/razoboli.png');

  razcor = loadImage('assets/razocordo.png');

  razos = loadImage('assets/razosucre.png');

  razog = loadImage('assets/razoguaji.png');
  
  home = loadImage('assets/home1.png');



  familia = loadImage('assets/familia.png');
  barra = loadImage('assets/barrasuperior.png');
  mapa = loadImage('assets/mapa.png');
  tdepa = loadTable('bases/departamentos.csv', 'csv', 'header');
  tamenaza = loadTable('assets/amenaza.csv', 'csv', 'header');
  tfamilia = loadTable('bases/hogaresdesplazados.csv', 'csv', 'header');
}



function setup() {
  createCanvas(720, 1280);

  text(tdepa.getRowCount(), 20, 20);
  text(tdepa.getColumnCount(), 20, 40);




}

function draw() {
  background(220);

  //Mapa
  push();

  image(mapa, 0, 0)

  pop();

  image(barra, 0, 0);


  //






  //Puntaje







  //SAI
  if (estado == 4) {


    valor1_1 = tdepa.get(4, 'departamento');
    valor1_2 = tdepa.get(4, 'dato');
    valor1_3 = tdepa.get(4, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'sai');
    textSize(23);
    fill(0);
    text(valor1_1, 100, 1038, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);
    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()
    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }

  //AMAZ 
  if (estado == 1) {


    valor1_1 = tdepa.get(1, 'departamento');
    valor1_2 = tdepa.get(1, 'dato');
    valor1_3 = tdepa.get(1, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'amazonas');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }

  //ANTIO

  if (estado == 2) {


    valor1_1 = tdepa.get(2, 'departamento');
    valor1_2 = tdepa.get(2, 'dato');
    valor1_3 = tdepa.get(2, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'antioquia');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //ARAU

  if (estado == 3) {


    valor1_1 = tdepa.get(3, 'departamento');
    valor1_2 = tdepa.get(3, 'dato');
    valor1_3 = tdepa.get(3, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'arauca');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //ATLA

  if (estado == 5) {


    valor1_1 = tdepa.get(5, 'departamento');
    valor1_2 = tdepa.get(5, 'dato');
    valor1_3 = tdepa.get(5, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'atlantico');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //BOGO

  if (estado == 6) {


    valor1_1 = tdepa.get(6, 'departamento');
    valor1_2 = tdepa.get(6, 'dato');
    valor1_3 = tdepa.get(6, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'bogota');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);


    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()


    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }



  //BOLÍVAR 
  if (estado == 7) {


    valor1_1 = tdepa.get(7, 'departamento');
    valor1_2 = tdepa.get(7, 'dato');
    valor1_3 = tdepa.get(7, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'bolivar');
    textSize(40);
    fill(0);
    text(valor1_1, 100, 1040, 400, 200);

    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()


    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);

    image(razob, 310, 200);
  }



  //BOYA

  if (estado == 8) {


    valor1_1 = tdepa.get(8, 'departamento');
    valor1_2 = tdepa.get(8, 'dato');
    valor1_3 = tdepa.get(8, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'boyaca');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //CALDAS

  if (estado == 9) {


    valor1_1 = tdepa.get(9, 'departamento');
    valor1_2 = tdepa.get(9, 'dato');
    valor1_3 = tdepa.get(9, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'caldas');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //CAQUE

  if (estado == 10) {


    valor1_1 = tdepa.get(10, 'departamento');
    valor1_2 = tdepa.get(10, 'dato');
    valor1_3 = tdepa.get(10, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'caqueta');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //CASA

  if (estado == 11) {


    valor1_1 = tdepa.get(11, 'departamento');
    valor1_2 = tdepa.get(11, 'dato');
    valor1_3 = tdepa.get(11, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'casanare');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //CAUCA

  if (estado == 12) {


    valor1_1 = tdepa.get(12, 'departamento');
    valor1_2 = tdepa.get(12, 'dato');
    valor1_3 = tdepa.get(12, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'cauca');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //CESAR

  if (estado == 13) {


    valor1_1 = tdepa.get(13, 'departamento');
    valor1_2 = tdepa.get(13, 'dato');
    valor1_3 = tdepa.get(13, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'cesar');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);


    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()
    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);

    image(razoc, 354, 140);
  }


  //CHOCO

  if (estado == 14) {


    valor1_1 = tdepa.get(14, 'departamento');
    valor1_2 = tdepa.get(14, 'dato');
    valor1_3 = tdepa.get(14, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'choco');
    textSize(40);
    fill(0);
    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }




  //CORDO

  if (estado == 15) {



    valor1_1 = tdepa.get(15, 'departamento');
    valor1_2 = tdepa.get(15, 'dato');
    valor1_3 = tdepa.get(15, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'cundinamarca');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);
    
      
    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
   
 
    

  }


  //CUNDI

  if (estado == 16) {


    valor1_1 = tdepa.get(16, 'departamento');
    valor1_2 = tdepa.get(16, 'dato');
    valor1_3 = tdepa.get(16, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'cordoba');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);
    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
         image(razcor, 45, 225);

  }


  //GUAINIA

  if (estado == 17) {


    valor1_1 = tdepa.get(17, 'departamento');
    valor1_2 = tdepa.get(17, 'dato');
    valor1_3 = tdepa.get(17, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'guainia');
     textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);


    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()
    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);
    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //GUAVIARE

  if (estado == 18) {


    valor1_1 = tdepa.get(18, 'departamento');
    valor1_2 = tdepa.get(18, 'dato');
    valor1_3 = tdepa.get(18, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'guaviare');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);
    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //HUILA

  if (estado == 19) {


    valor1_1 = tdepa.get(19, 'departamento');
    valor1_2 = tdepa.get(19, 'dato');
    valor1_3 = tdepa.get(19, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'huila');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //GUAJIRA

  if (estado == 20) {


    valor1_1 = tdepa.get(20, 'departamento');
    valor1_2 = tdepa.get(20, 'dato');
    valor1_3 = tdepa.get(20, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'la guajira');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
    
  image(razog, 405, 63);
  }



  //MAGDALENA

  if (estado == 21) {


    valor1_1 = tdepa.get(21, 'departamento');
    valor1_2 = tdepa.get(21, 'dato');
    valor1_3 = tdepa.get(21, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'magdalena');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);
    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
    
     image(razom, 110, 115);
  }


  //META

  if (estado == 22) {


    valor1_1 = tdepa.get(22, 'departamento');
    valor1_2 = tdepa.get(22, 'dato');
    valor1_3 = tdepa.get(22, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'meta');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //NARI

  if (estado == 23) {


    valor1_1 = tdepa.get(23, 'departamento');
    valor1_2 = tdepa.get(23, 'dato');
    valor1_3 = tdepa.get(23, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'narino');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);
    image(familia, 492, 1057);
  }


  //NORTE DE S

  if (estado == 24) {


    valor1_1 = tdepa.get(24, 'departamento');
    valor1_2 = tdepa.get(24, 'dato');
    valor1_3 = tdepa.get(24, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'norte de santander');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);
    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //PUTUMAYO
  if (estado == 25) {


    valor1_1 = tdepa.get(25, 'departamento');
    valor1_2 = tdepa.get(25, 'dato');
    valor1_3 = tdepa.get(25, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'putumayo');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //QUINDIO

  if (estado == 26) {


    valor1_1 = tdepa.get(26, 'departamento');
    valor1_2 = tdepa.get(26, 'dato');
    valor1_3 = tdepa.get(26, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'quindio');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //RISARALDA

  if (estado == 27) {


    valor1_1 = tdepa.get(27, 'departamento');
    valor1_2 = tdepa.get(27, 'dato');
    valor1_3 = tdepa.get(27, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'risaralda');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);
    image(familia, 492, 1057);
  }

  //SANTANDER

  if (estado == 28) {


    valor1_1 = tdepa.get(28, 'departamento');
    valor1_2 = tdepa.get(28, 'dato');
    valor1_3 = tdepa.get(28, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'santander');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }

  //SUCRE

  if (estado == 29) {


    valor1_1 = tdepa.get(29, 'departamento');
    valor1_2 = tdepa.get(29, 'dato');
    valor1_3 = tdepa.get(29, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'sucre');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);
    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
     image(razos, 95, 150);
  }


  //TOLIMA

  if (estado == 30) {


    valor1_1 = tdepa.get(30, 'departamento');
    valor1_2 = tdepa.get(30, 'dato');
    valor1_3 = tdepa.get(30, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'tolima');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);


    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()
    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //VALLE

  if (estado == 31) {


    valor1_1 = tdepa.get(31, 'departamento');
    valor1_2 = tdepa.get(31, 'dato');
    valor1_3 = tdepa.get(31, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'valle del cauca');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);


    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()
    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);
    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }


  //VAUPES

  if (estado == 32) {


    valor1_1 = tdepa.get(32, 'departamento');
    valor1_2 = tdepa.get(32, 'dato');
    valor1_3 = tdepa.get(32, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'vaupes');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 160, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);
    image(familia, 492, 1057);
  }

  //VICHADA
  if (estado == 33) {


    valor1_1 = tdepa.get(33, 'departamento');
    valor1_2 = tdepa.get(33, 'dato');
    valor1_3 = tdepa.get(33, 'porcentaje');
    valor1_4 = tfamilia.get(15, 'vichada');
    textSize(40);
    fill(0);

    text(valor1_1, 100, 1040, 400, 200);
    textSize(15)
    text(valor1_2, 102, 1192);

    push()
    fill(241, 141, 96)
    text("Esfuerzos para disminuir las amenazas", 102, 1158);

    text("desde la firma", 102, 1172);
    pop()

    text("Amenazas (2005-2018)", 133, 1192);

    text(valor1_4 * desplaza, 492, 1133);

    text("Hogares han", 540, 1133);
    text("abandonado esta zona", 540, 1148);

    image(familia, 492, 1057);
  }



  //Puntaje

  textSize(40)
  if (valor1_3 >= 0 && valor1_3 < 0.5) {


    image(estrellas0, xpuntaje, 1100)

    textSize(30);
    fill(255, 107, 0);
    text("0.0", xpuntaje2, 1133);
  }

  if (valor1_3 >= 0.5 && valor1_3 < 1.5) {

    image(estrellas1, xpuntaje, 1100)

    textSize(30);
    fill(255, 107, 0);
    text("1.0", xpuntaje2, 1133);
  }

  if (valor1_3 >= 1.5 && valor1_3 < 2.5) {

    image(estrellas2, xpuntaje, 1100)

    textSize(30);
    fill(255, 107, 0);
    text("2.0", xpuntaje2, 1133);
  }

  if (valor1_3 >= 2.5 && valor1_3 < 3.5) {

    image(estrellas3, xpuntaje, 1100)

    textSize(30);
    fill(255, 107, 0);
    text("3.0", xpuntaje2, 1133);
  }


  if (valor1_3 >= 3.5 && valor1_3 < 4.5) {

    image(estrellas4, xpuntaje, 1100)

    textSize(30);
    fill(255, 107, 0);
    text("4.0", xpuntaje2, 1133);
  }

  if (valor1_3 >= 4.5 && valor1_3 <= 5) {

    image(estrellas5, xpuntaje, 1100)

    textSize(30);
    fill(255, 107, 0);
    text("5.0", xpuntaje2, 1133);
  }


  /*
  	//Zoom
  	fill(150, 0, 0)
  	rect(610, 40, 80, 80)

  	fill(150, 0, 0)
  	rect(610, 140, 80, 80)

  	if (mouseIsPressed == true) {

  		if (mouseX > 610 && mouseX < 690 &&
  			mouseY > 40 && mouseY < 120) {

  			s = s + 0.01

  		}

  		if (mouseX > 610 && mouseX < 690 &&
  			mouseY > 140 && mouseY < 220) {

  			s = s - 0.01

  		}
  		if (s < 1) {
  			s = 1
  		}
  	}

  */

image(home,319,1180)
}



function mouseReleased() {
  
  
    if (mouseX > width / 2 - 40 && mouseX < width / 2 + 40 &&
                mouseY > 1180 && mouseY < 1260) {
                //Boton Home

            window.open("https://jdgaitanh.github.io/fundamentos1/homecito/index.html");
            }




  if (mouseX > saix && mouseX < saix + saia &&
    mouseY > saiy && mouseY < saiy + saia) {

    estado = 4
  }

  if (mouseX > amazx && mouseX < amazx + amaza &&
    mouseY > amazy && mouseY < amazy + amaza) {

    estado = 1
  }
  if (mouseX > antiox && mouseX < antiox + antioa &&
    mouseY > antioy && mouseY < antioy + antioa) {

    estado = 2
  }
  if (mouseX > araux && mouseX < araux + araua &&
    mouseY > arauy && mouseY < arauy + araua) {

    estado = 3
  }

  if (mouseX > atlax && mouseX < atlax + atlaa &&
    mouseY > atlay && mouseY < atlay + atlaa) {

    estado = 5
  }

  if (mouseX > bolix && mouseX < bolix + bolia &&
    mouseY > boliy && mouseY < boliy + bolia) {

    estado = 7
  }


  if (mouseX > boyax && mouseX < boyax + boyaa &&
    mouseY > boyay && mouseY < boyay + boyaa) {

    estado = 8
  }

  if (mouseX > bogox && mouseX < bogox + bogoa &&
    mouseY > bogoy && mouseY < bogoy + bogoa) {

    estado = 6
  }


  if (mouseX > caldax && mouseX < caldax + caldaa &&
    mouseY > calday && mouseY < calday + caldaa) {

    estado = 9
  }


  if (mouseX > caqux && mouseX < caqux + caqua &&
    mouseY > caquy && mouseY < caquy + caqua) {

    estado = 10
  }


  if (mouseX > casax && mouseX < casax + casaa &&
    mouseY > casay && mouseY < casay + casaa) {

    estado = 11
  }



  if (mouseX > caucx && mouseX < caucx + cauca &&
    mouseY > caucy && mouseY < caucy + cauca) {

    estado = 12
  }


  if (mouseX > cesax && mouseX < cesax + cesaa &&
    mouseY > cesay && mouseY < cesay + cesaa) {

    estado = 13
  }


  if (mouseX > chocx && mouseX < chocx + choca &&
    mouseY > chocy && mouseY < chocy + choca) {

    estado = 14
  }


  if (mouseX > cundx && mouseX < cundx + cunda &&
    mouseY > cundy && mouseY < cundy + cunda) {

    estado = 15
  }


  if (mouseX > cordx && mouseX < cordx + corda &&
    mouseY > cordy && mouseY < cordy + corda) {

    estado = 16
  }


  if (mouseX > guaix && mouseX < guaix + guaia &&
    mouseY > guaiy && mouseY < guaiy + guaia) {

    estado = 17
  }


  if (mouseX > guavx && mouseX < guavx + guava &&
    mouseY > guavy && mouseY < guavy + guava) {

    estado = 18
  }


  if (mouseX > huilx && mouseX < huilx + huila &&
    mouseY > huily && mouseY < huily + huila) {

    estado = 19
  }


  if (mouseX > guajx && mouseX < guajx + guaja &&
    mouseY > guajy && mouseY < guajy + guaja) {

    estado = 20
  }

  if (mouseX > magdx && mouseX < magdx + magda &&
    mouseY > magdy && mouseY < magdy + magda) {

    estado = 21
  }



  if (mouseX > metax && mouseX < metax + metaa &&
    mouseY > metay && mouseY < metay + metaa) {

    estado = 22
  }


  if (mouseX > narix && mouseX < narix + naria &&
    mouseY > nariy && mouseY < nariy + naria) {

    estado = 23
  }


  if (mouseX > nsanx && mouseX < nsanx + nsana &&
    mouseY > nsany && mouseY < nsany + nsana) {

    estado = 24
  }


  if (mouseX > putux && mouseX < putux + putua &&
    mouseY > putuy && mouseY < putuy + putua) {

    estado = 25
  }


  if (mouseX > quinx && mouseX < quinx + quina &&
    mouseY > quiny && mouseY < quiny + quina) {

    estado = 26
  }

  if (mouseX > risax && mouseX < risax + risaa &&
    mouseY > risay && mouseY < risay + risaa) {

    estado = 27
  }

  if (mouseX > santx && mouseX < santx + santa &&
    mouseY > santy && mouseY < santy + santa) {

    estado = 28
  }


  if (mouseX > sucrx && mouseX < sucrx + sucra &&
    mouseY > sucry && mouseY < sucry + sucra) {

    estado = 29
  }


  if (mouseX > tolix && mouseX < tolix + tolia &&
    mouseY > toliy && mouseY < toliy + tolia) {

    estado = 30
  }

  if (mouseX > vallx && mouseX < vallx + valla &&
    mouseY > vally && mouseY < vally + valla) {

    estado = 31
  }


  if (mouseX > vaupx && mouseX < vaupx + vaupa &&
    mouseY > vaupy && mouseY < vaupy + vaupa) {

    estado = 32
  }


  if (mouseX > vichx && mouseX < vichx + vicha &&
    mouseY > vichy && mouseY < vichy + vicha) {

    estado = 33
  }








  /*
this.saix=5;
this.saiy=103;
this.saia=58;
this.saih=59;
   
   
   	if (mouseX > this.saix && mouseX < this.saix+this.saia &&
			mouseY > this.saiy && mouseY <this. saiy+this.saih) {



	fill(255,0,0)
	stroke(0)
	rect(this.saix, this.saiy, this.saia, this.saih)
    

			
			
			
		
	}*/


}

function dibujarHome() {
    push()
    fill(255, 255, 0)
    image(home, width / 2 - 40, 1180, 80, 80)
    pop()
}
