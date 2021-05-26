const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg;
var crowd, bgm;
var h1, h2;
var player, playerSprite;
var time1, time2;
var thumbnail;

function preload() {
  bg = loadImage("Images/Court.jpg")
  h1 = loadImage("Images/hoop1.png")
  h2 = loadImage("Images/hoop2.png")
  thumbnail = loadImage("Images/thumbnail.png")

  player = loadAnimation("Images/1.png", "Images/2.png", "Images/3.png")

  crowd = loadSound("Sounds/Crowd.mp3")
  bgm = loadSound("Sounds/NbaTheme.mp3")

}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  engine = Engine.create()
  world = engine.world

  //crowd.loop()
  //bgm.loop()

  ball = new Ball(window.innerWidth/1.5, window.innerHeight/2)

  court = new Ground(window.innerWidth/2, window.innerHeight/1.35, window.innerWidth, 15)

  h1s = createSprite(window.innerWidth/33, window.innerHeight/2.45, 50, 50)          
  h1s.addImage(h1)
  h1s.scale = 0.85

  h2s = createSprite(window.innerWidth/1.05, window.innerHeight/2.45, 50, 50)
  h2s.addImage(h2)
  h2s.scale = 0.85

  playerSprite = createSprite(window.innerWidth/9, window.innerHeight/2.13, 50, 50)
  playerSprite.addAnimation("player", player)
  playerSprite.scale = 0.3
  playerSprite.velocityX = 0.5
}

function draw() {
  background(bg)
  Engine.update(engine) 

  ball.display()
  court.display()

  //time - hour and minute
  time1 = hour()
  textSize(23);
  stroke(255, 0, 0)
  strokeWeight(1.5)
  fill(255, 0, 0)
  text(time1, window.innerWidth/2.105, window.innerHeight/12.5)
  time2 = minute()
  text(time2, window.innerWidth/1.99, window.innerHeight/12.5)

  textSize(20)
  fill(255)
  text("© SAISH ZADE", window.innerWidth/1.1, window.innerHeight/1.01)

  drawSprites()  
}