var canvas;
var music;
var box1,box2,box3,box4;
var movingBox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
    box1=createSprite(75,550,150,30);
    box2=createSprite(225,550,150,30);
    box3=createSprite(375,550,150,30);
    box4=createSprite(525,550,150,30);

    box1.shapeColor="red";
    box2.shapeColor="green";
    box3.shapeColor="purple";
    box4.shapeColor="blue";
    //create box sprite and give velocity
    movingBox=createSprite(random(30,550),50,50,30);
    movingBox.shapeColor="black";
    movingBox.velocityY=5;
    //movingBox.debug=true;
}

function draw() {
    background(255);
    //create edgeSprite
    createEdgeSprites();
    
    
    

    //add condition to check if box touching surface and make it box
    if(isTouching(movingBox,box1)) {
        box1.shapeColor= movingBox.shapeColor;
      }
      else{
        box1.shapeColor= "red";
      }

    if(isTouching(movingBox,box2)) {
        box2.shapeColor= movingBox.shapeColor;
      }
      else{
        box2.shapeColor= "green";
      }

      if(isTouching(movingBox,box3)) {
        box3.shapeColor= movingBox.shapeColor;
        music.play();
      }
      else{
        box3.shapeColor= "purple";
      }

      if(isTouching(movingBox,box4)) {
        box4.shapeColor= movingBox.shapeColor;
      }
      else{
        box4.shapeColor= "blue";
      }
     // music.play();
    bounceOff(movingBox,box1);
    bounceOff(movingBox,box2);
    bounceOff(movingBox,box3);
    bounceOff(movingBox,box4);

    drawSprites();
      
    
}
