var textarea_main = document.getElementById("text_area_main");
var textarea = document.getElementById("text_area");

var fontRoboto;
function preload(){
  fontRoboto=loadFont("font/IBMPlexSans-Medium.ttf");

}
function setup() {
  var c=createCanvas(400, 400);
  c.parent("canvasWrapper");
}

function draw() {
    background("#ffa861ff");

  textFont(fontRoboto);
  textSize(20);
  //Estilo Header1
  noStroke(0);
  fill(0);
  textAlign(LEFT);
  text(textarea.value, 10, 30);

  //Estilo Main
  textAlign(RIGHT);
  stroke(0);
  strokeWeight(1);
  fill(255);
  text("Exposicion de Pep Hernandez", 300, height /2);
  
  //Estilo Header2
}