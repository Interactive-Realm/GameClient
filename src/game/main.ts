import { Boot } from './PhaserScenes/Boot';
import { Preloader } from './PhaserScenes/Preloader';
import { Game } from './PhaserScenes/Game';


//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 360,
    height: 800,
    parent: 'game-container',
    scene: [
        Boot,
        Preloader,
        Game,
    ],
    physics: {
        default: 'arcade',
        //arcade: {debug: true}
    },
    scale: {
        mode: Phaser.Scale.FIT,
        //autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight
    }, 
    backgroundColor: 0x141729,
};

const StartGame = (parent: string) => {

    return new Phaser.Game({ ...config, parent });

}

export default StartGame;
