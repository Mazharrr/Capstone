'use strict';
import game from './stateManager'

export default class Preload {
    preload(game) {
      // console.log(game)
        game.time.advancedTiming = true;
        this.onLoadComplete()
        game.load.image('grass', '../assets/grass.jpg')
        game.load.tilemap('finalMap', '../assets/finalMap.json', null, Phaser.Tilemap.TILED_JSON)
        game.load.image('gameTiles', '../assets/tileset-biome.png')
        game.load.image('crate', '../assets/RTS_Crate.png');


        game.load.image('fire', '../assets/fire.png')
        game.load.image('blue', '../assets/bluePaint.png');

        game.load.image('bombPowerUp', '../assets/bomb.png')


        game.load.atlas('mechaKoopa', '../assets/mechaKoopa/mechaKoopaTP.png', '../assets/mechaKoopa/mechaKoopaTP.json')


        game.load.atlas('hero1', '../assets/spinHero1.png', '../assets/spinHero1.json')

        game.load.atlas('koopa', '../assets/koopaRoll.png', '../assets/koopaRoll.json');
        game.load.atlas('spinHero', '../assets/spinHero1.png', '../assets/spinHero1.json');
        game.load.atlas('lemmyKoopa', '../assets/lemmyKoopa.png', '../assets/lemmyKoopa.json');

        game.load.atlas('bowserJunior', '../assets/bowserJunior.png', '../assets/bowserJunior.json');
        game.load.atlas('larryKoopa', '../assets/larryKoopa.png', '../assets/larryKoopa.json');
        game.load.atlas('lemmyKoopa', '../assets/lemmy.png', '../assets/lemmy.json');
        game.load.atlas('yoshi', '../assets/yoshi.png', '../assets/yoshi.json');


    }

    onLoadComplete() {
        this.game.state.start('menu', true, false);
    }
}
