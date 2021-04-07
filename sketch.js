var boy,edges;
var obstacle, boost;
var background,bg;

function preload(){
    boyImage = loadImage("Images/boy.png");
    backgroundImage = loadImage("Images/city.png");
    obstacleImage = loadImage("Images/obstacle.png");
    boostImage = loadImage("Images/arrow.png");
}


function setup(){
    canvas = createCanvas(1350,600);
    bg = createSprite(700,170);
    bg.addImage(backgroundImage);
    bg.velocityX = -7;
    bg.scale = 3;
    boy = createSprite(100,400,50,50);
    boy.addImage(boyImage);
    boy.scale = 0.2;
    obstacle = createSprite(300,400,70,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3;
    boostGroup = new Group();
    
}

function draw() {
    background("blue");

    edges = createEdgeSprites();
    boy.collide(edges[3]);
    console.log(boy.y); 

    if(bg.x<600){
        bg.x = 760;
    }
    
    if(keyDown("space") && boy.y>450){
        boy.velocityY = -10;
    }

    boy.velocityY = boy.velocityY+0.5;
    speedUp();
    drawSprites();
}

function speedUp(){
    if(frameCount%60 === 0){
    boost = createSprite(1350,440,77,50);
    boost.y = Math.round(random(300,500));
    boost.velocityX = -7;
    boost.addImage(boostImage);
    boost.scale = 0.2;
    boost.lifetime = 193;
    boostGroup.add(boost);
    }
}