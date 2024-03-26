/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/
let cat;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  cat = new DancingCat(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  cat.update();
  cat.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class DancingCat {
  constructor(startX, startY) {
    this.catX = startX;
    this.catY = startY;
    this.legAngle = 0;
    this.legAngle2 = 0;
    this.direction = 5;
    this.distance = 1;
  }

  update() {
    this.catX += this.direction;
    this.catY = height /2 + this.distance  * 4*sin(frameCount * 0.8);

    if (this.catX >= 0.75*width || this.catX <= 0.25*width) {
      this.direction *= -1;
    }

    this.legAngle = sin(frameCount * 0.1) * 50;
    this.legAngle2 = cos(frameCount * 0.1) * 30;
  }

  display() {
    push();

    // left ear
    fill("orange");
    triangle(
      this.catX - 40,
      this.catY - 10,
      this.catX - 20,
      this.catY - 70,
     this.catX,
      this.catY - 20
    );
    fill("#FFCFD2");
    triangle(
      this.catX - 35,
      this.catY + 10,
      this.catX - 20,
      this.catY - 50,
      this.catX,
      this.catY - 20
    );

    // right ear
    fill("orange");
    triangle(
      this.catX + 40,
      this.catY,
      this.catX + 20,
      this.catY - 70,
      this.catX,
      this.catY - 20
    );

    fill("#FFCFD2");
    triangle(
      this.catX + 35,
      this.catY - 10,
      this.catX + 20,
      this.catY - 50,
      this.catX,
      this.catY + 20
    );

    //back legs
    fill("orange");
    push();
    translate(this.catX + 80, this.catY + 50);
    rotate(radians(this.legAngle2)); // rotate leg
    rect(0, 0, 10, 60); // middle right leg
    fill("pink");
    ellipse(-3, 60, 25,10);
    pop();

    fill("orange");
    push();
    translate(this.catX + 110, this.catY + 40);
    rotate(radians(-this.legAngle)); // rotate leg
    rect(0, 0, 10, 60); 
    fill("pink");
    ellipse(-3, 60, 25,10);
    pop();

    //front legs
    fill("orange");
    push();
    translate(this.catX + 5, this.catY + 50);
    rotate(radians(this.legAngle2)); // rotate leg
    rect(0, -10, 10, 70); // Left leg
    fill("pink");
    ellipse(-3, 60, 25,10);
    pop();

    push();
    translate(this.catX + 25, this.catY + 50);
    rotate(radians(-this.legAngle)); //rotate leg
    rect(0, -10, 10, 70); // middle left leg
   fill("pink");
     ellipse(-3, 60, 25,10);
    pop();

    push();
    translate(this.catX, this.catY);
    rotate(radians(-this.slegAngle2));
    pop();

    // cat body
    fill("orange");
    ellipse(this.catX + 60, this.catY + 20, 150, 80);

    fill("orange");
    ellipse(this.catX + 130, 0.85*this.catY + 50, 20, 20); //tail

    //cat head
    fill("orange");
    ellipse(this.catX, this.catY, 80,75);
    

    //nose
    fill("black");
    ellipse(this.catX, this.catY + 10, 12, 7);
    

    //mouth
    push(); 
    noFill(); 
    strokeWeight(2);
    stroke ("red");
    //fill("red");
    arc(this.catX, this.catY + 20, 10, 5, 0,PI);
    pop(); 

    // eyes
    fill(255);
    ellipse(this.catX - 20, this.catY, 30, 30); // Left eye
    ellipse(this.catX + 20, this.catY, 30, 30); // Right eye

    //pupils
    fill(0);
    ellipse(this.catX - 20, this.catY+2, 20, 20); // Left eye
    ellipse(this.catX + 20, this.catY+2, 20, 20); // Right eye

    fill(255);
    ellipse(this.catX - 20, this.catY+8, 5, 5); // Left eye
    ellipse(this.catX + 20, this.catY + 8, 5, 5); // Right eye

  
  }
}
