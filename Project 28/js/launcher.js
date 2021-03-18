class Launcher{

    constructor(bodyA,pointB){
        var options={
           
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length:1

        }

        this.sling=Constraint.create(options);
        World.add(world,this.sling);

    
    
    }

    display(){

      if(this.sling.bodyA){
        
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;
        strokeWeight(1.5);
        stroke("blue");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
      }  
    }

    fly(){
        this.sling.bodyA=null;
    }

    attach(body){

        this.sling.bodyA=body;
    }
}