class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=40;

		this.image = loadImage("dustbingreen.png");
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})

		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{

		    

		    
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			image(this.image,0, -this.dustbinHeight/2,this.dustbinWidth + 60,this.dustbinHeight + 20);
			rectMode(CENTER)
			strokeWeight(4);
			
			fill(255)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER);
			strokeWeight(4);
			
			fill(255);
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			strokeWeight(4);
			
			fill(255)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}