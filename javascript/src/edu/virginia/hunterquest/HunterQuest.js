"use strict";

/**
 * Main class. Instantiate or extend Game to create a new game of your own
 */
class HunterQuest extends Game {
	
	constructor(canvas) {

		var	windowWidth = utils.getWidth(),
			windowHeight = utils.getHeight(),
			canvasWidth = windowWidth - 15,
			canvasHeight = windowHeight - 100;
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;

		super("Hunter Quest", canvasWidth, canvasHeight, canvas);

		this.windowWidth = utils.getWidth();
		this.windowHeight = utils.getHeight();
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.midPoint = new Point(0.5*this.canvasWidth, 0.5*this.canvasHeight);

		// Mouse clicks
		window.addEventListener("click", onClick, true);
		this.mouse = utils.captureMouse(canvas);

		// Events
		this.questManager = new QuestManager();
		// this.coin.eventDispatcher.addEventListener(this.questManager, "COIN_PICKED_UP");

		// Tweens
		this.tweenJuggler = new TweenJuggler();
		
		// this.marioTween = new Tween(this.mario);
		// this.marioTween.animate("alpha", 0, 1, 1000);

		// TweenJuggler.add(this.marioTween);

		// Hunter Quest
		this.mario = new Character("mario", "spritesheet.png", marioSprites, this);
		this.mario.ischaracter = true;
		this.mario.xBound = this.canvasWidth;
		this.mario.yBound = this.canvasHeight;
		this.mario.position = (new Point(this.midPoint.x, this.canvasHeight - 100)).minus(this.mario.getCenter());

		this.enemy1 = new Enemy("enemy1", "spritesheet.png", marioSprites, this);
		this.enemy1.position = (new Point(0.5*this.canvasWidth, 0)).minus(new Point(0.5*this.mario.getUnscaledWidth(), 0));

		// this.opponent = new PhysicsSprite
	}

	update(pressedKeys) {
		super.update(pressedKeys);

		this.tweenJuggler.nextFrame();

	}

	draw(context) {
		context.clearRect(0, 0, this.width, this.height);
		super.draw(context);

		if (this.questManager.coinPickedUp) {
			write(context, "black", "20px Georgia", "You picked up a coin!", 15, 25);
		}
	}
}

/**
 * THIS IS THE BEGINNING OF THE PROGRAM
 * YOU NEED TO COPY THIS VERBATIM ANYTIME YOU CREATE A GAME
 */
function tick() {
	game.nextFrame();
}


/* Get the drawing canvas */
var drawingCanvas = document.getElementById('game');
if(drawingCanvas.getContext) {
	var game = new HunterQuest(drawingCanvas);
	game.start();
}

// Necessary for proper "this" object
function onClick(e) {}

function write(context, style, font, text, x, y) {
	context.fillStyle = style;
	context.font = font;
	context.fillText(text, x, y);
}
