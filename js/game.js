class Game {

    constructor(){
    
    }
    // getting the data from 

    getState(){
        database.ref("gameState").on("value",function(data){
        gameState=data.val();
                    
        })
    }
    // updating the gameState
    updateState(state){
        database.ref("/").update({
            gameState:state
        });
    }
    
   
   async start(){
      if(gameState===0){
          player=new Player();
          var playerCountRef=await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
          }
          form = new Form();
          form.display();
       }

       car1=createSprite(100,200);
       car2=createSprite(300,200);
       car3=createSprite(500,200);
       car4=createSprite(700,200);
       cars=[car1,car2,car3,car4];
    }
    // making the game start

  play(){
      form.hide();
      textSize(30);
      text("Game Start",120,100);
      Player.getPlayerInfo();

      //Display the names
      if (allPlayers!== undefined) {
          console.log(allPlayers);
         
         //index of an array
          var index=0;
          
          // x and y positions of the cars
          var x=0;
          var y;
          for( var plr in allPlayers){
                index +=1;
                x +=200;
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                
                if (index===player.index) {
                    cars[index-1].shapeColor="red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;
                    
                }
                
          }
          
      }
      
      // Increase the player distance on pressing up arrow key 
      if (keyIsDown(UP_ARROW) && player.index !== null) {   
          player.distance += 50;
          player.update();
      }

      drawSprites();
 
  }
}

/* 
 allPlayers = { 
    player1 : { name : "Sania", distance: 0},
    player2 : { name : "Pankaj", distance :0 },
    player3 : { name : "Name2", distance :0},
    player4 : { name : "XYZ", distance :0}
 }
 allPlayers["player2"].name   
 allPlayers.player2.name
*/