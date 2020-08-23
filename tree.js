class Tree{
    constructor(x,y,width,height){
        var gr = {
            'isStatic':true,
            'friction':0.4,
            'density':1
        }
        this.body = Bodies.rectangle(x, y, width, height,gr);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

       this.image = loadImage("Plucking mangoes/tree.png");
      World.add(world,this.body);
    }
    display(){
        var posi = this.body.position;
       imageMode(CENTER);
       // fill("purple");
     image(this.image,posi.x,posi.y,this.width,this.height);
      
        
    }
};