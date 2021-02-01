class Trash{
    constructor(x,y, w, h){
var options={
    isStatic: true
}
this.body= Bodies.rectangle(x,y,w,h, options)
this.width= w
this.height= h
World.add(world, this.body)
    }
display(){
    var trashpos=this.body.position;		

    push()
    translate(trashpos.x, trashpos.y);

    strokeWeight(4);
    fill(255,0,255)
    
    rect(0,0,this.width, this.height);
    pop()
}
}
