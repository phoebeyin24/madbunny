

//inital concept: an interactive piece that will generate new objects based on mouse click. After spawning, objects will float in the canvas and check for intersection/collision, objects that are colliding will change their forms, and change back to their original state after separation.                                      
//methods:class, array to manage bunny instance, mousepressed function to create new bunny, collision checking within class, use dist()                                                           
//USE MOUSE CLICK TO INTERACT!START A FIGHT BETWEEN BUNNIES

let bunnies = [];//create array for bunnies
let numBunny = 1;
let grass;
let bun; //state 1: cute bunny
let madbun;//state 2: mad bunny 

function preload(){
	bun = loadImage('images/img/bun.png');
	madbun = loadImage('images/img/madbun.png');
	grass = loadImage('images/img/grass.jpg');
}

function setup() {
	frameRate(20);
	imageMode(CENTER);
	createCanvas(600, 600);
	
	for(let i = 0; i<numBunny; i++){
    bunnies[i] = new Bunny(100 * i, 100);

  }
}



function draw() {
	//draw background
	image(grass,width/2,height/2,600,600);
	//calls methods
	for (let i = 0; i < bunnies.length; i++){
		bunnies[i].collide();
 		bunnies[i].show();
		bunnies[i].move();
  }
}

//everytime mouse is pressed, new bunny generates at the position of the mouse
function mousePressed(){
	let myBunny = new Bunny(mouseX, mouseY, bunnies.length);
	bunnies.push(myBunny)
}

