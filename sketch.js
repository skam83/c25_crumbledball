
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground,color,color1;
var d1,d2,d3;
var papball;
var binimage
function preload()
{
	 binimage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1400, 700);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	color="brown";
	//Create the Bodies Here.
	ground=new Dustbin(700,680,1400,20,color);
	
	color="green";
	d1= new Dustbin(1100,630,15,80,color);

	d2= new Dustbin(1300,630,15,80,color);

	d3= new Dustbin(1200,663,200,15,color);

	papball= new Paper(150,100,20);
	//Engine.run(engine);
	var render = Render.create({
		element: document.body,
		engine: myEngine,
		options: {
		  width: 1400,
		  height: 700,
		  wireframes: false
		}
	  });
	  Render.run(render);
  
}


function draw() {
 
  background("lightblue");
  Engine.update(myEngine);

  ground.display();

  papball.display();
  d1.display();
  d2.display();
  d3.display();
  image (binimage,1080,535,240,140);
 
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(papball.body,papball.body.position,{x:85,y:-60});
	}
}

