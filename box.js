class Box{
    constructor(x, y){
var options = {
restitution : 0.8 , 
friction : 1.0 ,
density : 0.03
}
this.body = Bodies.rectangle(x, y, 30, 30, options) 
this.width = 30;
this.height = 30
World.add(world, this.body)}
display(){
    var pos = this.body.position;
    rectMode (CENTER)
    fill("yellow")
    strokeWeight(5);
    stroke("green")
    
    rect(pos.x, pos.y, this.width, this.height);

}
}
