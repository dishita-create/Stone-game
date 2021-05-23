const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rub =new Rubber(200,400,10)
    rub1 =new Rubber(300,300,16)
    rub2 =new Rubber(250,300,10)
    rub3 =new Rubber(400,400,15)
    rub4 =new Rubber(500,400,10)
    rub5 =new Rubber(600,400,15)
    rub6 =new Rubber(700,400,10)
   // rub7 =new Rubber(800,400,20)
    rub8 =new Rubber(900,400,10)
    rub9 =new Rubber(1030,300,14)
    rub10 =new Rubber(1000,300,10)
    rub11 =new Rubber(1050,230,15)
    rub12 =new Rubber(500,400,10)
    rub13 =new Rubber(600,400,15)
    rub14 =new Rubber(700,400,10)





    s=new Stone(200,400,20,20)
    s1=new Stone(1100,400,20,20)
    s2=new Stone(950,400,20,20)
    s3=new Stone(680,400,20,20)
    s4=new Stone(890,400,20,20)
    s5=new Stone(340,400,20,20)
    s6=new Stone(470,400,20,20)


    i1=new Iron(870,300,25,20)
    i2=new Iron(940,300,35,20)
    i3=new Iron(1100,300,20,20)
    i4=new Iron(120,300,25,30)
    i5=new Iron(370,300,25,20)
    i6=new Iron(570,300,25,20)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
   rub.display();
   fill("green")
   rub1.display();
   rub2.display();
   fill ("pink")
   rub3.display();
   rub4.display();
   i4.display()
   fill ("yellow")
   rub5.display();
   rub6.display();
   i6.display()
   fill ("grey")
  // rub7.display();
   rub8.display();
   fill ("red")
   rub9.display();
   rub10.display();
   i5.display()
   fill ("orange")
    rub11.display()
    fill ("brown")
    i2.display()
    rub12.display()
   // fill ("orange")
    rub13.display()
    fill ("purple")
    rub14.display()
    fill ("orange")
    s.display()
    fill ("orange")
    s1.display()
    fill ("orange")
    s2.display()
    i1.display()
    fill ("magenta")
    s3.display()
    s4.display()
    s5.display()
    s6.display()
    i3.display()
}