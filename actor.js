// actor code

// Variable actor
let posYActor = 370;
let posXActor = 100;
let collision = false;
let score = 0;

function showActor(){
  image(actorPicture, posXActor, posYActor, 25, 25);
}

function moveActor(){
  if(keyIsDown(UP_ARROW)){
    posYActor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(canMove()){
      posYActor += 3;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    posXActor -= 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    posXActor += 3;
  }
}

function verifyCollision(){
  for (let i = 0; i < carPictures.length; i++) {
    collision = collideRectCircle(posXCars[i], posYCars[i], widthCars,heightCars, posXActor, posYActor, 15);
    if (collision){
      audioCollision.play();
      hitted();
      if(scoreGreaterThanZero()){
      score--;
      }
    }
  }
}

function hitted(){
  posYActor = 370;
}

function showScore(){
  textSize(20);
  textAlign(CENTER);
  fill(255);
  text(score, 250, 25);
}

function getScore(){
  if(posYActor < 15){
    audioScore.play();
    score++;
    hitted();
  }
}

function scoreGreaterThanZero(){
  return score > 0;
}

function canMove(){
  return posYActor < 370;
}
