var i_jungle
 var ground;
 var i_monkey
 var invi_ground;
 var i_banana;
var score=0;

function preload(){
i_jungle = loadImage("jungle.jpg");
i_monkey = loadImage("ali.png");
i_crocodile = loadImage("crocodile.png");
i_snake = loadImage("snake.png");
i_banana = loadImage("banana.png");
}

function setup() {
  createCanvas(1200,600);
 ground = createSprite(600,550,1200,100);
 ground.shapeColor ='limegreen';
 monkey = createSprite(100,500);
 monkey.addImage('**%#',i_monkey);
 monkey.scale = 0.4
 invi_ground = createSprite(125,550,100,20);
 invi_ground.visible = false;

 snakeGroup=new Group();
 crocodileGroup=new Group();
 bananaGroup=new Group();
}

function draw() {
  background(i_jungle);

  // to make the monkey jump
  if ( keyDown("space")){
    monkey.velocityY = -10;
  }
  //to add gravity
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(invi_ground) 

  var rand = Math.round(random(1,3))
  switch(rand){
    case 1:MovingSnake();break;
    case 2:MovingBanana();break;
    case 3:MovingCrocodile();break;
  }
  if(bananaGroup.isTouching(monkey)){
    score=score+4
    bananaGroup.destroyEach();
  }
  

  drawSprites();

  textSize(40)
  text('score:'+score,600,100)
}

function MovingSnake(){
  if (frameCount%130===0){
  var snake = createSprite(1200,500,10,10)
  snake.addImage("snake",i_snake)
  snake.velocityX=-3
  snakeGroup.add(snake)
  snake.scale=0.1
  }
}

function MovingCrocodile(){
  if (frameCount%130===0){
    var crocodile = createSprite(1200,500,10,10)
    crocodile.addImage("crocodile",i_crocodile)
    crocodile.velocityX=-3
    crocodileGroup.add(crocodile)
    crocodile.scale=0.1
  }
}

function MovingBanana(){
  if (frameCount%130===0){
    var banana = createSprite(1200,500,10,10)
    banana.addImage("banana",i_banana)
    banana.velocityX=-3
    bananaGroup.add(banana)
    banana.scale=0.1
  }
}