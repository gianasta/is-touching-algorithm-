var fixedRect, movingRect;
var obj1 , obj2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(100, 100, 50, 90);
  obj2=createSprite(200,100,20,90); 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect , obj2)){
    movingRect.shapeColor = "red"; 
    obj2.shapeColor = "red";

  } 
  else{
    movingRect.shapeColor = "green";
    obj2.shapeColor = "green";  
    
  }

  drawSprites();
  }
