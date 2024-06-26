import Phaser  from "phaser";



export default class Player {

    private playerSprite: string;
    public playerObject: Phaser.Physics.Arcade.Sprite;
    public destroyObject: Function;
    public createObject: Function;
    public scene: Phaser.Scene;
    private x: number;
    private y: number;
    private texture: any;
    private scale: number;
 


    constructor(spriteName: string, scene: Phaser.Scene, x: number, y: number, texture: any, scale: number) {
        this.playerSprite = spriteName;
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.texture = texture;
        this.createObject = this.createPlayerObject;
        this.destroyObject = this.destroyPlayerObject;
        this.scale = scale;
    }

    public createPlayerObject() {
        this.playerObject = this.scene.physics.add.sprite(this.x, this.y, this.playerSprite).setDepth(10).setScale(this.scale);
        console.log("Created player object");
    }

    public destroyPlayerObject() {
        this.playerObject.destroy();
        console.log("Destroyed player object");
    }
    

}