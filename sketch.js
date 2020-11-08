var database;
var gameState=0;
var playerCount;
var form;
var game;
var car1,car2,car3,car4;
var cars;
var player;
var allPlayers;


function setup(){
    createCanvas(displayWidth-70, displayHeight-200);
    
    // creating a shortcut to get the data
    database=firebase.database();
     
    // creating the game object and calling the function start
    game=new Game();
    game.getState();
    game.start();
    

}

function draw(){
    background("white");

     // making gamestate 1 when 4 player has looged in
    if (playerCount===4) {
        game.updateState(1);
        
    }
   
    if (gameState===1) {
        clear();
        game.play();
        
    }
}


