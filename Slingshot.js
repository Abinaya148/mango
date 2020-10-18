class Slingshot{
    constructor(pointA, bodyB){
        var options = {
            pointA:pointA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.pointA=pointA;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly()
    {
        this.sling.bodyB=null
    }
    attach(body)
    {
        this.sling.bodyB=body
    }
    display(){
        if(this.sling.bodyB)
        {
            var pointA = this.pointA;
            var pointB = this.sling.bodyB.position;
            strokeWeight(4);
            stroke("white");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
   
   
    }    
