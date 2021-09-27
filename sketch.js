const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var rbutton;
var ubutton;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  
  rbutton = createImg("right.png");
  rbutton.position(220,30);
  rbutton.size(50,50);
  rbutton.mouseClicked(hForce);

  ubutton = createImg("up.png");
  ubutton.position(20,30);
  ubutton.size(50,50);
  ubutton.mouseClicked(vForce);

  var ball_options = {
    restitution: 0.95
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
}

function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.05,y:0});

}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0}, {x:0,y:-0.05});

}

