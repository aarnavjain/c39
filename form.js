class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("start");
        this.greeting = createElement("h3")
    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2- 40,displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30,displayHeight/2);
        //form.button.mousePressed
        this.button.mousePressed(

            ()=>{   //Arrow function
                //input box should get hidden
                //form.input.hide()
                this.input.hide();
                //start button should get hidden
                this.button.hide();

                player.name=this.input.value();
                pc=pc+1;
                player.index=pc;
                player.update();
                player.updateCount(pc);
                this.greeting.html("Welcome, "+player.name+"!");
                this.greeting.position(displayWidth/2 - 70,displayHeight/4);
            } //local function ends
        ); //mousePressed ends
    }
hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
}


}

/*
HTML - to create webpages

2 parts:
    1. Head - info about the page
    2. Body - visible content

BODY

1. Headings - h1, h2.. h6
2. Input box
3. Play button

To create an element:
    1. h2 element
    2. html content - "car racing game"
    3. Position

p5 dom library --> Document Object Model

*/