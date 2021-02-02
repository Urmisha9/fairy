var fairy, fairyImage;
var backG, backImage;
var star, starImage;
var music; 



function preload()
{
   //preload the images here
 fairyImage = loadImage("fairy1.png");




}

function setup() {
  var canvas = createCanvas(800, 750);
  fairy = createSprite(101,595,190,30);
  fairy.addImage(fairyImage);
  
 
}


function draw() {
  background("black");


  drawSprites();

}
