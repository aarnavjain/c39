class Game{
    //PROPERTIES
    constructor(){}

    //FUNCTIONS

    //Read gamestate from db
    getState(){
        database.ref("gamestate").on("value", function(data){
            gs = data.val();
        })
    }

    //Write gamestate in db

    update(state){
        database.ref("/").update({
            gamestate : state
        });
    }

    //wait state
    async start(){
        if(gs===0){
            player=new Player();
            var playerCountRef = await database.ref('playercount').once("value");
            if(playerCountRef.exists()){
                pc = playerCountRef.val();
                player.getCount();
            }
            player.getCount();
            form=new Form();
            form.display();
            
        }

        car1 =createSprite(100,200);
        car1.addImage(car1Img);
        car2 =createSprite(300,200);
        car2.addImage(car2Img);
        car3 =createSprite(500,200);
        car3.addImage(car3Img);
        car4 =createSprite(700,200);
        car4.addImage(car4Img);
        cars =[car1,car2,car3,car4];

    }

    //play
    play(){
        form.hide();
        textSize(20);
        text("Game Starts", 120, 100);
        Player.getPlayerInfo(); //allPlayers getting the values

        if(allplayers!==undefined){
            background("white");

            image(track,0,-4*displayHeight, displayWidth,5*displayHeight);

            var x = 170;
            var y;
            var index = 0;
            for(var i in allplayers){
                index = index+1;
                x = x + 200;
                y = displayHeight-allplayers[i].distance;
                  
                cars[index-1].x = x;
                cars[index-1].y = y;

                //Identifying the active player
                if(index===player.index){
                    fill("red");
                    ellipse(x,y,60,60);
                    
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
            }
        }

        if(keyDown(UP_ARROW) && player.index!== null){
            player.distance = player.distance + 50
            player.update()
        }

        if(player.distance>4350){
            gs=2;
        }
        drawSprites();
    }
    
    end(){
        console.log("GAME ENDED");
    }
}

/*
    function name(){}

Local function:
    function(){}


"/" - refers to entire database

    */