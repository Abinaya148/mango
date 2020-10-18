class Mango {

  constructor (x,y,width,height) {
  var options= {
  isStatic:true
 
}
  this.width=width;
  this.height=height;
  this.image = loadImage("Pluckingmangoes/mango.png")
  this.body=Bodies.rectangle(x,y,this.width,this.height,options)
  World.add(world,this.body)
    }
  display()
  {
    var pos=this.body.position;
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width,this.height);
    pop();
  }
}