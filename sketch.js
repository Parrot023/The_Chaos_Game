//Chaos game by Parrot
//the triangle is called the the sierpinski triangle
//wikipedia
//https://en.wikipedia.org/wiki/Chaos_game
//the coding train (YouTube)
//https://www.youtube.com/watch?v=7gNzMtYo9n4

//array of points/dots
var points = [];
//background color
var backgroundColor = 255;
//dot/point color
var dotColor = 0;
//fraction to move
var fraction = 0.5;

var number_of_dots = 3;

function setup() {
  //initialyse canvas
  createCanvas(400, 400);
  background(backgroundColor);

  //create start dots/points
  // for (var i=0; i<number_of_dots; i++) {
  //   a = createVector(random(width), random(height));
  //   points.push(a);
  // }

  //creates start dots around circle
  for (let i = 0; i <number_of_dots; i++) {
   let angle = i * TWO_PI / number_of_dots;
   let a = p5.Vector.fromAngle(angle);
   a.mult(width / 2);
   a.add(width / 2, height / 2);
   points.push(a);
  }

  //draw start dots
  stroke(dotColor);
  strokeWeight(5);
  for (var i=0; i<number_of_dots; i++) {
    point(points[i].x, points[i].y);
  }

  //vertex point/dot
  vertex = createVector(random(width), random(height));

}

//reset drawing/canvas
function reset() {

  background(backgroundColor);

  //reseting points
  points = [];
  for (let i = 0; i <number_of_dots; i++) {
   let a = createVector(random(width), random(height));
   points.push(a);
  }
  console.log(points);


  //draw start points/dots
  stroke(dotColor);
  strokeWeight(5);
  for (var i=0; i<number_of_dots; i++) {
    point(points[i].x ,points[i].y);
  }


  //vertex point
  vertex = createVector(random(width), random(height));


}//end of reset

function draw() {

  stroke(dotColor);
  strokeWeight(1);

  //draws dots
  for (let o = 0; o < 100; o++) {
    for (var i=0; i<number_of_dots; i++) {
      //chooses a random of the 3 or more start points
      let r = random(points);
      //calculates the next vertex by moving a fraction of
      //the distance between previus vertex and the random chosen start point
      vertex.x = lerp(vertex.x, r.x, fraction);
      vertex.y = lerp(vertex.y, r.y, fraction);
      //draw vertex
      stroke(dotColor);
      point(vertex.x, vertex.y);
    }//end of for loop
  }//end of for loop

  //resets every 100 frames
  if (frameCount % 200 == 0) {
   reset();
  }
}//end of draw
