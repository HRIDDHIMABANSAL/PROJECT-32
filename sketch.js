const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base1,base2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
var ball,slingShot;
var score = 0;

function preload(){
  
}

function setup(){
 var canvas = createCanvas(1400,600);

 engine = Engine.create();
 world = engine.world;
 Engine.run(engine);

 base1 = new Base(700,500,300,15);
 base2 = new Base(1140,300,250,15);
 
 block1 = new Block(700,468,40,50);
 block2 = new Block(740,468,40,50);
 block3 = new Block(780,468,40,50);
 block4 = new Block(660,468,40,50);
 block5 = new Block(620,468,40,50);
 block6 = new Block(580,468,40,50);
 block7 = new Block(820,468,40,50);

 block8 = new Block(620,418,40,50);
 block9 = new Block(660,418,40,50);
 block10 = new Block(700,418,40,50);
 block11 = new Block(740,418,40,50);
 block12 = new Block(780,418,40,50);
 
 block13 = new Block(660,368,40,50);
 block14 = new Block(700,368,40,50);
 block15 = new Block(740,368,40,50);
 
 block16 = new Block(700,318,40,50);


 block17 = new Block(1060,268,40,50);
 block18 = new Block(1100,268,40,50);
 block19 = new Block(1140,268,40,50);
 block20 = new Block(1180,268,40,50);
 block21 = new Block(1220,268,40,50);

 block22 = new Block(1100,218,40,50);
 block23 = new Block(1140,218,40,50);
 block24 = new Block(1180,218,40,50);

 block25 = new Block(1140,168,40,50);

 ball = new Ball(200,200,50,50);
 slingShot= new Slingshot(ball.body,{x:246,y:443});
}

function draw(){
  background(0); 
 //Engine.update(engine); 
  
 text("SCORE:"+score,750,40);

 block1.score();
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 block6.score();
 block7.score();
 block8.score();
 block9.score();
 block10.score();
 block11.score();
 block12.score();
 block13.score();
 block14.score();
 block15.score();
 block16.score();
 block17.score();
 block18.score();
 block19.score();
 block20.score();
 block21.score();
 block23.score();
 block24.score();
 block25.score();

 base1.display();
 base2.display();

 fill(64,224,208);
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 fill(255,153,204);
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 fill(74,255,73); 
 block13.display();
 block14.display();
 block15.display();
 fill(255,237,61);
 block16.display();

 fill(64,224,208);
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();
 fill(0,255,255);
 block22.display();
 block23.display();
 block24.display();
 fill(255,174,185);
 block25.display();
 
 ball.display();

 slingShot.display();
 
 /*console.log(mouseX);
 console.log(mouseY);*/
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly(); 
}   

function keyPressed(){
    if (keyCode === 32){
        slingShot.attach (ball.body);
    }
}



