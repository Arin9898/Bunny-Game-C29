const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground,rope,fruit;
var fruit_con;

function preload(){
}

function setup() {
  createCanvas(600,700);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(300,690,600,20)
  rope = new Rope(8,{x:300,y:10});
  fruit = Bodies.circle(300,300,30);
  Matter.Composite.add(rope.body,fruit);
  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() {
  background(51);
  
  Engine.update(engine);
  ground.show();
  rope.show();
  ellipse(fruit.position.x,fruit.position.y,30,30)
}

