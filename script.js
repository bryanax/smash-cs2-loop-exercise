// Global Variables
var p5Canvas;
var myName;

// initialize global variables in setup() function
function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("[Place Your Name Here]");
}


function draw() {
  background(0, 255, 0);
  drawSquares(random(30, 60));
}


/* Exercise 1: While loop squares!

drawSquares is a function that draws multiple squares on the canvas. It takes in a number 
that specifies how many squares the function needs to draw. 

Task: Your task is to use a while loop to simply draw 'num' number of rectangles each at random positions
      and with some random size in the canvas. Don't forget to fill() in your shapes with various colors!

Hint: Some useful variables have been defined for you already! Use these variables and the random()
      function from p5 to help you generate random positions and sizes for your rectangles!

random(min, max) generates a random number between the 'min' number and the 'max'. 
See https://p5js.org/reference/#group-Math for help!
*/ 
function drawSquares(num) {
  var randomX;
  var randomY;
  var randomLength;
  var randomRed;
  var randomGreen;
  var randomBlue;
  while(){

  }
  
}



/* Exercise 2: For Loop Squares

Repeat exercise 1 but with a for loop. What are the differences in the code?
*/
function drawSquaresAlt(num) {
  var randomX;
  var randomY;
  var randomLength;
  var randomRed;
  var randomGreen;
  var randomBlue;
  // <YOUR CODE HERE>

}