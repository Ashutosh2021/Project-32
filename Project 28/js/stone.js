class Stone{

    constructor(x,y,r){

       var options={
        isStatic:false,
        restitution:0,
        friction:0.001,
        density:1.2
       }
       this.x=x;
       this.y=y;
       this.r=r/3;
       this.image=loadImage("images/stone.png");
       this.body=Bodies.circle(this.x,this.y,this.r,options);
       World.add(world,this.body);

    }

    display(){

        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(78);
        image(this.image,0,0,this.r*3,this.r*3);
        pop()

    }
}