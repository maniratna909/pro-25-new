class Paper{
    
    constructor(x,y,r){
                var options= {
                    isStatic:false,
                    restitution:0.3,
                    friction:0,
                    density:1.2

                } 
                this.body= Bodies.circle(x,y,50, options)
                this.r= 50;
                World.add(world,this.body)
                this.image=loadImage("paper.png");
    } 
   
    display(){
        var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
		
			strokeWeight(4);
			fill(255,0,255)
		image(this.image, 0,0,this.r, this.r)
			//ellipse(0,0,this.r, this.r);
			pop()
    }

}
