class Paper{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.body = Bodies.circle(x,y,30,options);
        this.image = loadImage("paper.png");

        World.add(world,this.body);

        this.radius = 30;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,(this.radius + 20)*2,(this.radius + 20)*2);
        pop();
    }
}