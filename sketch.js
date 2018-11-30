//Chaos game by Parrot
//the triangle is called the the sierpinski triangle

function setup() {
  createCanvas(600, 600);
  background(0);
  a = createVector(random(width), random(height));
  b = createVector(random(width), random(height));
  c = createVector(random(width), random(height));
  rp = createVector(random(width), random(height));

  stroke(255,0,255);
  strokeWeight(5);
  point(a.x,a.y);
  point(b.x,b.y);
  point(c.x,c.y);

}

function reset() {
  background(0);
  a = createVector(random(width), random(height));
  b = createVector(random(width), random(height));
  c = createVector(random(width), random(height));
  rp = createVector(random(width), random(height));
	stroke(255,0,255);
  strokeWeight(5);
  point(a.x,a.y);
  point(b.x,b.y);
  point(c.x,c.y);
}

function draw() {

  stroke(255);
  strokeWeight(1);
  point(rp.x, rp.y);

	for (let i = 0; i < 100; i++) {
    let r = floor(random(3));

    if (r == 0) {
      rp.x = lerp(rp.x, a.x, 0.5);
      rp.y = lerp(rp.y, a.y, 0.5);
      stroke(0,0,255);
      point(rp.x, rp.y);
    }

    if (r == 1) {
      rp.x = lerp(rp.x, b.x, 0.5);
      rp.y = lerp(rp.y, b.y, 0.5);
      stroke(0,255,0);
      point(rp.x, rp.y);
    }

    if (r == 2) {
      rp.x = lerp(rp.x, c.x, 0.5);
      rp.y = lerp(rp.y, c.y, 0.5);
      stroke(255,0,0);
      point(rp.x, rp.y);
    }


  }//end of for loop

  if (frameCount % 100 == 0) {
   reset();
  }
}//end of draw
