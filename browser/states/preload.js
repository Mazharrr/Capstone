'use strict';
import game from './stateManager'

export default class Preload {
    preload(game) {
      // console.log(game)
        game.time.advancedTiming = true;
        this.onLoadComplete()
        game.load.image('grass', '../assets/grass.jpg')
        game.load.tilemap('jamesMap', '../assets/tutorialTilemap.json', null, Phaser.Tilemap.TILED_JSON)
        game.load.image('gameTiles', '../assets/tiled.png')
        game.load.image('crate', '../assets/RTS_Crate.png');
        
        game.load.image('fire', '../assets/fire.png')
        game.load.image('blue', '../assets/bluePaint.png');


        game.load.atlas('mechaKoopa', '../assets/mechaKoopa/mechaKoopaTP.png', '../assets/mechaKoopa/mechaKoopaTP.json')


        game.load.atlas('hero1', '../assets/spinHero1.png', '../assets/spinHero1.json')

        game.load.atlas('koopa', '../assets/koopaRoll.png', '../assets/koopaRoll.json');
        game.load.atlas('spinHero', '../assets/spinHero1.png', '../assets/spinHero1.json');


    }

    onLoadComplete() {
        this.game.state.start('menu', true, false);
    }
}
