class Polygon{
    constructor(x, y, width, height){
        var options = {
            restitution : 0.1,
            stiffness : 0.4,
            density: 0.2
        }
        this.body = Bodies.rectangle(100, 200, 30, 30, options)
        this.image = loadImage("polygon.png")
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 35 ,35);
        pop();
    }
}