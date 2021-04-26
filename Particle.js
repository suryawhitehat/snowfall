class Particle{
    constructor(x,y,radius){

        var options={
            restitution:0.2,
            density : 1
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image = loadImage("snowflake-removebg-preview.png")
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        //ellipseMode(RADIUS);
        push();
        imageMode(CENTER)
        //fill("orange")
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}