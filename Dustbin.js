class Dustbin{
    constructor(x,y,width,height,color){
        var opt={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,opt);
        this.w=width;
        this.h=height;
        this.color=color;
       
        World.add(myWorld,this.body);

    }

    display(){
        var pos=this.body.position;
        noStroke();
       // fill("green"); 
       fill(this.color); 
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h); 
    }
    
    
};