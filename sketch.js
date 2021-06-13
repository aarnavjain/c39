var database, gs=0, pc, form, player, game, allplayers;
var car1, car2, car3, car4, cars;
var car1Img, car2Img, car3Img, car4Img, track;

function preload(){
    car1Img = loadImage("images/car1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
    track=loadImage("images/track.jpeg");
}


function setup(){
    createCanvas(displayWidth - 20,displayHeight - 30);
    database = firebase.database();

    game=new Game();
    game.getState();
    game.start();



}

function draw(){
    if(pc===4){
        game.update(1);
    }
    if(gs===1){
        clear();
        game.play();
    
    }
    if(gs===2){
        game.end();
    }

}

/*

Object Oriented Programming
    Objects:
        1. Properties
        2. Functions
    
    Steps:
        1. Design of the object - CLASS
        2. Creating objects (variable)
        3. Using functions whenever needed

Car Racing Game

    1. Form:
            - Input box - name
            - Button - submit
            - Read/write the name of the player in db

    2. Player:
            - Player's info
            - Rank, distance, name... etc
            - Player count 
            - Read/write playercount in db

    3. Game:
            - Game states - in the db
            - WAIT state (0)
            - PLAY state (1)
            - END state (2)



*/
