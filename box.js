class Box {
  constructor(x,y,w,h){
    var options ={
      isStatic : false
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.width = w
    this.height = h
    World.add(world,this.body)
         }

         display (){
          console.log(this.body.speed);
          if (this.body.speed<3){
            
             
          }
        else{
      
          World.remove(world,this.body);
        push();
          this.visibility=this.visibility-5;
        tint(255,this.visibility);
             
       pop();
      }
         }
        }
      
      
      
