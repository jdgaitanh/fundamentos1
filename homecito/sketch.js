var miTabla;

var tablita;

var registros = []

var estado = 0;


var a = 180;
var y = 0;
var b = 250;
var c = 20;
var d = 720;
var e = 170;

var cuenta = 0;

function preload() {
    miTabla = loadTable('assets/amenazas_ano.csv', 'csv', 'header');
    home = loadImage('assets/home1.png');
    pantalla = loadImage('assets/mapa-05.png');
    barra = loadImage('assets/mapa-02.png');
    llamadasBoton = loadImage('assets/mapa-04.png');
    googleBoton = loadImage('assets/mapa-03.png');
    fondo = loadImage('assets/mapa-06.png');
    llamadanoresponde = loadImage('assets/mapa-07.png');
    caras = loadImage('assets/mapa-08.png');
    impunidad = loadImage('assets/mapa-11.png');
    recientesicono = loadImage('assets/mapa-09.png');
    favoritosicono = loadImage('assets/mapa-10.png');
    subregistro = loadImage('assets/mapa-12.png');

}

function setup() {
    createCanvas(720, 1280);
    background(220);

    print(miTabla.get(6, 'Ano'));

    //tablita = new registro(100, 200, 50000, 2009);
    for (var i = 0; i < miTabla.getRowCount(); i = i + 1) {
        registros[i] = new registro(50, i * 140 + 310, miTabla.get(i, 'Total'), miTabla.get(i, 'Ano'));
    }
}

function draw() {
    //estado = 2;


    if (estado == 0) {
        pantallaBloqueo()
    }


    if (estado == 1) {
        pantallaHome();
    }


    if (estado == 2) {
        llamadas();
    }

    if (estado == 3) {
        favoritos();
    }

    if (estado == 4) {
        contactos();
    }
  
  


  
}


function mouseReleased() {
    switch (estado) {
        case 0: // pantalla de bloqueo

            if (mouseX > width / 2 - 40 && mouseX < width / 2 + 40 &&
                mouseY > 1180 && mouseY < 1260) {
                //Boton Home

                estado = 1;
            }

            break;

        case 1: //pantalla de inicio 
            if (mouseX > width / 2 - 40 && mouseX < width / 2 + 40 &&
                mouseY > 1180 && mouseY < 1260) {
                //Boton Home

                estado = 1;
            }
            if (mouseX > 179 && mouseX < 270 && mouseY > 550 && mouseY < 640) {
                estado = 2; //Llamadas
            }
            if (mouseX > 442 && mouseX < 531 && mouseY > 547 && mouseY < 645) {
               
              window.open("https://jdgaitanh.github.io/fundamentos1/googlemaps/");
            
            }
            if (mouseX > 555 && mouseX < 695 && mouseY > 520 && mouseY < 612) {
                //estado = 7;//skype
            }
            break;



        case 2: //Registro
            if (mouseX > width / 2 - 40 && mouseX < width / 2 + 40 &&
                mouseY > 1180 && mouseY < 1260) {
                //Boton Home

                estado = 1;
                cuenta = 0;
            }
            if (mouseX > 205 && mouseX < 339 && mouseY > 70 && mouseY < 160) {
                estado = 2;
                cuenta = 0;

            }
            if (mouseX > 376 && mouseX < 512 && mouseY > 70 && mouseY < 160) {
                estado = 3;
                cuenta = 0;

            }
            if (mouseX > 555 && mouseX < 695 && mouseY > 70 && mouseY < 160) {
                estado = 4;
                cuenta = 0;

            }
            break;
        case 3: //Llamadas
            if (mouseX > width / 2 - 40 && mouseX < width / 2 + 40 &&
                mouseY > 1180 && mouseY < 1260) {
                //Boton Home

                estado = 1;
            }
            if (mouseX > 205 && mouseX < 339 && mouseY > 70 && mouseY < 160) {
                estado = 2;
            }
            if (mouseX > 376 && mouseX < 512 && mouseY > 70 && mouseY < 160) {
                estado = 3;
            }
            if (mouseX > 555 && mouseX < 695 && mouseY > 70 && mouseY < 160) {
                estado = 4;
            }
            break;

        case 4: //Favoritos
            if (mouseX > width / 2 - 40 && mouseX < width / 2 + 40 &&
                mouseY > 1180 && mouseY < 1260) {
                //Boton Home

                estado = 1;
            }
            if (mouseX > 205 && mouseX < 339 && mouseY > 70 && mouseY < 160) {
                estado = 2;
            }
            if (mouseX > 376 && mouseX < 512 && mouseY > 70 && mouseY < 160) {
                estado = 3;
            }
            if (mouseX > 555 && mouseX < 695 && mouseY > 70 && mouseY < 160) {
                estado = 4;
            }
            break;

        case 5: //Contactos
            if (mouseX > width / 2 - 40 && mouseX < width / 2 + 40 &&
                mouseY > 1180 && mouseY < 1260) {
                //Boton Home

                estado = 1;
            }
            if (mouseX > 205 && mouseX < 339 && mouseY > 70 && mouseY < 160) {
                estado = 2;
            }
            if (mouseX > 376 && mouseX < 512 && mouseY > 70 && mouseY < 160) {
                estado = 3;
            }
            if (mouseX > 555 && mouseX < 695 && mouseY > 70 && mouseY < 160) {
                estado = 4;
            }
            break;
    }

}

function dibujarHome() {
    push()
    fill(255, 255, 0)
    image(home, width / 2 - 40, 1180, 80, 80)
    pop()
}

function pantallaBloqueo() {
    fill(42, 72, 144);
    image(pantalla, 0, 0, 720, 1280);
    dibujarHome()

}

function pantallaHome() {


    fill(255, 241, 116, 20);
    image(fondo, 0, 0, 720, 1280);
    stroke(192, 192, 192);
    strokeWeight(3);
    image(barra, 0, 0, 720, 40);
    dibujarHome()

    image(llamadasBoton, 180, 550, 90, 90);
    image(googleBoton, 440, 550, 90, 90);

}

function llamadas() {
    background(220);
    image(barra, 0, 0, 720, 40);
    fill(255, 242, 0);
    for (var i = 0; i < 720; i = i + 1) {
        rect(i * a, y, 300, 190);
    }
    push();
    fill(0, 0, 0);
    textSize(30);
    //rect(30, 130, 100, 20);
    stroke(0, 0, 0);
    strokeWeight(1);
    text("Recientes", 205, 157);
    image(recientesicono, 225, 47, 80, 80);
    text("Favoritos", 385, 157);
    image(favoritosicono, 400, 47, 80, 80);
    text("Contactos", 560, 157);
    image(caras, 584, 50, 80, 70);
    pop();
    image(barra, 0, 0, 720, 40);

    var altoCuadrado = 60;
    var tamReg = registros.length;

    if (frameCount % 60 == 0 && cuenta < tamReg) {
        cuenta++;
    }
    fill(255, 242, 0);
    for (var f = 0; f < cuenta; f++) {

        var coordY = 320 + (altoCuadrado + 10) * f;
        var miReg = registros[tamReg - 1 - f];
        push()
        fill(255, 255, 255);
        rect(0, coordY, width, altoCuadrado);
        fill(255, 242, 0);
        rect(0, coordY, 160, altoCuadrado);

        fill(0)
        text(miReg.ano, 0, coordY + altoCuadrado - 10);
        text(miReg.cifra, 180, coordY + altoCuadrado - 10);
        pop()

    }

    push();
    fill(241, 191, 46);
    rect(0, 170, 1280, 140);
    fill(0, 0, 0);
    image(subregistro, 50, 200, 40, 40);

    push();
    stroke(0, 0, 0);
    strokeWeight(1);
    textSize(18);
    text("Preocupante subregistro de los fenómenos de amenaza en el país:", 160, 215);

    pop();
    textSize(14);
    text("	Según la Defensoría del Pueblo (2017), esto sucede, entre otras razones,", 155, 240);
    text("	porque en zonas donde hay control territorial de los actores armados y debilidad ", 155, 260);
    text("	en la presencia institucional, es poco probable la denuncia por parte de las víctimas. ", 155, 280);
    pop();
    //rect(20, 190, 500, 100); // cuadro todos los registros
    noStroke();
    fill(255, 255, 255);
    textSize(45);
    //text("Todos los registros", 40, 255);
    //triangle(510, 250, 510, 280, 480, 280);


    dibujarHome()

}

function favoritos() {
    background(220);
    image(barra, 0, 0, 720, 40);
    fill(255, 242, 0);
    for (var g = 0; g < 720; g = g + 1) {
        rect(g * a, y, 300, 170);
    }
    push();
    fill(0, 0, 0);
    textSize(30);
    //rect(30, 130, 100, 20);
    stroke(0, 0, 0);
    strokeWeight(1);
    text("Recientes", 205, 157);
    image(recientesicono, 225, 47, 80, 80);
    text("Favoritos", 385, 157);
    image(favoritosicono, 400, 47, 80, 80);
    text("Contactos", 560, 157);
    image(caras, 584, 50, 80, 70);
    pop();
    image(barra, 0, 0, 720, 40);

    fill(241, 191, 46);
    rect(0, 170, 1280, 120);



    push();
    fill(0, 0, 0);
    textSize(20);
    stroke(0, 0, 0);
    strokeWeight(1);
    text("Circuito de impunidad:", 178, 207);
    image(impunidad, 40, 181, 80, 80);
    pop();
    push();
    fill(0, 0, 0);
    textSize(20);
    text("Escasa persecusión y castigo penal efectivo a ", 178, 232);
    text("los responsables de estos delitos (Defensoría, 2017).", 178, 255);
    pop();

    fill(0, 0, 0);
    textSize(30);
    text("CONTACTADO CON FRECUENCIA", 30, 330);


    fill(255, 255, 255);
    for (var f = 1; f < 1280; f = f + 0.5) {
        rect(0, f * 350, d, 150);
    }

    fill(255, 242, 0);
    for (var f = 1; f < 1280; f = f + 0.5) { // caras
        image(llamadanoresponde, 0, f * 350, 160, 150);
    }

    dibujarHome()
    push();
    fill(0, 0, 0);
    text("Defensoría del Pueblo", 180, 420);
    text("0313147300", 180, 450);
    text("Fiscalía General de la Nación", 180, 590);
    text("0315702000", 180, 620);
    text("Ministerio de Defensa", 180, 764);
    text("0313150111", 180, 794);
    text("Unidad Nacional de Protección", 180, 940);
    text("0314269800", 180, 970);
    text("Llamada de emergencia ", 180, 1110);
    text("*123", 180, 1140);
    pop();
}

function contactos() {
    background(220);

    fill(255, 242, 0);
    for (var i = 0; i < 720; i = i + 1) {
        rect(i * a, y, 300, 170);
    }
    push();
    fill(0, 0, 0);
    textSize(30);
    //rect(30, 130, 100, 20);
    stroke(0, 0, 0);
    strokeWeight(1);
    text("Recientes", 205, 157);
    image(recientesicono, 225, 47, 80, 80);
    text("Favoritos", 385, 157);
    image(favoritosicono, 400, 47, 80, 80);
    text("Contactos", 560, 157);
    image(caras, 584, 50, 80, 70);
    pop();
    image(barra, 0, 0, 720, 40);

    fill(255, 255, 255);
    for (var f = 1; f < 1280; f = f + 0.5) {
        rect(0, f * 320, d, 150);
    }


    fill(241, 191, 46);
    rect(0, 170, 1280, 140);

    push();
    fill(0, 0, 0);
    textSize(25);
    stroke(0, 0, 0);
    strokeWeight(1);
    text("Las personas más victimizadas por ", 178, 232);
    text("este delito han sido:", 178, 260);

    pop();



    fill(255, 255, 255);
    for (var f = 1; f < 1280; f = f + 0.5) {
        rect(0, f * 320, d, 150);
    }


    push();
    fill(255, 242, 0);
    for (var f = 1; f < 1280; f = f + 0.5) { // caras
        rect(0, f * 320, 160, 150);
    }
    pop();
    for (var f = 1; f < 1280; f = f + 0.5) { // caras
        image(caras, 20, f * 330, 120, 100);
    }


    dibujarHome()

    textSize(35);
    fill(0, 0, 0);
    text("Defensores de DDHH", 180, 410);
    text("Líderes sociales, comunitarios y ", 180, 553);
    text("ambientales", 182, 590);
    text("Líderes de procesos de restitución ", 180, 710);
    text("y reclamantes de tierras", 180, 745);
    text("Comunidades indígenas y", 180, 860);
    text("afrocolombianas", 180, 895);
    text("Sindicalistas, docentes y", 180, 1026);
    text("periodistas", 180, 1062);

    image(barra, 0, 0, 720, 40);
}










function registro(tempPosX, tempPosY, tempposdato, temposano) {

    this.x = tempPosX;
    this.y = tempPosY;

    this.ano = temposano;
    this.cifra = tempposdato;

    this.move = function() {
        this.y = this.y + 1;
    }

    this.display = function() {
        fill(255, 0, 0);
        textSize(25);
        text(this.ano, this.x, this.y);
        text(this.cifra, this.x + 200, this.y);
    }

}
