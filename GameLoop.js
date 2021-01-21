export default class GameLoop {
	constructor() {
		this.FPS = 60;
		this.step = 1 / this.FPS;
		this.paused = false;
		this.frameID;
		this.lastTime = 0;
		this.deltaTime = 0;
		this.accumulator = 0;

		this.isFullScreen = false;
	}

	loop(currTime) {
		if (!this.paused) {
			if (this.lastTime) {
				this.deltaTime = (currTime - this.lastTime) / 1000;
				this.accumulator += this.deltaTime;
				while (this.accumulator > this.step) {
					this.update();
					this.accumulator -= this.step;
				}
			}
		}
		this.lastTime = currTime;
		this.draw();
		this.frameID = requestAnimationFrame(this.loop.bind(this));
	}

	/**
	 * starts the game loop
	 */
	start() {
		this.lastTime = null;
		this.frameID = requestAnimationFrame(this.loop.bind(this));
	}

	/**
	 * stops the game loop at the current frame
	 */
	stop() {
		cancelAnimationFrame(this.frameID);
	}

	/**
	 * pause the game loop
	 */
	pause() {
		if (this.paused) return;
		this.paused = true;
	}

	/**
	 * resumes the game loop
	 */
	resume() {
		if (!this.paused) return;
		this.paused = false;
	}

	draw() {}

	update() {}

	/**
	 * Sets the FPS to a desired value
	 *
	 * @param {Number} FPS
	 */
	setFPS(FPS) {
		this.FPS = FPS;
		this.step = 1 / this.FPS;
	}

	/**
	 * enables window to detect any resize
	 * makes the canvas width and height the entire screen every time
	 *
	 * @param {canvas} canvas
	 */
	detectResize(canvas) {
		//detect resize
		addEventListener("resize", () => {
			canvas.width = innerWidth;
			canvas.height = innerHeight;
		});
	}

	/**
	 * enables full screen
	 *
	 * @param {Canvas} canvas
	 * @param {String|Number} designatedKeyCode the key that you want to enter/exit full screen
	 */
	enableFullScreen(canvas, designatedKeyCode) {
		//add full screen feature
		addEventListener("keydown", (e) => {
			if (!this.isFullScreen && e.key == designatedKeyCode) {
				canvas.requestFullscreen();
				this.isFullScreen = true;
			} else if (this.isFullScreen && e.key == designatedKeyCode) {
				document.exitFullscreen();
				this.isFullScreen = false;
			}
		});
	}

	remap(oldValue, oMin, oMax, nMin, nMax) {
		return ((oldValue - oMin) * (nMax - nMin)) / (oMax - oMin) + nMin;
	}

	clamp(target, min, max) {
		if (target >= max) return max;
		else if (target <= min) return min;
		else return target;
	}
}
