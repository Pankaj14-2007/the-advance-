class Player {
    constructor(){

        this.distance=0;
        this.name=null;
        this.index=null;
    }

    // reading the playercount value from the database
    getCount(){
       var playerCountReference =  database.ref("playerCount");
       playerCountReference.on("value",  function(data){
                    playerCount = data.val();
       })  
    }
    
    // updating the player count value in the database
    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }

    // Update player's info in the database
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name :this.name,
            distance:this.distance

        }) 
    }

    // read all players data from the database
     static getPlayerInfo(){
      database.ref("players").on("value",function(allPlayerInfo){
          allPlayers=allPlayerInfo.val();
          
      } )



    }
}
// {
//    key1 : value1,
//    key2: value2
//}