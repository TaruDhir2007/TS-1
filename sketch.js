const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var ground1 , ground2;
var polygon;
var slingshot;
function preload(){

}
function setup(){
    createCanvas(1000 , 600);
    engine = Engine.create();
    world =  engine.world ; 
    box1 = new Box(300, 400);
    box2 = new Box(300, 400);
    box3 = new Box(300, 400);
    box4 = new Box(300, 400);
    box5 = new Box(300, 400);
  
    box6 = new Box(400, 400);
    box7 = new Box(400, 400);
    box8 = new Box(400, 400);
    box9 = new Box(400, 400);
    box10 = new Box(400, 400);
    polygon = new Polygon();
    ground1 = new Ground(350, 400)
    
    slingshot = new SlingShot(polygon.body,{x:200, y:50});
   
}
function draw(){
    background(255);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    slingshot.display();
    polygon.display();
    ground1.display();
}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
