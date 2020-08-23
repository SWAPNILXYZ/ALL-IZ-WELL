class G {
    constructor(x, y, width, height) {
        var gr = {
            isStatic: true
        };
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, gr);


        World.add(world, this.body);
    }
    display() {
        var posi = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(posi.x, posi.y, this.width, this.height);

    }
};
