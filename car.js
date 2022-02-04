// code car

let i;

// Variable Cars
let posXCars = [600,600,600,600,600,600];
let posYCars = [40,95,145,210,265,315];
let speedCars = [2.5,5,7.5,5,2.5,1];
let widthCars = 50;
let heightCars = 40;

function showCar(){
  for (i = 0; i < carPictures.length; i++){
    image(carPictures[i], posXCars[i], posYCars[i], widthCars,heightCars);
  }
}

function moveCar(){
  for (i = 0; i < carPictures.length; i++){
    posXCars[i] -= speedCars[i];
  }
}

function backInitialPositionCar(){
  for(i = 0; i < carPictures.length; i++){
    if(passedThroughCanvas(posXCars[i])){
    posXCars[i] = 600;
    }
  }
}

function passedThroughCanvas(posXCars){
  return posXCars < -50;
}