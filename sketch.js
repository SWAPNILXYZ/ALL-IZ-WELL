
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
function preload()
{
  boyImage = loadImage("Plucking mangoes/boy.png");
}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;

  boy = createSprite(150,500,50,60);
  boy.addImage("boy",boyImage);
  boy.scale = 0.07;
	
  
  
  
  ground = new G(400,550,width,10);
 
  tree1 = new Tree(600,300,500,500);


  stone = new Stone(150,500,25,25);
  chain = new Slingshot(stone.body,{x:120, y:460});

  m1 = new Mango(600,200,40,40);
  m2 = new Mango(370,250,40,40);
  m3 = new Mango(700,200,40,40);
  m4 = new Mango(500,300,40,40);
  m5 = new Mango(500,200,40,40);
  m6 = new Mango(700,250,40,40);
  m7 = new Mango(500,100,40,40);
  m8 = new Mango(700,100,40,40);
  
	Engine.run(engine);
  
}
 
function draw() {
  rectMode(CENTER);
  background(225);
 
  ground.display();

  stone.display();
  chain.display();

 
  tree1.display();
  
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();

  Collision(stone,m1);
  Collision(stone,m2);
  Collision(stone,m3);
  Collision(stone,m4);
  Collision(stone,m5);
  Collision(stone,m6);
  Collision(stone,m7);
  Collision(stone,m8);
  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
  chain.fly();
}
function Collision(stones,m2){

  mangoPosition = m2.body.position;
  stonePosition = stones.body.position;

  var distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y);

  if (distance <= m2.r + stones.r){
     Matter.Body.setStatic = (m2.body,false);
  }
}
function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:120, y:460});
     chain.attach(stone.body);
  }
}
