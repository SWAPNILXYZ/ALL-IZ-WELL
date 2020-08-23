class Mango{
    constructor(x,y,width,height){
        var gr = {
            'isStatic':true,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height,gr);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

       this.image = loadImage("Plucking mangoes/mango.png")
      World.add(world,this.body);
    }
    display(){
        var posi = this.body.position;
        imageMode(CENTER);
       // fill("purple");
       image(this.image,posi.x,posi.y,this.width,this.height);
      
        
    }
};