const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles=[];
var p;
var ground;
function preload(){
    bg = loadImage("snow.jpeg")
}

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(400,height,800,10);
   
    }
    

    


function draw(){
    background(bg);
    Engine.update(engine);
    if(frameCount%5 ===0){
        p = new Particle(random(10,800),50,20);
        particles.push(p);
    }
    for(i=0;i<particles.length;i++){
        particles[i].display();
    }

    ground.display();
   

}