class constraint123{

    constructor(ground,ball1){
    
        var options ={
       bodyA:ground,
       bodyB:ball1,
    
       stiffness: 10,
       length:10
    
        }
    
    this.body = constraint.create(options)
    World.add(world,this.body)
    
    
    
    
    }
    
    
    
    
    
    
    display(){
    
    line (this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.bodyB.position.x,this.body.bodyB.position.y)
    
    
    
    
    
    
    
    
    }
    
    
    
    }
    
    