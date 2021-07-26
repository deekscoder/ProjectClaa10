var seaImage,ship;
var ship_moving;
var sea

function preload(){
seaImage = loadImage("sea.png");
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png");
//SpriteName.addImage(seaImg);
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200)
  sea.addImage(seaImage);
  sea.scale=0.3
  ship=createSprite(100,200,30,30);
  ship.addAnimation("moving",ship_moving);
  ship.scale=0.25
}

function draw() {
  background("blue");
sea.velocityX = -2
 if (sea.x < 0){
   sea.x = sea.width/2
 }
 drawSprites();
}