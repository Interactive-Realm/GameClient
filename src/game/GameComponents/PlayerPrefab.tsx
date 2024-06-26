import Phaser from 'phaser'

export default class PlayerPrefab extends Phaser.GameObjects.Sprite
{
	constructor(scene: Phaser.Scene, x: number, y: number, image: string)
	{
		super(scene, x, y, image)
	}
}

Phaser.GameObjects.GameObjectFactory.register(
	'playerprefab',
	function (this: Phaser.GameObjects.GameObjectFactory, x: number, y: number, image: string) {
		const playerprefab = new PlayerPrefab(this.scene, x, y, image);
		this.displayList.add(playerprefab);
		this.updateList.add(playerprefab);

		return playerprefab;
	}
)

