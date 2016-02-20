var game = new Phaser.Game(800, 640);

var loadState = {
  preload: function(){
    //game.load.spritesheet("tiles", "assets/tiles.png", 64, 256, 4);
    game.load.tilemap("level1", "assets/levelOne.csv", null, Phaser.Tilemap.CSV);
    game.load.tilemap("test", "assets/test.json", null, Phaser.Tilemap.TILED_JSON);
    game.load.image("tiles", "assets/tiles.png");
    game.load.image("player", "assets/player.png");

  },

  create: function(){
    game.state.start("game");

  }

};

var titleState = {


};


var gameState = {
   create: function(){
     game.stage.backgroundColor = "#AAAAFF";
     player = game.add.sprite(10, 10, "player");
     player.jumping = false;
     map = game.add.tilemap("level1", 64, 64);
     //map = game.add.tilemap("test");
     map.addTilesetImage("tiles", "tiles");
     //layer = map.createLayer("testLayer");
     layer = map.createLayer(0);
     layer.resizeWorld();
     game.physics.startSystem(Phaser.Physics.ARCADE);
     game.physics.arcade.enable(player);
     game.physics.arcade.gravity.y = 300;
     map.setCollisionBetween(0, 3);


     game.camera.follow(player);
   },

   update: function(){
     game.physics.arcade.collide(player, layer, function(p, l){p.jumping = false; });

     if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
       player.body.velocity.x = 500;
     } else {
       player.body.velocity.x = 0;
     }

     if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && ! player.jumping){
       player.body.velocity.y = -400;
       player.jumping = true;
     } 

  },

};
