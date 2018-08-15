function setup() {
  createCanvas(800, 800);
}



function draw() {
  background(227,219,198);
	
		// Cìrculos detrás//
	
	//Cìrculo café
	noStroke();
	fill (157,87,62);
	ellipse(184,302,265,265);
	
	
	//Cìrculo amarillo grande	
		stroke(0,0,0);
	strokeWeight(6);
	fill (180,136,71);
	ellipse(122,306,303,303);
	

//Superposición de círculos	
	noStroke();
	beginShape();
	fill(155,181,178);
	vertex(185,172);
	bezierVertex(185,172,300,220,264,350);
	bezierVertex(264,350,237,418,193,435);
	bezierVertex(193,435,141,436,106,412);
	bezierVertex(106,412,75,386,62,355);
	bezierVertex(62,355,47,327,55,277);
	bezierVertex(55,277,58,243,96,203);
	bezierVertex(96,203,140,160,185,172);
	endShape(CLOSE);

	
	//Cìrculos Derecha	
	stroke(0,0,0);
	fill (180,136,71)
	strokeWeight(2)
	ellipse(668,210,213,213);
	
	noStroke();
	fill (126,154,194)
	strokeWeight(2)
	ellipse(668,210,172,172);
	
	
	//Relleno entre líneas
	
	
		noStroke();
	beginShape();
	fill(0,0,0);
	vertex(35,500);
	vertex(72,560);
	vertex(137,531);
	vertex(100,469);
	endShape(CLOSE);
		
	//Rectángulo magenta
	noStroke();
	fill(160,41,45,200)
	rect(0,341,62,191);
	
	
	
	//Relleno negro con curva
	noStroke();
	beginShape();
	fill(0,0,0);
	vertex(0,400);
	curveVertex(0,400,26,419);
	vertex(26,419);
	vertex(20,335);
	vertex(0,370);
	endShape(CLOSE);
	noStroke();
	beginShape();
	fill(0,0,0);
	vertex(0,340);
	vertex(0,400);
	vertex(24,421);
	vertex(61,400);
	vertex(20,338);
	vertex(0,347);
	endShape(CLOSE);
	
	noStroke();
	beginShape();
	fill(148,161,133);
	vertex(79,304);
	vertex(116,371);
	vertex(189,336);
	vertex(145,274);
	endShape(CLOSE);
	
		noStroke();
	beginShape();
	fill(53,56,63);
	vertex(145,270);
	vertex(221,233);
	vertex(278,291);
	vertex(192,335);
	endShape(CLOSE);
	
		noStroke();
	beginShape();
	fill(104,101,70);
	vertex(114,370);
	vertex(192,330);
	vertex(238,400);
	vertex(150,445);
	endShape(CLOSE);
	
		noStroke();
	beginShape();
	fill(152,142,151,200);
	vertex(238,400);
	vertex(329,349);
	vertex(380,400);
	vertex(277,452);
	endShape(CLOSE);
	
		noStroke();
	beginShape();
	fill(152,142,151,200);
	vertex(0,430);
	vertex(0,526);
	vertex(37,502);
	endShape(CLOSE);
	
	stroke(0,0,0);
	strokeWeight(4);
	beginShape();
	fill(152,142,151);
	vertex(480,97);
	vertex(567,53);
	vertex(610,120);
	vertex(528,163);
	endShape(CLOSE);
	
	
		noStroke();
	beginShape();
	fill(0,0,0);
	vertex(10,593);
	vertex(72,560);
	vertex(110,635);
	vertex(61,677);
	endShape(CLOSE);
	
	
		noStroke();
	beginShape();
	fill(0,0,0);
	vertex(578,295);
	vertex(675,248);
	vertex(719,300);
	vertex(614,361);
	endShape(CLOSE);
	
	
		noStroke();
	beginShape();
	fill(152,142,151);
	vertex(60,670);
	vertex(96,730);
	vertex(145,700);
	vertex(110,632);
	endShape(CLOSE);
	
	
	
		noStroke();
	beginShape();
	fill(167,107,70);
	vertex(218,565);
	vertex(800,263);
	vertex(800,285);
	vertex(254,636);
	endShape(CLOSE);
	
	
		noStroke();
	beginShape();
	fill(152,142,151);
	vertex(37,760);
	vertex(99,730);
	vertex(135,800);
	vertex(84,831);
	endShape(CLOSE);
	
	
		noStroke();
	beginShape();
	fill(167,107,70);
	vertex(253,726);
	vertex(289,700);
	vertex(347,800);
	vertex(300,800);
	endShape(CLOSE);

	
		noStroke();
	beginShape();
	fill(0,0,0);
	vertex(500,557);
	vertex(612,480);
	vertex(673,590);
	vertex(573,653);
	endShape(CLOSE)
	
	
		noStroke();
	beginShape();
	fill(0,0,0);
	vertex(594,688);
	vertex(694,621);
	vertex(742,692);
	vertex(640,764);
	endShape(CLOSE)
	
	
	stroke(0,0,0);
	strokeWeight(1);
	line(0,713,33,767);
	line(0,723,28,770);
	line(0,733,23,774);
	line(0,743,18,777);
	line(0,753,15,780);
	line(0,763,10,782);
	line(0,773,3,783);
	
	
	stroke(0,0,0);
	strokeWeight(1);
	line(132,780,145,800);
	line(138,778,152,800);
	line(144,776,158,800);
	line(150,773,165,800);
	line(156,768,173,800);
	line(162,765,180,800);
	line(168,762,188,800);
	
	
	// Lineas horizontales en orden de arriba a abajo//
	stroke(0,0,0);
	strokeWeight(4);
	line(667,0,0,346);
	
	stroke(0,0,0);
	strokeWeight(4);
	line(799,26,0,430);
	
	
	stroke(0,0,0);
	strokeWeight(4);
	line(800,100,0,523);
	
	
	//Color Sobrepuesto de círculos de la derecha
		
	fill (180,136,71,100);
	noStroke(0,0,0);
	angleMode(DEGREES); 
	arc(668,210,213,213,50, 510);
	
	fill(126,154,194,200)
	noStroke()
	angleMode(DEGREES); 
	arc(668,210,172,172, 50, 510);
	
	noFill()
	stroke(0,0,0);
	strokeWeight(4);
	beginShape();
	vertex(715,305);
	vertex(674,247);
	vertex(12,593);
	endShape()
	
	
	
	noFill()
	stroke(0,0,0);
	strokeWeight(4);
	beginShape();
	vertex(800,261);
	vertex(219,564);
	vertex(172,589);
	vertex(6,709);
	endShape()
	
	
	stroke(0,0,0);
	strokeWeight(4);
	line(800,285,216,663);
	
	//Círculos inferiores
	
	noStroke();
	fill(162,64,55,150);
	ellipse(690,480,210,210);
	
	
		noStroke();
	fill(166,136,164,150);
	ellipse(688,476,185,185);
	
//	
	stroke(0,0,0);
	strokeWeight(4);
	line(145,700,0,787);
	
	
	noFill()
	stroke(0,0,0);
	strokeWeight(4);
	beginShape();
	vertex(669,588);
	vertex(610,481);
	vertex(254,723);
	endShape()
	
		stroke(0,0,0);
	strokeWeight(4);
	line(174,757,99,800);
	
	//Líneas verticales en orden de izquierda a derecha
	
		stroke(0,0,0);
	strokeWeight(4);
	line(0,700,60,800);
	
			stroke(0,0,0);
	strokeWeight(4);
	line(0,575,138,800);
	
	stroke(0,0,0);
	strokeWeight(4);
	line(0,430,200,800);
	
	stroke(0,0,0);
	strokeWeight(4);
	line(18,337,300,800);
	
		stroke(0,0,0);
	strokeWeight(4);
	line(77,305,344,800);
	
		stroke(0,0,0);
	strokeWeight(4);
	line(145,270,277,451);
	
		stroke(0,0,0);
	strokeWeight(4);
	line(220,233,380,400);
	
		stroke(0,0,0);
	strokeWeight(30);
	line(800,667,625,800);
	
	
	
	
	
	
	
}