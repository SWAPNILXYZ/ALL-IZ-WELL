const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var turn = 0;
var particle;
var gameState = "start";

var divisionHeight = 300;
var plinkos = [];
var particles = [];
var divisions = [];

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



function draw() {
  background(0); 
  
  noStroke();
  
  textSize(20);
  fill("white");
  text("Score: "+score, 650, 20);
  
  textSize(25);
  text("500", 20, 600);
  text("500", 100, 600);
  text("500", 180, 600);
  text("500", 260, 600);
  text("100", 340, 600);
  text("100", 420, 600);
  text("100", 500, 600);
  text("200", 580, 600);
  text("200", 660, 600);
  text("200", 740, 600);
  Engine.update(engine);
  ground.display();

  if (gameState === "end"){
    noStroke();
    textSize(50);
    fill("white");
    text("GameOver", 300, 450);
  }

for (var i = 0; i < plinkos.length; i++){
  plinkos[i].display();
}
    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( turn>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( turn>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( turn>= 5)  gameState ="end";

              }      
              
        }
  
      }
  //if (gameState !== "end"){
  //  text("place your mouse pointer to position the particle. Click space to make it fall", 50, 450);
  //}
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  drawSprites();
}
function mouseClicked(){
  if (gameState !== "end"){

  turn++;
    particle = new Particles(mouseX, 10, 10, 10);
  }
}

