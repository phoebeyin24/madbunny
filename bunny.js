//a class to manage the bunnies.
class Bunny{
	constructor(x,y,id){
		this.id = id  //id keeps track of each bunny instance, so it's not checking collision with itself
		this.x = x  //x pos
	  this.y = y  //y pos
		this.r = 40 //"radius"for collision checking
		this.isColliding = false //boolean value to determine if bunnies are colliding with each other
	}
	//the collide method checks for the distance between each bunny, collide counter to make sure that
	//the method still functions even when there are 3 or more bunnies colliding
	collide(){
		let collideCount = 0;
		for (let i = 0; i< bunnies.length; i++){
			if(i==this.id) continue; 
			let d = dist(this.x,this.y,bunnies[i].x,bunnies[i].y)
			if (d < this.r + bunnies[i].r){ //if the distance is less than..			
				collideCount++; //collideCount becomes greater than 0 
			}
		}
		this.isColliding = collideCount>0; //variable updates counter state
	}
	
	show(){
		if(this.isColliding) //if this variable is greater than 0
			image(madbun,this.x,this.y,120,120); //show mad bunny
		else
			image(bun,this.x,this.y,90,90); //else show normal bunny
	}
	
	//move method makes each bunny randomly move within -10 and 10
	move(){
		this.x += random(-10,10)
		this.y += random(-10,10)
	}
}