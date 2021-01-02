var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor=(80,80,80)
}

function draw() {
  background(0,0,0);  
  car.velocityX=speed;
  if(car.x-wall.x < wall.width/2+ car.width/2){
  }
  if(wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22500;
if(deformation>180){
car.shapeColor=color(0,355,0);
stroke("white");
textSize(40);
fill("white");
text("Lethal",800,200)
}
if(deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0);
  stroke("white");
textSize(40);
fill("white");
text("Average",800,200)
}
if(deformation<100){
car.shapeColor=color(255,0,0);
stroke("white");
textSize(40);
fill("white");
text("Good",800,200)
} 
}
  drawSprites();
}