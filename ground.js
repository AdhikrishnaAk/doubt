class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.body.width=w;
        this.body.height=h;
   World.add(world,this.body)
    }

display(){
    push()
 translate(this.body.position.x,this.body.position.y)
    rectMode(CENTER)   
 rect(0,0,this.width,this.height)
pop()
}

}