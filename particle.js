// import Vector from "../myLibrary/Vector";

class Particle {
	constructor(x, y, color, fontSize) {
		this.color = color;
		this.pos = new Vector(x, y);
		this.size = fontSize;
		this.baseSize = fontSize;
		//by doing this.x, not x, you can move initial position
		this.basePos = new Vector(x, y);
		this.vel = new Vector();
		this.acc = new Vector();
		//density: determine how heavy each particle is, and their speed
		this.density = Math.random() * 2 + 1;

		this.maxSpeed = 5;
		this.maxSeekForce = 5;
		this.maxAvoidMouseForce = 50;

		//randomize initial position
		this.randomize();
	}

	randomize() {
		this.pos.randomize();
		this.pos.mult(new Vector(canvas.width, canvas.height));
	}

	applyForce(force) {
		this.acc.add(force);
	}

	seekOriginalPos() {
		const desire = Vector.subt(this.basePos, this.pos);
		let speed = this.maxSpeed;
		if (desire.mag() < 100) {
			speed = gl.remap(desire.mag(), 0, 100, 0, this.maxSpeed);
		}
		desire.limit(speed);
		const steering = Vector.subt(desire, this.vel);
		steering.limit(this.maxSeekForce * this.density);
		this.applyForce(steering);
	}

	avoidMouse(mouse) {
		//calculates distance from the mouse
		const forceFromMouse = Vector.subt(this.pos, mouse.pos);
		const dist = forceFromMouse.mag();
		if (dist < mouse.radius) {
			const speed = gl.remap(dist, 0, mouse.radius, this.maxAvoidMouseForce, 0);
			forceFromMouse.setMag(speed * this.density);
			this.applyForce(forceFromMouse);
			this.size = this.basePos * 2;
		} else {
			this.size = this.baseSize;
		}
	}

	update(mouse) {
		this.acc.setZero();
		if (mouse.pos) {
			this.avoidMouse(mouse);
		}
		this.seekOriginalPos();
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	draw(g) {
		g.shadowColor(this.color);
		g.shadowBlur(10);
		g.setColor(this.color);
		g.fillCircle(this.pos.x, this.pos.y, this.size);
	}
}
