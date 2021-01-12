class Paper{
    constructor(x,y,r){
     var opt={
        restitution:0.5,
        density:1,
        friction:0.5
     } 
     this.body=Bodies.circle(x,y,r,opt);
     this.r=r;
     this.image=loadImage("paper.png");
     World.add(myWorld,this.body); 
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);  
        fill("purple"); 
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2.8);
        pop(); 
    }
    
}