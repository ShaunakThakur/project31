const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops = 100;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;

    raindrop1 = new Rainfall(random(0,400),random(0,200),10);
    raindrop2 = new Rainfall(random(0,400),random(0,200),10);
    raindrop3 = new Rainfall(random(0,400),random(0,200),10);
    raindrop4 = new Rainfall(random(0,400),random(0,200),10);
    raindrop5 = new Rainfall(random(0,400),random(0,200),10);
    raindrop6 = new Rainfall(random(0,400),random(0,200),10);
    raindrop7 = new Rainfall(random(0,400),random(0,200),10);
    raindrop8 = new Rainfall(random(0,400),random(0,200),10);
    raindrop9 = new Rainfall(random(0,400),random(0,200),10);
    raindrop10 = new Rainfall(random(0,400),random(0,200),10);
    raindrop11 = new Rainfall(random(0,400),random(0,200),10);
    raindrop12 = new Rainfall(random(0,400),random(0,200),10);
    raindrop13 = new Rainfall(random(0,400),random(0,200),10);
    raindrop14 = new Rainfall(random(0,400),random(0,200),10);
    raindrop15 = new Rainfall(random(0,400),random(0,200),10);
    raindrop16 = new Rainfall(random(0,400),random(0,200),10);
    raindrop17 = new Rainfall(random(0,400),random(0,200),10);
    raindrop18 = new Rainfall(random(0,400),random(0,200),10);
    raindrop19 = new Rainfall(random(0,400),random(0,200),10);
    raindrop20 = new Rainfall(random(0,400),random(0,200),10);
    raindrop21 = new Rainfall(random(0,400),random(0,200),10);
    raindrop22 = new Rainfall(random(0,400),random(0,200),10);
    raindrop23 = new Rainfall(random(0,400),random(0,200),10);
    raindrop24 = new Rainfall(random(0,400),random(0,200),10);
    raindrop25 = new Rainfall(random(0,400),random(0,200),10);
    raindrop26 = new Rainfall(random(0,400),random(0,200),10);
    raindrop27 = new Rainfall(random(0,400),random(0,200),10);
    raindrop28 = new Rainfall(random(0,400),random(0,200),10);
    raindrop29 = new Rainfall(random(0,400),random(0,200),10);
    raindrop30 = new Rainfall(random(0,400),random(0,200),10);
    raindrop31 = new Rainfall(random(0,400),random(0,200),10);
    raindrop32 = new Rainfall(random(0,400),random(0,200),10);
    raindrop33 = new Rainfall(random(0,400),random(0,200),10);
    raindrop34 = new Rainfall(random(0,400),random(0,200),10);
    raindrop35 = new Rainfall(random(0,400),random(0,200),10);
    raindrop36 = new Rainfall(random(0,400),random(0,200),10);
    raindrop37 = new Rainfall(random(0,400),random(0,200),10);
    raindrop38 = new Rainfall(random(0,400),random(0,200),10);
    raindrop39 = new Rainfall(random(0,400),random(0,200),10);
    raindrop40 = new Rainfall(random(0,400),random(0,200),10);
    raindrop41 = new Rainfall(random(0,400),random(0,200),10);
    raindrop42 = new Rainfall(random(0,400),random(0,200),10);
    raindrop43 = new Rainfall(random(0,400),random(0,200),10);
    raindrop44 = new Rainfall(random(0,400),random(0,200),10);
    raindrop45 = new Rainfall(random(0,400),random(0,200),10);
    raindrop46 = new Rainfall(random(0,400),random(0,200),10);
    raindrop47 = new Rainfall(random(0,400),random(0,200),10);
    raindrop48 = new Rainfall(random(0,400),random(0,200),10);
    raindrop49 = new Rainfall(random(0,400),random(0,200),10);
    raindrop50 = new Rainfall(random(0,400),random(0,200),10);

    //boy = new WalkingFrame(100,100);
}

function draw(){
    Engine.update(engine);

    background("black");

    raindrop1.display();
    raindrop2.display();
    raindrop3.display();
    raindrop4.display();
    raindrop5.display();
    raindrop6.display();
    raindrop7.display();
    raindrop8.display();
    raindrop9.display();
    raindrop10.display();
    raindrop11.display();
    raindrop12.display();
    raindrop13.display();
    raindrop14.display();
    raindrop15.display();
    raindrop16.display();
    raindrop17.display();
    raindrop18.display();
    raindrop19.display();
    raindrop20.display();
    raindrop21.display();
    raindrop22.display();
    raindrop23.display();
    raindrop24.display();
    raindrop25.display();
    raindrop26.display();
    raindrop27.display();
    raindrop28.display();
    raindrop29.display();
    raindrop30.display();
    raindrop31.display();
    raindrop32.display();
    raindrop33.display();
    raindrop34.display();
    raindrop35.display();
    raindrop36.display();
    raindrop37.display();
    raindrop38.display();
    raindrop39.display();
    raindrop40.display();
    raindrop41.display();
    raindrop42.display();
    raindrop43.display();
    raindrop44.display();
    raindrop45.display();
    raindrop46.display();
    raindrop47.display();
    raindrop48.display();
    raindrop49.display();
    raindrop50.display();

    //boy.display();
}   

