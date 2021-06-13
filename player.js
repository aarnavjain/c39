class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;
    }
    //reading player count from database
    getCount(){
        database.ref("playercount").on("value",(data)=>{
            pc = data.val();
        })
    
    }
    
    //writing player count into the data base
    updateCount(count){
        database.ref("/").update({
            playercount : count
        })
    }
    
    //writing players info in the data base
    update(){
       database.ref("players/player" + this.index).set({
           name : this.name,
        distance : this.distance
        
       });

    }


    //To read all the player's info
    static getPlayerInfo(){
        database.ref("players").on("value",(data)=>{
            allplayers = data.val();
        })
        
    }
}

/*
pc = 1
player1

pc = 4
player4
*/
