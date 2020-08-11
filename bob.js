class Bob {
    constructor(x,y,radius)  {

    var options = {
        
        restitution:1.2,
        friction:0.0,
        density:0.4
    }
this.body = Bodies.circle(x,y,radius,options);
World.add (world,this.body);
this.radius = radius;


    }
    
    display() {
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
       pop();
    }
}