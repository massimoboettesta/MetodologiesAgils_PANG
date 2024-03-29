var platformer = platformer || {};


platformer.worldmap ={
    init:function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.parentIsWindow = true;
        this.scale.setGameSize(gameOptions.gameWidth,gameOptions.gameHeight);
        this.game.load.bitmapFont()

    },
    preload:function(){ 
        
        this.load.image('worldmap','assets/menus/WorldMap (384-308).png');
        this.load.spritesheet('selector','assets/menus/MapSelectorIcon(40-24).png',20,24);
        this.load.audio('MusicWorldMap', 'assets/audio/music/Title.mp3');
        this.load.audio('SoundEffectButton', 'assets/audio/soundeffects/button.wav');

    },

    create:function(){
        
        this.musicWM = this.add.audio('MusicWorldMap',1,true);
        this.soundEffect = this.add.audio('SoundEffectButton');
        this.musicWM.play();
        
        gameOptions.hero1HP = 3;
        gameOptions.hero2HP = 3;
        
        this.background=this.game.add.tileSprite(0,0,384,308,'worldmap');
        
        this.selector = this.game.add.sprite(0,0,'selector');
        this.selector.anchor.setTo(.5);
        this.selector.animations.add('move',[0],0,true);
        this.selector.animations.add('selected',[0,1],10,true);
  
        this.cursors=this.game.input.keyboard.createCursorKeys(); 
        this.space=this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR); 
        
        this.timeflow = 20;
        this.delayLevelSelector = 10;
        this.currentLevel = 1;
        this.selectedLevel = false;
        this.canChangeLevel = true;
        this.canChangeLevel2 = true;
        this.boolSoundButton = false;
        
        //this.cursors=this.game.input.keyboard.createCursorKeys();    
        //this.space=this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);   
        
        //HUD TEXT
        this.MapName = this.game.add.text(this.game.world.centerX+125, this.game.world.centerY+115, "Barcelona", {
        font: "15px Pixel",
        fill: "#ffffff",
        align: "center"
        });
        this.MapName.anchor.setTo(0.5, 0.5);
        this.Stage = this.game.add.text(this.game.world.centerX+145, this.game.world.centerY+140, "1-1 Stage", {
        font: "15px Pixel",
        fill: "#ffffff",
        align: "center"
        });
        this.Stage.anchor.setTo(0.5, 0.5);
    
        
    },
    update:function(){
        
        //Al principio el selector esta estatico
        if(this.timeflow == 20){
        this.selector.animations.play('move');
        this.MapName.setText("MT. FUJI");
        this.Stage.setText("1-1 STAGE");
        }
        
        //DELAY DEL SELECTOR
        if(this.canChangeLevel == false){
            this.delayLevelSelector += 0.5;
            if (this.delayLevelSelector >= 10){
                this.canChangeLevel = true;
            }
        }
        
        //MOURE EL SELECTOR MES DELAY
        if(this.canChangeLevel == true && this.canChangeLevel2 == true){
            if(this.cursors.left.isDown){
                this.canChangeLevel = false;
                this.delayLevelSelector = 0;
                this.currentLevel +=1
                if(this.currentLevel >= 18){
                    this.currentLevel = 17;
                }
            }
            else if(this.cursors.right.isDown){
                this.canChangeLevel = false;
                this.delayLevelSelector = 0;
                this.currentLevel -=1
                if(this.currentLevel <= 0){
                    this.currentLevel = 1
                }
            }
        }
        //MOVEM EL SELECTOR
        if( this.currentLevel == 1){    //JAPAN
        this.selector.position.x = 347;
        this.selector.position.y = 90;
        this.MapName.setText("MT.FUJI");
        this.Stage.setText("1-1 STAGE");    
        }
        else if( this.currentLevel == 2){ //COUNTRY 2
        this.selector.position.x = 307;
        this.selector.position.y = 90;
        this.MapName.setText("MT.KEIRIN");
        this.Stage.setText("2-1 STAGE")
        }
        else if( this.currentLevel == 3){ //COUNTRY 3
        this.selector.position.x = 290;
        this.selector.position.y = 130;
        this.MapName.setText("EMERALD TEMPLE");
        this.Stage.setText("3-1 STAGE")
        }
        else if( this.currentLevel == 4){ //COUNTRY 4
        this.selector.position.x = 307;
        this.selector.position.y = 130;
        this.MapName.setText("ANKOR WATT");
        this.Stage.setText("4-1 STAGE")
        }
        else if( this.currentLevel == 5){ //COUNTRY 5
        this.selector.position.x = 333;
        this.selector.position.y = 197;
        this.MapName.setText("AUSTRALIA");
        this.Stage.setText("5-1 STAGE")
        }
        else if( this.currentLevel == 6){ //COUNTRY 6
        this.selector.position.x = 268;
        this.selector.position.y = 123;
        this.MapName.setText("TAJ MAHAL");
        this.Stage.setText("6-1 STAGE")
        }
        else if( this.currentLevel == 7){ //COUNTRY 7
        this.selector.position.x = 210;
        this.selector.position.y = 50;
        this.MapName.setText("LENINGRAD");
        this.Stage.setText("7-1 STAGE")
        }
        else if( this.currentLevel == 8){ //COUNTRY 8
        this.selector.position.x = 182;
        this.selector.position.y = 62;
        this.MapName.setText("PARIS");
        this.Stage.setText("8-1 STAGE")
        }
        else if( this.currentLevel == 9){ //COUNTRY 9
        this.selector.position.x = 157;
        this.selector.position.y = 52;
        this.MapName.setText("LONDON");
        this.Stage.setText("9-1 STAGE")
        }
        else if( this.currentLevel == 10){ //COUNTRY 10
        this.selector.position.x = 135;
        this.selector.position.y = 86;
        this.MapName.setText("BARCELONA");
        this.Stage.setText("10-1 STAGE")
        }
        else if( this.currentLevel == 11){ //COUNTRY 11
        this.selector.position.x = 182;
        this.selector.position.y = 87;
        this.MapName.setText("ATHENS");
        this.Stage.setText("11-1 STAGE")
        }
        else if( this.currentLevel == 12){ //COUNTRY 12
        this.selector.position.x = 205;
        this.selector.position.y = 105;
        this.MapName.setText("EGYPT");
        this.Stage.setText("12-1 STAGE")
        }
        else if( this.currentLevel == 13){ //COUNTRY 13
        this.selector.position.x = 207;
        this.selector.position.y = 150;
        this.MapName.setText("KENYA");
        this.Stage.setText("13-1 STAGE")
        }
        else if( this.currentLevel == 14){ //COUNTRY 14
        this.selector.position.x = 82;
        this.selector.position.y = 80;
        this.MapName.setText("NEW YORK");
        this.Stage.setText("14-1 STAGE")
        }
        else if( this.currentLevel == 15){ //COUNTRY 15
        this.selector.position.x = 50;
        this.selector.position.y = 125;
        this.MapName.setText("MAYA");
        this.Stage.setText("15-1 STAGE")
        }
        else if( this.currentLevel == 16){ //COUNTRY 16
        this.selector.position.x = 95;
        this.selector.position.y = 235;
        this.MapName.setText("ANTARTIC");
        this.Stage.setText("16-1 STAGE")
        }
        else if( this.currentLevel == 17){ //COUNTRY 17
        this.selector.position.x = 17;
        this.selector.position.y = 190;
        this.MapName.setText("EASTER ISLAND");
        this.Stage.setText("17-1 STAGE")
        }
        
        //Si Pulsamos Sapce seleccionamos ese nivel en concreto
        if (this.space.isDown){
            this.selectedLevel = true;
            this.canChangeLevel2 = false;
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.F)){
            this.selectedLevel = true;
            this.currentLevel = 18;
        }
        
        //CUANDO SELECCIONAMOS EL NIVEL EMPIEZA A PARPADEAR EL SELECTOR Y AL CABO DE X TIEMPO ENTRAMOS EN EL MAPA
        if ( this.selectedLevel == true){
            if (this.boolSoundButton == false){
                this.soundEffect.play();
                this.boolSoundButton = true;
                }
            if (this.currentLevel < 18){
            this.selector.animations.play('selected');
            }
            if(this.timeflow >= 0){
                this.timeflow -= 0.25;
            }
            //OBRIM MAPA
            else{
                this.musicWM.pause();
                if( this.currentLevel == 1){
                    gameOptions.currentLevel = 1;
                    gameOptions.currentLevelName = "MT.FUJI"
                this.state.start('level');   //NIVEL1
                }
                else if( this.currentLevel == 2){ 
                    gameOptions.currentLevelName = "MT.KEIRIN"
                    gameOptions.currentLevel = 2;
                this.state.start('level');   //NIVEL2
                }
                else if( this.currentLevel == 3){
                    gameOptions.currentLevel = 3;
                    gameOptions.currentLevelName = "EMERALD TEMPLE"
                this.state.start('level');   //NIVEL3
                }
                else if( this.currentLevel == 4){
                    gameOptions.currentLevel = 4;
                    gameOptions.currentLevelName = "ANKOR WATT"
                this.state.start('level');   //NIVEL4
                }
                else if( this.currentLevel == 5){ 
                    gameOptions.currentLevel = 5;
                    gameOptions.currentLevelName = "AUSTRALIA"
                this.state.start('level');   //NIVEL5
                }
                else if( this.currentLevel == 6){
                    gameOptions.currentLevel = 6;
                    gameOptions.currentLevelName = "TAJ MAHAL"
                this.state.start('level');   //NIVEL6
                }
                else if( this.currentLevel == 7){
                    gameOptions.currentLevel = 7;
                    gameOptions.currentLevelName = "LENINGRAD"
                this.state.start('level');   //NIVEL7
                }
                else if( this.currentLevel == 8){ 
                    gameOptions.currentLevel = 8;
                    gameOptions.currentLevelName = "PARIS"
                this.state.start('level');   //NIVEL8
                }
                else if( this.currentLevel == 9){
                    gameOptions.currentLevel = 9;
                    gameOptions.currentLevelName = "LONDON"
                this.state.start('level');   //NIVEL9
                }
                else if( this.currentLevel == 10){
                    gameOptions.currentLevel = 10;
                    gameOptions.currentLevelName = "BARCELONA"
                this.state.start('level');   //NIVEL10
                }
                else if( this.currentLevel == 11){ 
                    gameOptions.currentLevel = 11;
                    gameOptions.currentLevelName = "ATHENS"
                this.state.start('level');   //NIVEL11
                }
                else if( this.currentLevel == 12){
                    gameOptions.currentLevel = 12;
                    gameOptions.currentLevelName = "EGYPT"
                this.state.start('level');   //NIVEL12
                }
                else if( this.currentLevel == 13){
                    gameOptions.currentLevel = 13;
                    gameOptions.currentLevelName = "KENYA"
                this.state.start('level');   //NIVEL13
                }
                else if( this.currentLevel == 14){
                    gameOptions.currentLevel = 14;
                    gameOptions.currentLevelName = "NEW YORK"
                this.state.start('level');   //NIVEL14
                }
                else if( this.currentLevel == 15){ 
                    gameOptions.currentLevel = 15;
                    gameOptions.currentLevelName = "MAYA"
                this.state.start('level');   //NIVEL15
                }
                else if( this.currentLevel == 16){
                    gameOptions.currentLevel = 16;
                    gameOptions.currentLevelName = "ANTARTIC"
                this.state.start('level');   //NIVEL16
                }
                else if( this.currentLevel == 17){
                    gameOptions.currentLevel = 17;
                    gameOptions.currentLevelName = "EASTER ISLAND"
                this.state.start('level');   //NIVEL17
                }
                else if( this.currentLevel == 18){
                gameOptions.currentLevel = 18;
                gameOptions.currentLevelName = "MULTIPLAYER LEVEL"
                this.state.start('level');   //NIVEL18
                }
            }
        }
    }
};