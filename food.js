class Food{
    constructor(){
       foodStock, lastFed;
        this.image = loadImage("images/m.png");
    }
    getFoodStock(){
     var foodRef = database.ref('food');
      foodRef.on("value", function (data){
          foodStock = data.val();
      })
    }
    updateFoodStock(stock){
      database.ref('/').update({
        foodStock: stock
      })
    }
    deductFood(foodStock){
        if (foodStock <= 0){
            foodStock = 0;
          }
          else{
            foodStock = foodStock - 1;
          }
          database.ref('/').update({
            foodStock: foodStock
          })
    }
    display(){
        var x = 80, y = 100;

        imageMode(CENTER);
        image(this.image, 720, 220, 70, 70);

     if (this.foodStock != 0){
         for(var i = 0; i < this.foodStock; i++){
             if (i % 10 == 0){
               x = 80;
               y = y + 50;
             }
         }
         image(this.image, x, y, 50, 50);
         x = x + 30;
     }
    }
};