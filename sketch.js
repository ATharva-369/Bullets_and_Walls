var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
 bullet=createSprite(50,200,30,15);
  bullet.velocityX=speed;
  bullet,shapeColor="white";
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80)
 
}

function draw() {
  background("black");  
  //bullet.collide(wall);
  if((bullet.x+bullet.width)>=wall.x){
    bullet.velocityX=0;
    bullet.x=wall.x-((thickness/2)+(thickness/4))
    // bullet.x=50
    var damage=(0.5*weight*speed* speed)/(thickness*thickness*thickness);
    if(damage<=10){
      bullet.shapeColor="green";
    }
    else if(damage>10){
      bullet.shapeColor="red";
    }
   
    console.log(damage)
  }
  
  drawSprites();
}
