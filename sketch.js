//Game States
var PLAY=1;
var END=0;
var gameState=1;

var knife,bomb,fruitGroup,monstorGroup,knifesound,bombsound
var knifeImage,appleimage,bananaimage,guavaimage,orangeimage,berryimage,melonimage,bombimage;


function preload(){
  
  knifeImage = loadImage("knife.png");
  appleimage=loadImage("apple.jpg")
  bananaimage=loadImage("banana2.jpg")
  guavaimage=loadImage("guava.jpg")
  orangeimage=loadImage("orange.jpg")
  berryimage=loadImage("strawberry.jpg")
  melonimage=loadImage("watermelon.jpg")
  
  bombimage=loadImage("bomb.jpg")
  knifesound=loadSound("Knife.mp3")
  bombsound=loadSound("bomb.wav")
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  score=0;
  
  
  fruitGroup=new Group();
  monstorGroup=new Group();
  //create fruit and monster Group variable here
}

function draw() {
  background("white");
  
  
  if(gameState===PLAY){
    
   
    
    // Move knife with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
  
    // Increase score if knife touching fruit
   
    // Go to end state if knife touching enemy
      
  }
  
  fruits();
  monstors();
  if(fruitGroup.isTouching(knife)){
    fruitGroup.destroyEach();
    knifesound.play();
    score+=20
  }
  if(monstorGroup.isTouching(knife)){
    monstorGroup.destroyEach();
    bombsound.play()
    score-=30
    
  }
  
  
  drawSprites();
  
  //Display score
  textSize(25);
  fill("black");
  text("Score : "+ score,250,50);
  
}
function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(width+20,400,20,20)
    fruit.scale=0.2;
    fruit.velocityX= -(score/4+6);
    
    rand=round(random(1,6))
    if(rand==1){
      fruit.addImage(appleimage)
    }
    else if(rand==2){
      fruit.addImage(bananaimage)
    }
    else if(rand==3){
    
      fruit.addImage(melonimage)
      fruit.scale=0.5
      
    }
    else if(rand==4){
      fruit.addImage(orangeimage)
    }
    else if(rand==5){
      fruit.addImage(guavaimage)
    }
    else {
      fruit.addImage(berryimage)
    }
    fruit.y=round(random(height-500,height-20))
    fruit.velocityX=-7
    fruit.setLifetime=100
    fruitGroup.add(fruit)
      
    }}
  function monstors(){
    if(frameCount%180==0){
      monstor=createSprite(width+20,150,20,20)
     
          monstor.addImage(bombimage)
          monstor.scale=0.4
        monstor.velocityX= -(score/10+8);
      
      monstor.y=round(random(height-500,height-20))
      monstor.velocityX=-7;
      monstorGroup.add(monstor)
      
}

    
  
}

