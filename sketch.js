

var ground,groundImg;
var player, playerAnim;
var ghost, ghostAnim;

function preload(){
	playerAnim = loadAnimation("Run (2).png","Run (3).png","Run (4).png","Run (5).png","Run (6).png","Run (7).png");
	ghostAnim =  loadAnimation("vampireW/vampireW (1).png","vampireW/vampireW (2).png","vampireW/vampireW (3).png","vampireW/vampireW (4).png","vampireW/vampireW (5).png","vampireW/vampireW (6).png","vampireW/vampireW (7).png","vampireW/vampireW (8).png");
	groundImg =	 loadImage("background1.jpg");
}
function setup(){		
	
	 createCanvas(1600,1300);
	
	ground = createSprite(displayWidth/2,displayHeight/2.2,1600,310);
	ground.addImage("Forest",groundImg);
	ground.scale = 2.8;
	ground.velocityX = -10;
	
	player = createSprite(480,1100);
	player.addAnimation("Run",playerAnim);

	ghost = createSprite(200,1100);
	ghost.addAnimation("Chase",ghostAnim);
	ghost.scale = 0.8;
	
}

function draw(){
   
   background(0);
    
	if(ground.x < 400){
		ground.x = displayWidth/2;
	}
	drawSprites();
	
    
}