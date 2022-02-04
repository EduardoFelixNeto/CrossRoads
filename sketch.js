function setup() {
  createCanvas(500, 400);
  audioBack.loop();
}

function draw() {
  background(roadPicture);
  showActor();
  showCar();
  moveCar();
  moveActor();
  backInitialPositionCar();
  verifyCollision();
  showScore();
  getScore();
}


