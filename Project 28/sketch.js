
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;
var mPos , sPos;
var bgImg1,backgroundimg;
var score = 0;
console.log(score);

function preload(){
	boy=loadImage("images/boy.png");
 getBg();
  
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1060,190,30);
	mango2=new mango(970,275,30);
	mango3=new mango(900,210,30);
	mango4=new mango(1145,240,30);
	mango5=new mango(1000,105,30);
	mango6=new mango(1100,70,30);
	mango7=new mango(1210,170,30);

	treeObj=new tree(1050,610);
	groundObject=new ground(width/2,600,width,20);

	stoneObj=new Stone(235,420,30,40);
	launcherObject=new Launcher(stoneObj.body,{x: 240, y: 450});

	
	
	Engine.run(engine);

}

function draw() {

 
  Engine.update(engine);

  if(bgImg1){
  background(bgImg1);
  }else{
    background(255);
  }
  //Add code for displaying text here!
  image(boy ,200,367,200,300);
  push();
  fill(110, 61, 16);
  strokeWeight(3);
  stroke(255);
  textSize(30);
  text("score : " + score,50,50);
  pop();
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  groundObject.display();

  stoneObj.display();

  launcherObject.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);

 

  

 drawSprites();
}



function mouseDragged(){

	Matter.Body.setPosition(stoneObj.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){

	launcherObject.fly();
}

function keyPressed(){
	if(keyCode===32){

		Matter.Body.setPosition(stoneObj.body,{x: 235, y: 420});
		launcherObject.attach(stoneObj.body);
		
	}
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if (distance<lmango.r+lstone.r){

	Matter.Body.setStatic(lmango.body,false);
  score=score+1;
  }
}

async function getBg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hours = datetime.slice(11,13);

  if(hours>=06 && hours<=18){

    bgImg1 =loadImage("images/bg.png");

  }
  else{
    bgImg1=loadImage("images/bg2.jpg");
  }

 
    
}
