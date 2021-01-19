
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground1;
var dustbin1,paper1;
var dustbin_img;

function preload()
{
  dustbin_img=loadImage("dustbingreen.png")

}


function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
  world = engine.world;
  
 

	//Create the Bodies Here.
 

  paper1=new Paper(150,390,70);
  
  ground1=new ground(600,392,1500,15);

  
}


function draw() {
  
  background("lightgrey");

  Engine.update(engine);
  
 image(dustbin_img,800,200,180,190);

  
  ground1.display();
  paper1.display();


}
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(paper1.body,paper1.body.position,{x:1000,y:-930});
  }
}


