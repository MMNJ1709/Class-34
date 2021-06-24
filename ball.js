class ball{
	constructor(x,y,width,height,angle)
	{
	// assign options to the rubber ball
	var options={
		frictionAir:0.005,
		density:1
	}
		this.x=x;
		this.y=y;
		this.width=width
        this.height=height
		this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
            var angle=this.body.angle
			push()
			translate(rubberpos.x, rubberpos.y);
            rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("Black");
			fill("red");
			//draw the ellipse here to display the rubber ball
ellipse(0,0,this.width,this.height)
			pop()
	}

}