var platformer = platformer || {};

platformer.bubble_prefab = function(game,x,y,level){
    Phaser.Sprite.call(this,game,x,y,'bubble');
    this.anchor.setTo(.5);
    this.scale.setTo(.75);
    this.animations.add('normal',[0],0,true);
    this.animations.add('explode',[1,2,3,4],10,false);
    this.animations.play('normal');
    this.level = level;
    this.speedX = 50;
//    this.speedY = 30;
    this.directionX = 1;
//    this.directionY = 1;
    //this.game.physics.arcade.enable(this);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.setCircle(23,1);
    this.destroyDelay = 10;
    this.destroy = false;
    this.body.bounce.y = 1;
    this.body.gravity.y = 1; //Parece que a partir de cierto número no baja mas
};



platformer.bubble_prefab.prototype = Object.create(Phaser.Sprite.prototype);
platformer.bubble_prefab.prototype.constructor = platformer.bubble_prefab;


platformer.bubble_prefab.prototype.update = function(){
    
    //this.game.debug.body(this);
    
    this.game.physics.arcade.collide(this,this.level.muroLados1);
    this.game.physics.arcade.collide(this,this.level.muroLados2);
    this.game.physics.arcade.collide(this,this.level.muro);
    this.game.physics.arcade.collide(this,this.level.muro2);
    this.game.physics.arcade.collide(this,this.level.hero,this.hitHero,null,this);
    
    this.body.velocity.x = this.speedX*this.directionX;
    //this.body.velocity.y = this.speedY*this.directionY;

   if(this.body.touching.right || this.body.touching.left){
        this.directionX *=-1;
        this.body.velocity.x = this.speedX*this.directionX;
   }
       
//   if(this.body.touching.up || this.body.touching.down){
//       this.directionY *=-1;
//       this.body.velocity.y = this.speedY*this.directionY;
//   }
    if (this.destroy == true){
        this.destroyDelay -= 0.3;
        if(this.destroyDelay <= 0){
            this.kill();
        }
    }
};


platformer.bubble_prefab.prototype.hitHero = function(_bubble,_hero){
    if(_bubble.body.touching && _hero.body.touching){
        
        this.animations.play('explode');
        this.body.enable = false;
        this.level.hitHero();
        this.destroy = true;
        //delay o quan acabi la animació --> destroy.
    }
};