class Chain{
    constructor( X , Y){
        var options ={
            bodyA: X ,
            bodyB: Y,
            length: 100,
            stiffness :0.04
        }
    
       this.chain = Matter.Constraint.create(options)
        World.add(world,this.chain)
     
    }
    display(){
        line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)

    }
}