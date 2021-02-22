
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stones,groundObject, launcherObject,launcher;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,120,30);
	mango3=new mango(1200,140,30);
	mango4=new mango(950,160,30);
	mango5=new mango(1000,170,30);
	mango6=new mango(1075,185,30);
	mango7=new mango(975,80,30);
	mango8=new mango(1150,200,30);
	mango9=new mango(1020,110,30);
	mango10=new mango(950,230,30);
	mango11=new mango(1200,230,30)
	mango12=new mango(1025,230,30);
	mango13=new mango(900,190,30)

	stones=new Stone(170,20,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);
	launcher=new Throw(stones.body,{x:235,y:420})
}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  stones.display();
  groundObject.display();

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);
  detectCollision(stones,mango11);
  detectCollision(stones,mango12);
  detectCollision(stones,mango13);
}

function mouseReleased(){
	launcher.fly();
}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY})
}

function detectCollision(lmango,lstone){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}