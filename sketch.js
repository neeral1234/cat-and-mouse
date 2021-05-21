

var cat,catImage1,catImage2,catImage3;
var mouse,mouseImage1,mouseImage2,mouseImage3;
var garden,bgImage;

function preload() {
    //load the images here
   catImage1=loadAnimation("images/cat1.png");
   catImage2=loadAnimation("images/cat2.png","images/cat3.png");
   catImage3=loadAnimation("images/cat4.png");
   mouseImage1=loadAnimation("images/mouse1.png");
   mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png");
   mouseImage3=loadAnimation("images/mouse4.png");
   bgImage=loadImage("images/garden.png");
}
function setup(){
        createCanvas(900,670);
        //create tom and jerry sprites here
        cat=createSprite(700,550);
        cat.addAnimation("catSit",catImage1);
        cat.changeAnimation("catSit");
        cat.scale=0.2;
        mouse=createSprite(90,550);
        mouse.addAnimation("mouseStanding",mouseImage1);
        mouse.scale=0.15;   
        cat.debug=true;
        mouse.debug=true;
}
function draw() {
        background(bgImage);
        //Write condition here to evalute if tom and jerry collide
        if (cat.x - mouse.x < (cat.width-mouse.width/2)){
         cat.addAnimation("cat_standing",catImage3 );
         cat.changeAnimation("cat_standing");
         mouse.addAnimation("mouse_cheese",mouseImage1);
         mouse.changeAnimation("mouse_cheese");
         cat.velocityX=0;
         }
         drawSprites();
}

function keyPressed(){
  //For moving and changing animation write code here
        if(keyCode=== LEFT_ARROW)
        {
        mouse.addAnimation("mouse_teasing",mouseImage2);
        mouse.changeAnimation("mouse_teasing");
        cat.addAnimation("cat_running",catImage2 );
        cat.changeAnimation("cat_running");
        cat.velocityX = -5;    
        
    }
}