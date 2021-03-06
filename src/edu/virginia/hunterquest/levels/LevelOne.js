"use strict";

class LevelOne extends Level {
	constructor() {
		super();
	}

	initialize() {
		super.initialize();
		var game = Game.getInstance();
		this.monsters = [new Monster("enemy1", "monster/wyatt.png", null, game.gamescreen)];
		this.monsters[0].position = (new Point(0.5*game.canvasWidth, 50)).minus(new Point(0.5*game.hunter.getUnscaledWidth(), 0));
		SoundManager.getInstance().transitionBackgroundMusic("level0", "level1");
	}

}