'use strict';

class Boot {
    preload() {
        // this.load.image('preloader', 'assets/preloader.gif');
    }

    create() {
        this.game.state.start('preload');
    }
}
