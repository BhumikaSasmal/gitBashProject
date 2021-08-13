//declaring all the variables
var mercury, venus, earth, mars, jupiter,saturn, uranus,neptune,sun;
var mercuryImg, venusImg, earthImg,marsImg,jupiterImg,saturnImg,uranusImg,neptuneImg,sunImg;
var angle=0;
var angleSpeed=0.2;

function setup() {
  createCanvas(1600,800);
  // creating the sprites and loading images
  sun = createSprite(400,400,50,50);
  sunImg= loadImage("images/sun.jpg");
  sun.setCollider("circle",85,60,140);
  sun.scale=0.3
//creating the mercury sprite
  mercury = createSprite(400,400,50,50);
  mercuryImg = loadImage("images/me.png");
  

  venus = createSprite(400,400,50,50);
  venusImg= loadImage("images/ve.png");

  earth = createSprite(400,400,50,50);
  earthImg = loadImage("images/e.png");

  mars = createSprite(400,400,50,50);
  marsImg= loadImage("images/m.png");

  jupiter = createSprite(400,400,50,50);
  jupiterImg= loadImage("images/jupiter.jpg");

  saturn = createSprite(400,400,50,50);
  saturnImg= loadImage("images/s.jpg");

  uranus = createSprite(400,400,50,50);
  uranusImg= loadImage("images/uranus.jpg");

  neptune = createSprite(400,400,50,50);
  neptuneImg= loadImage("images/neptune.jpg");

}

function draw() {
  //setting the background colour
  background(0,0,0); 
  
  angleMode(DEGREES);
  translate(width / 2, height / 2); 
  rotate(angle);

  image(sunImg,540,250);
  image(mercuryImg,550,425,20,15);
  image(venusImg,620,475,50,30);
  image(earthImg,700,525,40,40);
  image(marsImg,425,575,20,20);
  image(jupiterImg,925,300,150,150);
  image(saturnImg,925,75,150,150);
  image(uranusImg,700,25,50,50);
  image(neptuneImg,500,20,70,60);

  
 // increasing the size of the sun
 if( frameCount%1===0){
    sun.scale = sun.scale+0.01;
  }
  
  angle = angle + angleSpeed;
  //Destroying the planets by making the sun collide with them
  if (sun.collide(venus)){
    venus.destroy();
  }
  if (sun.collide(earth)){
    earth.destroy();
  }if (sun.collide(mars)){
    mars.destroy();
  }if (sun.collide(jupiter)){
    jupiter.destroy();
  }if (sun.collide(saturn)){
  saturn.destroy();
  }if (sun.collide(uranus)){
  uranus.destroy();
  }if (sun.collide(neptune)){
  neptune.destroy();
  }if (sun.collide(mercury)){
    mercury.destroy();
  }
    
}