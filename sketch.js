
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint= Matter.Constraint;

var ground,ball1,ball2,ball3,ball4,ball5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(410,300,250,20)
    ball1 = new ball(315,450,40)
	ball2  =new ball(360,450,40)
	ball3 = new ball (405,450,40)
	ball4 = new ball(450,450,40)
	ball5 = new ball(495,450,40)
	 constraint1 = new constraint123(ground.body,ball1.body)


	} 


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.run(engine);
  ground.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 constraint1.display();
}



