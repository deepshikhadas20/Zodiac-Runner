var gameState = 0; 
var ground, waterWaves; 
var player; 
var zodiac = null, name = "";
var form; 
var fireChar, waterChar, airChar, earthChar; 
var obstacle,obstacleGroup, obstacle1, obstacle2;
var startBgImage, backgroundImage; 
var yPosition;

function preload(){
// waterWaves = loadImage("Ocean.png");
//  carImg2 = loadImage("images/car2.png");
//  carImg3 = loadImage("images/car3.png");
//  carImg4 = loadImage("images/car4.png");

//  trackImage = loadImage("images/track.jpg"); 
startBgImage = loadImage("Bg.jpg"); 
fireChar = loadImage("fire.png"); 
waterChar = loadImage("water.png"); 
airChar = loadImage("air.png"); 
earthChar = loadImage("earth.png");

}

function setup(){
  createCanvas(1000,400);
  ground = createSprite(500,380,1000,40); 
  form = new Form(); 
  ground.visible = false;

  // imageMode(CENTER);
  // image(waterWaves,500,380,1000,40);

  player = createSprite(80,200,40,40); 
  player.shapeColor = "red";
  obstacleGroup = new Group(); 
  player.debug = true; 
}
                                                    

function draw(){
  if(backgroundImage){
    background(backgroundImage);
  }
  else{
    background(startBgImage);
  }
  console.log(player.y);

  if(gameState === 0){
    form.display(); 
  }
  if(gameState === 1){
    form.hide(); 

    if(keyDown(UP_ARROW) && player.y >= yPosition){
      player.velocityY = -10; 
    }
    player.velocityY = player.velocityY + 0.8; 

    if(player.isTouching(obstacleGroup)){
      gameState = 2; 
    }

    player.collide(ground);
    spawnObstacles(); 
  }

  if(gameState=== 2){
    fill("black");
    textSize(30);
    text("Game-Over!", 450,180); 
    obstacleGroup.setVelocityXEach(0);  
    obstacleGroup.setLifetimeEach(-1); 
    player.velocityY = 0; 
  }
  
  drawSprites();
}

function spawnObstacles(){
  if(frameCount%150===0){
    obstacle = createSprite(1000,320,50,50);
    obstacle.velocityX = -3; 
    obstacle.lifetime = 500; 

    var rand = Math.round(random(1,2));

    switch(rand){
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      default: break;
    }
    obstacleGroup.add(obstacle);  
  }
  
}