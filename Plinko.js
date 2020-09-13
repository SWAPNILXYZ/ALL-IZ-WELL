class P{
   constructor(x,y,radius){
      var options = {
          'isStatic': true,
          'restitution': 0.5
      } 
      this.x = x;
      this.y = y;
      this.radius = 10;

      this.body = Bodies.circle(this.x,this.y,10,options);

      World.add(world, this.body);
   } 
   display(){
       fill("white")
       ellipseMode(RADIUS);
       ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}