var x = 0;
var speed = 5; 

function setup(){
    createCanvas(600,400);
}
//this funtion is to represent when I click the gameover concept will essentially take over
function draw(){
    background(249, 238, 12);
    if(mouseIsPressed){
        background(255,0,200);
    }

    //makes outline thick 6px, there is no fills aka no color and the stroke is 255 so the outline of it is white 
    stroke(255);
    strokeWeight(6);
    
    if(mouseY<150){
        fill(5, 244, 205);
    }
    else{
        noFill();
    }
        

    //aa circle
    triangle(x,200,100,100);
    //this is going to allow this to move along the x-axiss//
  
    //aa circle 
     ellipse(x,200,100,100);
    //this is goign to allow this to movealong the y-axis
    if(x>width || x<0){
        console.log("CIRCLE IS OFF THE SCREEN ! ! !")
        speed = speed* -1;
        }
        
      x = x + speed; 
      console.log(x);
}

  