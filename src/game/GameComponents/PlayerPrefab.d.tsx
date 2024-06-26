declare interface IPlayerPrefab extends Phaser.GameObjects.Sprite
{
	changeColor(): void
}

declare namespace Phaser.GameObjects
{
	interface GameObjectFactory
	{
		playerprefab(): IPlayerPrefab
	}
}