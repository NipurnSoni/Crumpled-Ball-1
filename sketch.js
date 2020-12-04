
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = new Ball(200,300,50,50);
	ground = new Ground(width/2,450,1350,20);
	
    dustbin = new Dustbin(1150,450);
	
	
	
	
	
	Engine.run(engine);
  


}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  ground.display();
  dustbin.display();

  drawSprites();
 
  

}

function keyPressed()	{
	if(keyCode===UP_ARROW)	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x:165,y:-165});

	}
}

