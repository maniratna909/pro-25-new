const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function preload() {
   
}

function setup(){
    var canvas = createCanvas(1700,900);
    engine = Engine.create();
    world = engine.world;

ground1= new Ground(800,700, 2000, 10)

paper1= new Paper(500,300,50)
    trash1= new Trash(1000,650, 10,100)
    trash2= new Trash(1050,690, 100,10)
    trash3= new Trash(1100,650, 10,100)
}
function draw(){
        background("grey");
    
       
    
    Engine.update(engine);
   
   
 ground1.display()
    paper1.display()
    trash1.display()
    trash2.display()
    trash3.display()
}
function keyPressed() {
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(paper1.body,paper1.body.position,{x:150,y:-135});

  
    }
}

    

