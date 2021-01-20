class Rainfall{
    constructor(x,y,radius){
        var options={
            isStatic : false,
            restitution : 0.3,
            friction : 1.0,
            density : 1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;

        World.add(world,this.body);
    }
    display(){
        var posX = this.body.position.x;
        var posY = this.body.position.y;

        push();
        translate(posX,posY);
        fill("blue");
        circle(0,0,this.radius);

        if (this.body.position.y > height){
            Matter.Body.setPosition(this.body , {x:random(0,400) , y:random(0,200)})
        }

        pop();
    }
}