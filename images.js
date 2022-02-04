// Variables images and audios
let roadPicture;
let actorPicture;
let carPicture;
let car2Picture;
let car3Picture;

let audioBack;
let audioCollision;
let audioScore;

function preload(){
  roadPicture = loadImage("images/estrada.png");
  carPicture = loadImage("images/carro-1.png");
  actorPicture = loadImage("images/ator-1.png");
  car2Picture = loadImage("images/carro-2.png");
  car3Picture = loadImage("images/carro-3.png");
  
  carPictures = [carPicture,car2Picture,car3Picture,carPicture,car2Picture,car3Picture];
  
  audioBack = loadSound("audio/trilha.mp3");
  audioCollision = loadSound("audio/colidiu.mp3");
  audioScore = loadSound("audio/pontos.wav");
}