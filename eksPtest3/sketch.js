var s;
var scl = 20;

var food;
var pic=[];
var img= [];
var r; 

function preload(){
   for (var i = 0; i< 4; i++){
        img[i] = loadImage("assets/social" + i + ".png");
        //img[i] = loadImage("assets/social0.png");
        //img[i] = loadImage("assets/social1.png");
        //img[i] = loadImage("assets/social2.png");
        //img[i] = loadImage("assets/social3.png");
   }
   r=floor(random(0,img.length)); //Choses a random image
}


function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}



function draw() {
  background(51);

  if (s.eat(food)) { //when the snake eats the "food" a new location is randomly chosen
    pickLocation(); 
    r = floor(random(0, img.length)); //Chooses a random image for each location <-- IMPORTANT SO THE IMAGE DISAPPEARS WHEN EATEN!!!
  }
  s.death();
  s.update();
  s.show();
 
 
 
 var b = new Pic(food.x, food.y, img[r]); //Displays a new pic where "Picklocation" is
  pic.push(b);
 pic[pic.length-1].display(); //Displays the constructor function
  
  //if(pic.length < 1) {
    //println("working");
  //}
}

function Pic (x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
     
    this.display=function() {
        image(img, this.x, this.y);
    if (pic.length <= 1) {
      print("eatt");
       
    } } 
} 


//function pic(){
  //fill(255, 0, 100);
  //image(img[floor(random(4))], food.x, food.y, scl, scl);
//} <-- SHOWS ALL IMAGES BUT GETS EATEN AND DISAPPEARS





function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}