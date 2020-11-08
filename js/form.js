class Form {
    constructor(){
  // making the properties
     this.input = createInput("Name");
     this.button= createButton("Play");
     this.greeting= createElement("h3");
    }
// displaying the element of form
    display(){
        var title=createElement('h2');
        title.html("CAR RACING GAME");
        title.position(displayWidth/2-100,0);
        
     
        this.input.position(displayWidth/2-100,displayHeight/2-100);
         
        
       this.button.position(displayWidth/2-50,displayHeight/2);
       
       this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();

            player.name = this.input.value();
            playerCount  += 1 ;
            player.index=playerCount;
            player.updateCount(playerCount);
            player.update();

          
           this.greeting.html("Hello"+player.name);
            this.greeting.position(displayWidth/2-100,displayHeight/4);
        })
        
    }
    // hiding all the thing that shound not be seen after the play button is pressed
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    
}

// Arrow functions bind the function to the original object which calls it
