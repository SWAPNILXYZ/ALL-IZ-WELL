//Create variables here
var dog, happyDog, foodS, foodStock, database;
var feedDog, addFoods, fedTime, lastFed;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  dogImage1 = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();

	createCanvas(500, 500);
  dog = createSprite(400,400,50,60);
  dog.addImage("dog",dogImage);
  dog.scale = 0.20;

  foodObj = new Food();
  
  feed = createButton("Feed the dog");
  feed.position(700, 95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add the food stock");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods);

}


function draw() {  
  background(46, 139, 87);

  foodObj.display();
  
  fill(255, 255, 254);
  textSize(15);
  if (lastFed >= 12){
    text("Last fed: "+ lastFed % 12 + "PM", 150, 30);
  } else if(lastFed === 0){
    text("Last fed: 12 AM", 150, 30);
  }else{
    text("Last fed: "+ lastFed + "AM", 150, 30);
  }
 
  fedTime = database.ref('FeedTime');
  fedTime.on("value", (data) => {
    lastFed = data.val();
  })
  drawSprites();
}
 function feedDog(){
  dog.addImage("dog", dogImage1);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    foodS: foodObj.getFoodStock(),
    FeedTime: hour()
  })
}
function addFoods(){
  foodS++
  database.ref('/').update({
    Food: foodS
  })

}