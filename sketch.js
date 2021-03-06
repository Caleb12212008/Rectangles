var fixedrec, movingrec


function setup() {
  createCanvas(800,400);
  fixedrec = createSprite(400,100,40,80)
  movingrec = createSprite(400,300,80,30)


  fixedrec.shapeColor = "green"
  movingrec.shapeColor = "green"


}

function draw() {
  background(255,255,255);  
movingrec.x = World.mouseX
movingrec.y = World.mouseY
console.log (movingrec.x)
if(movingrec.x-fixedrec.x<=movingrec.width/2+fixedrec.width/2
  && fixedrec.x-movingrec.x<=movingrec.width/2+fixedrec.width/2
  && movingrec.y-fixedrec.y<=movingrec.height/2+fixedrec.height/2
  && fixedrec.y-movingrec.y<=fixedrec.height/2+movingrec.height/2
  ){
  fixedrec.shapeColor = "red"
  movingrec.shapeColor = "red"
}
else {
  fixedrec.shapeColor = "green"
  movingrec.shapeColor = "green"
}
  drawSprites();



}