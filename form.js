class Form {

    constructor() {
      this.input = createInput("Name");
      this.dob = createInput("Date of Birth"); 
      //dd/mm/yyyy -- > 21/10/1998
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    //   this.reset = createButton("Reset"); 
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.dob.hide(); 
    }
  
    display(){
      var title = createElement('h3'); 
      title.html("Zodiac Runner");
      title.position(width/2 - 50, 0);
  
      this.input.position(width/2 - 60, height/2 - 120);
      this.button.position(width/2 - 20, height/2-40);
      //this.reset.position(displayWidth - 100, 20); 
      this.dob.position(width/2 -60,height/2 - 80); 
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.dob.hide();
        this.button.hide();

        var dateOfBirth = this.dob.value(); // "02/01/2007"
        var date = parseInt(dateOfBirth.slice(0,2)); // "02" ---> 2
        var month = parseInt(dateOfBirth.slice(3,5)); // "01" ---> 1
        
        if ((date >= 21 && month == 3) || (date <=19 && month == 4)){
          zodiac = "aries";
          // playerImage = loadImage("Characters/Aries.png");

        }
        if ((date >= 20 && month == 4) || (date <=20 && month == 5)){
          zodiac = "taurus";
          // playerImage = loadImage("Characters/Taurus.png");
        }
        if ((date >= 21 && month == 5) || (date <=21 && month == 6)){
          zodiac = "gemini";
          // playerImage = loadImage("Characters/Gemini.png");

        }
        if ((date >= 22 && month == 6) || (date <=22 && month == 7)){
          zodiac = "cancer";
          // playerImage = loadImage("Characters/Cancer.png");
        }
        if ((date >= 23 && month == 7) || (date <=22 && month == 8)){
         zodiac = "leo";
          // playerImage = loadImage("Characters/Leo.png");
        }
        if ((date >= 23 && month == 8) || (date <=22 && month == 9)){
         zodiac = "virgo";
          // playerImage = loadImage("Characters/Virgo.png");
        }
        if ((date >= 23 && month == 9) || (date <=23 && month == 10)){
         zodiac = "libra";
          // playerImage = loadImage("Characters/Libra.png");
        }
        if ((date >= 24 && month == 10) || (date <=21 && month == 11)){
          zodiac = "scorpio";
          // playerImage = loadImage("Characters/Scorpio.png");
        }
        if ((date >= 22 && month == 11) || ( date <=21 && month == 12)){
          zodiac = "sagittarius";
        //  playerImage = loadImage("Characters/Sagitarius.png");
        }
        if ((date >= 22 && month == 12) || (date <=19 && month == 1)){
          zodiac = "capricorn";
          // playerImage = loadImage("Character/Capricorn.png");
        }
        if ((date >= 20 && month == 1 ) || (date <=18 && month == 2)){
          zodiac = "aquarius";
          // playerImage = loadImage("Characters/Aquarius.png");
        }
        if ((date >= 19 && month == 2) || (date <=20 && month == 3)){
          zodiac = "pisces";          
          // playerImage = loadImage("Characters/Pisces.png");
        }
        
        name = this.input.value();
       
        // this.greeting.html("Hello " + name + zodiac);
        // this.greeting.position(width/2 -70, height/4);

        if(zodiac==="leo"|| zodiac=== "aries"|| zodiac==="sagittarius"){
          player.addImage(fireChar);
          player.scale= 0.2; 
          yPosition = 278.6;
          backgroundImage = loadImage("firebg.png");
          player.setCollider("rectangle",0,0,400,player.height-50);

          obstacle1 = loadImage("rock1.png");
          obstacle2 = loadImage("rock2.png");
        }

        if(zodiac==="cancer"|| zodiac=== "scorpio"|| zodiac==="pisces"){
          player.addImage(waterChar);
          player.scale= 0.4; 
          player.x = 120; 
          yPosition = 300; 
          backgroundImage = loadImage("ocean.png");
          player.setCollider("rectangle",-100,0,300,player.height-30);

          obstacle1 = loadImage("rock1.png");
          obstacle2 = loadImage("rock2.png");
        }

        if(zodiac==="gemini"|| zodiac=== "libra"|| zodiac==="aquarius"){
          player.addImage(airChar);
          player.scale= 0.6; 
          yPosition= 294.3;
          backgroundImage = loadImage("skybg.png"); 
          player.setCollider("rectangle",0,0,300,player.height);
          
          obstacle1 = loadImage("bird1.png");
          obstacle2 = loadImage("bird2.png");
        }

        if(zodiac==="taurus"|| zodiac=== "virgo"|| zodiac==="capricorn"){
          player.addImage(earthChar);
          player.scale= 0.4; 
          yPosition = 302.4; 
          backgroundImage = loadImage("garden.png");
          player.setCollider("rectangle",0,0,300,player.height-50);

          obstacle1 = loadImage("rock1.png");
          obstacle2 = loadImage("rock2.png");
        }
        gameState = 1;
      });
       
    //   this.reset.mousePressed(()=>{
    //    player.updateCount(0);
    //    game.update(0); 
    //   })
      
    }
  }