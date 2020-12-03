var rect1, rect2, rect3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	rect1 = new Dustbin(650,320,20,70);
	rect2 = new Dustbin(740,320,20,70);
	rect3 = new Dustbin(700,340,100,20);
	ground = new Ground(600,height,1200,20);
	paper = new Paper(100,320,50);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect1.display();
  rect2.display();
  rect3.display();
  ground.display();
  paper.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});
	}
}




