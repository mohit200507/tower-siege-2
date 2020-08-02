const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4 ,box5, box6 , box7;
var platform;
var rock, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(300,300,500,10);
box1 = new Box(330,235,30,40);
box2 = new Box(360,235,30,40);
box3 = new Box(390,235,30,40);
box4 = new Box(420,235,30,40);
box5 = new Box(450,235,30,40);

box6 = new Box(360,195,30,40);
box7 = new Box(390,235,30,40);
box8 = new Box(420,235,30,40);

box9 = new Box(390,155,30,40);

    
    rock = new Block(100,50,20,20);

    slingshot = new Sling(rock.body,{x:200, y:50});
}

function draw(){
    background(0,255,0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();
    

    box5.display();
    box6.display();
    box7.display();

    rock.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
     slingshot.attach(Box.body);   
    }
}
