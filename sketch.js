
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
  boyimg=loadImage("Pluckingmangoes/boy.png")
  stonesImg = loadImage("Pluckingmangoes/stone.png")
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
	//boy sprite
	boy=createSprite(90,620,1,1)
	boy.addImage(boyimg);
	boy.scale=0.1
	//Create the Bodies Here.
	ground=new Ground(400,700,800,40)
    tree=new Tree(700,500,200,400);
    m1=new Mango(705,400,20,20)
    m2=new Mango(788,400,20,20)
      m3=new Mango(735,400,20,20)
      m4=new Mango(705,425,20,20)
      m5=new Mango(630,400,20,20)
      m6=new Mango(755,425,20,20)
      m7=new Mango(752,450,20,20)
      m8=new Mango(740,400,20,20)
      stones = createSprite(46,550,20,20)
stones.addImage(stonesImg)
stones.scale =0.08
 stone = Bodies.rectangle(46,550,20,20,{isStatic:true})
 World.add(world,stone)
 sling=new Slingshot({x:320,y:100},stone.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  textSize(35);
  stroke("white");
  fill("white");
  text("Press Space to play again",50,100);
  ground.display();
  slingshot.display();
  tree.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  rect(stone.position.x,stone.position.y,30,30)
  drawSprites();
 
}



