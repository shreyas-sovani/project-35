



  var balloon;
  var database;
  var position;




function preload(){

        bgImg=loadImage("bg.png");
        balloonImg=loadImage("balloon.png");
  
  }

function setup() {
  createCanvas(800,700);


        
      database=firebase.database();

      balloon=createSprite(100,500,10,10);
      balloon.addImage(balloonImg);
      balloon.scale=0.5;

      var balloonPosition=database.ref("balloon/position");
      balloonPosition.on("value",readPosition);





}


function draw() {
  background(bgImg);  


      if(position !== undefined){

      if(keyDown(LEFT_ARROW)){

        writePosition(-5,0);
      }

      else if(keyDown(RIGHT_ARROW)){

        writePosition(5,0);
      }

      else if(keyDown(UP_ARROW)){

        writePosition(0,-5);
      }

      else if(keyDown(DOWN_ARROW)){

        writePosition(0,+5);
      }
    }






  drawSprites();
  textSize(25)
  text("*Use Arrows To Control The Balloon*",200,100);
  
}


function readPosition(data){

      position=data.val();
      balloon.x=position.x;
      balloon.y=position.y;

}

function writePosition(x,y){
      
      database.ref("balloon/position").set({
            
      "x":   position.x + x  ,
      "y":  position.y + y

      })

}




