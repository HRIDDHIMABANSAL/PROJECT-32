class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 0.05
        }
        this.bodyA = bodyA;
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA =null;
    }

    display(){
        if(this.sling.bodyA){
        var sling = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("turquoise");
        line(sling.x, sling.y, pointB.x, pointB.y);
        }
        }
    
}