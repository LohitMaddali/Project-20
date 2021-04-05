var garden, gardenI;
var cat, mouse;    
var catI1, catI2, CatI3, mouseI1, mouseI2, mouseI3 ;

function preload() {
    gardenI = loadImage("images/garden.png");
    catI1 = loadImage("images/cat1.png");
    catI2 = loadAnimation("images/cat2.png", "images/cat1.png");
    catI3 = loadImage("images/cat4.png");
    mouseI1 = loadImage("images/mouse1.png");
    mouseI2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseI3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
     
    garden = createSprite(5000,400);
    garden.addImage("groundI", gardenI);

    cat = createSprite(800, 700, 20, 100);
    cat.addAnimation("catImg1", catI1);
    cat.scale = 0.2;

    mouse = createSprite(200, 700, 10, 40);
    mouse.addAnimation("mouseImg", mouseI1);
    mouse.scale = 0.2;

}

function draw() {
    background(gardenI);
  
    if( cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catImage3", catI3);
        cat.x = 300;
        cat.changeAnimation("catImage3", catI3);

        mouse.addAnimation("mouseImage3", mouseI3);
        mouse.changeAnimation("mouseImage3", mouseI3);
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
      cat.velocityX = -3;
      cat.addAnimation("catRunning", catI2);
      cat.changeAnimation("catRunning", catI2);

      mouse.addAnimation("mousemean", mouseI2);
      mouse.addAnimation("mousemean", catI2);
    }

}
