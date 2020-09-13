const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var turn = 0;
var particle;
var gameState = "start";

function preload(){

}

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
    world = engine.world;

ground = new G(width/2,  height,width, 20);
for (var k = 0; k <= width; k = k + 80){
  divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
}
for (var j = 75; j <= width; j = j + 50){
  plinkos.push(new P(j, 75));
}
for (var j = 50; j <= width - 10; j = j + 50){
  plinkos.push(new P(j, 175));
}
for (var j = 75; j <= width; j = j + 50){
  plinkos.push(new P(j, 275));
}
for (var j = 50; j <= width - 10; j = j + 50){
  plinkos.push(new P(j, 375));
}

}

var divisionHeight = 300;
var plinkos = [];
var particles = [];
var divisions = [];

function draw() {
  background(0); 
  Engine.update(engine);
  noStroke();
  
  textSize(20);
  fill("white");
  text("Score: "+score, 650, 20);
  
for (var i = 0; i<plinkos.length; i++){
  plinkos[i].display();
}
  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  ground.display();
 
  
  if (particle!=null){
    particle.display();

    if (particle.body.position.y > 760){

      if (particle.body.position.x < 300){
        score = score + 500;
        turn++; 
        particle = null;
       
      }
    }
  }
  if (particle!=null){
    particle.display();

    if (particle.body.position.y > 760){

      if (particle.body.position.x > 301 && particle.body.position.x < 600){
        score = score + 100;
        turn++; 
        particle = null;
       
      }
    }
  }
  if (particle!=null){
    particle.display();

    if (particle.body.position.y > 760){

      if (particle.body.position.x > 601 && particle.body.position.x < 900){
        score = score + 200;
        turn++; 
        particle = null;
        
      }
    }
  }
  if (gameState !== "end"){
    text("place your mouse pointer to position the particle. Click space to make it fall", 50, 450);
  }
  if (turn >= 5){
    gameState = "end";

    if (gameState === "end"){
      noStroke();
      textSize(50);
      fill("white");
      text("GameOver", 300, 450);
    }
  }
  textSize(25);
  text("500", 20, 600);
  text("500", 100, 600);
  text("500", 180, 600);
  text("500", 260, 600);
  text("100", 340, 600);
  text("100", 420, 600);
  text("200", 500, 600);
  text("200", 580, 600);
  text("200", 660, 600);
  text("200", 740, 600);
  drawSprites();
}

function keyPressed(){
  if (keyCode === 32 && gameState !== "end"){

  
    particle = new Particles(mouseX, 10, 10, 10);
  }
}