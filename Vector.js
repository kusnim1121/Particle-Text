export default class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		if (typeof x == "undefined") this.x = 0;
		if (typeof y == "undefined") this.y = 0;
	}

	/**
	 * Adds a scalar value or another vector to this vector
	 *
	 * ### Examples:
	 *     var vec1 = new Vector(10, 10);
	 *     var vec2 = new Vector(20, 30);
	 *
	 *     vec1.add(vec2);
	 *     vec1.toString();
	 *     => x:30, y:40
	 *
	 * @param {Vector|Number} tensor Vector/scalar
	 * @returns {Vector} For chaining capabilities
	 */
	add(tensor) {
		if (tensor instanceof Vector) {
			this.x += tensor.x;
			this.y += tensor.y;
		} else if (!isNaN(tensor)) {
			this.x += tensor;
			this.y += tensor;
		}
		return this;
	}

	/**
	 * This is a static function that returns a new Vector.
	 * Adds two vectors or adds a scalar value to a vector
	 *
	 * @param {Vector} tensor1 Vector
	 * @param {Vector|Number} tensor2 Vector/scalar
	 * @returns {Vector} a new vector
	 */
	static add(tensor1, tensor2) {
		if (tensor2 instanceof Vector) {
			const x = tensor1.x + tensor2.x;
			const y = tensor1.y + tensor2.y;
			return new Vector(x, y);
		} else if (!isNaN(tensor2)) {
			const x = tensor1.x + tensor2;
			const y = tensor1.y + tensor2;
			return new Vector(x, y);
		}
	}

	/**
	 * Subtracts a scalar value or another vector to this vector
	 *
	 * ### Examples:
	 *     var vec1 = new Vector(100, 50);
	 *     var vec2 = new Vector(20, 30);
	 *
	 *     vec1.subtract(vec2);
	 *     vec1.toString();
	 *     => x:80, y:20
	 *
	 * @param {Vector|Number} tensor Vector/scalar
	 * @returns {Vector} For chaining capabilities
	 */
	subt(tensor) {
		if (tensor instanceof Vector) {
			this.x -= tensor.x;
			this.y -= tensor.y;
		} else if (!isNaN(tensor)) {
			this.x -= tensor;
			this.y -= tensor;
		}
		return this;
	}

	/**
	 * This is a static function that returns a new Vector.
	 * Subtracts two vectors or adds a scalar value to a vector
	 *
	 * @param {Vector} tensor1 Vector
	 * @param {Vector|Number} tensor2 Vector/scalar
	 * @returns {Vector} a new vector
	 */
	static subt(tensor1, tensor2) {
		if (tensor2 instanceof Vector) {
			const x = tensor1.x - tensor2.x;
			const y = tensor1.y - tensor2.y;
			return new Vector(x, y);
		} else if (!isNaN(tensor2)) {
			const x = tensor1.x - tensor2;
			const y = tensor1.y - tensor2;
			return new Vector(x, y);
		}
	}

	/**
	 * Multiplies this vector by a scalar or another vector
	 *
	 * ### Examples:
	 *     var vec = new Vector(100, 50);
	 *     var vec2 = new Vector(2, 2);
	 *
	 *     vec.multiply(vec2);
	 *     vec.toString();
	 *     => x:200, y:100
	 *
	 * @param {Vector|Number} tensor Vector/scalar
	 * @returns {Vector} For chaining capabilities
	 */
	mult(tensor) {
		if (tensor instanceof Vector) {
			this.x *= tensor.x;
			this.y *= tensor.y;
		} else if (!isNaN(tensor)) {
			this.x *= tensor;
			this.y *= tensor;
		}
		return this;
	}

	/**
	 * This is a static function that multiplies a vector
	 * by a scalar or another vector
	 * and returns a new Vector
	 *
	 * @param {Vector} tensor1
	 * @param {Vector|Number} tensor2
	 * @returns {Vector} a new vector
	 */
	static mult(tensor1, tensor2) {
		if (tensor2 instanceof Vector) {
			const x = tensor1.x * tensor2.x;
			const y = tensor1.y * tensor2.y;
			return new Vector(x, y);
		} else if (!isNaN(tensor2)) {
			const x = tensor1.x * tensor2;
			const y = tensor1.y * tensor2;
			return new Vector(x, y);
		}
	}

	/**
	 * Divide a scalar value or another vector from this vector
	 *
	 * ### Example1:
	 *     var vec = new Vector(100, 50);
	 *     var vec2 = new Vector(2, 2);
	 *
	 *     vec.divide(vec2);
	 *     vec.toString();
	 *     => x:50, y:25
	 * @param {Vector|Number} tensor Vector/scalar
	 * @returns {Vector} For chaining capabilities
	 */
	divide(tensor) {
		if (tensor instanceof Vector) {
			this.x /= tensor.x;
			this.y /= tensor.y;
		} else if (!isNaN(tensor)) {
			this.x /= tensor;
			this.y /= tensor;
		}
		return this;
	}

	/**
	 * Calculates the dot product of this vector and another vector
	 *
	 *  ### Examples:
	 *     var vec1 = new Vector(100, 50);
	 *     var vec2 = new Vector(200, 60);
	 *
	 *     vec1.dot(vec2);
	 *     => 23000
	 *
	 * @param {Vector} vector
	 * @returns {Number} The dot product
	 */
	dot(vector) {
		return this.x * vector.x + this.y * vector.y;
	}

	/**
	 * A static function that returns the dot product of two vectors
	 * Does not affect each vector
	 *
	 * @param {Vector} vector1
	 * @param {Vector} vector2
	 * @returns {Number} The dot product
	 */
	static dot(vector1, vector2) {
		return vector1.x * vector2.x + vector1.y * vector2.y;
	}

	/**
	 * Calculates the cross product of this vector and another vector
	 *
	 * @param {Vector} vector
	 * @returns {Number} The cross product
	 */
	cross(vector) {
		return this.x * vector.y - this.y * vector.x;
	}

	/**
	 * A static function that returns the cross product of two vectors
	 * Does not affect each vector
	 *
	 * @param {Vector} vector1
	 * @param {Vector} vector2
	 * @returns {Number} The cross product
	 */
	static cross(vector1, vector2) {
		return vector1.x * vector2.y - vector1.y * vector2.x;
	}

	/**
	 * Projects a vector onto another vector, setting itself to the result.
	 *
	 * ### Examples:
	 *     var vec = new Vector(100, 0);
	 *     var vec2 = new Vector(100, 100);
	 *
	 *     vec.projectOnto(vec2);
	 *     vec.toString();
	 *     => x:50, y:50
	 *
	 * @param {Vector} vector The other vector you want to project this vector onto
	 * @returns {Vector} for chaining capabilities
	 */
	projectOnto(vector) {
		const coeff = Vector.dot(this, vector) / vector.magSq();
		this.x = coeff * vector.x;
		this.y = coeff * vector.y;
		return this;
	}

	/**
	 * Projects vector A onto vector B
	 * returns a new Vector
	 *
	 * @param {Vector} vectorA
	 * @param {Vector} vectorB
	 * @returns {Vector} new Vector
	 */
	static projectOnto(vectorA, vectorB) {
		const coeff = Vector.dot(vectorA, vectorB) / vectorB.magSq();
		const x = coeff * vectorB.x;
		const y = coeff * vectorB.y;
		return new Vector(x, y);
	}

	/**
	 * Returns the horizontal angle of this vector in radians
	 *
	 * @returns {Number} Horizontal angle in radians
	 */
	horizontalAngleRad() {
		return Math.atan2(this.y, this.x);
	}

	/**
	 * Returns the horizontal angle of this vector in degrees
	 *
	 * @returns {Number} Horizontal angle in degrees
	 */
	horizontalAngleDeg() {
		return this.radianToDegree(this.horizontalAngleRad());
	}

	angleRad = () => this.horizontalAngleRad;
	angleDeg = () => this.horizontalAngleDeg();
	directionRad = () => this.horizontalAngleRad;
	directionDeg = () => this.horizontalAngleDeg;

	/**
	 * Returns the vertical angle of this vector in radians
	 *
	 * @returns {Number} Vertical angle in radians
	 */
	verticalAngleRad() {
		return Math.atan2(this.x, this.y);
	}

	/**
	 * Returns the vertical angle of this vector in degrees
	 *
	 * @returns {Number} Vertical angle in degrees
	 */
	verticalAngleDeg() {
		return this.radianToDegree(this.verticalAngleRad());
	}
	/**
	 * Rotates this vector by an angle
	 *
	 * @param {Number} angle in Radian
	 * @returns {Vector} for chaining capabilities
	 */
	rotateByRad(angle) {
		const nx = this.x * Math.cos(angle) - this.y * Math.sin(angle);
		const ny = this.x * Math.sin(angle) + this.y * Math.cos(angle);

		this.x = nx;
		this.y = ny;

		return this;
	}

	/**
	 * Rotates this vector by an angle
	 *
	 * @param {Number} angle in Degrees
	 * @returns {Vector} for chaining capabilities
	 */
	rotateByDeg(angle) {
		const rad = this.degreeToRadian(angle);
		return this.rotateByRad(rad);
	}

	/**
	 * Rotates this vector to an angle
	 *
	 * @param {Number} angle in radians
	 * @returns {Vector} for chaining capabilities
	 */
	rotateToRad(angle) {
		this.rotateByRad(angle - this.angleRad());
		return this;
	}

	/**
	 * Rotates this vector to an angle
	 *
	 * @param {Number} angle in degrees
	 * @returns {Vector} for chaining capabilities
	 */
	rotateToDeg(angle) {
		this.rotateByDeg(angle - this.angleDeg);
		return this;
	}

	/**
	 * Returns the square of the distance between two vectors
	 *
	 * @param {Vector} vector another vector
	 * @returns {Number} the distance squared
	 */
	distanceSq(vector) {
		const dx = this.x - vector.x;
		const dy = this.y - vector.y;
		return dx * dx + dy * dy;
	}

	/**
	 * Returns the distance between two vectors
	 *
	 * @param {Vector} vector another vector
	 * @returns {Number} the distance
	 */
	distance(vector) {
		return Math.sqrt(this.distanceSq(vector));
	}

	/**
	 * returns the length/magnitude of this vector
	 * this is same as the distance from the origin
	 *
	 * @returns {Number} Magnitude of this vector
	 */
	mag() {
		return Math.sqrt(this.magSq());
	}

	/**
	 * returns the square of the magnitude
	 * useful if there is a lot of computations
	 *
	 * @returns {Number} Magnitude squared
	 */
	magSq() {
		return this.x * this.x + this.y * this.y;
	}

	/**
	 * Normalizes this vector
	 *
	 * @returns {Vector} The normalized vector of this Vector
	 */
	norm() {
		const len = this.mag();

		if (len == 0) {
			console.log("The length of this vector is 0!");
		} else {
			return this.divide(len);
		}
	}

	/**
	 * Limits the magnitude of this vector to a certain value
	 * If the magnitude is smaller than the limit, do nothing
	 * if it is larger, shrink the vector to size of the limit
	 *
	 * @param {Number} limit The value to limit the magnitude of this vector
	 * @returns {Vector} For chaining capabilities
	 */
	limit(limit) {
		const mag = this.mag();
		if (mag <= limit) {
			return this;
		} else {
			return this.norm().mult(limit);
		}
	}

	/**
	 * Sets the magnitude of this vector to a certain value
	 *
	 * @param {Number} value
	 */
	setMag(value) {
		if (this.mag() == 0) return this;
		return this.norm().mult(value);
	}

	/**
	 * @returns Returns a new Vector that has the same values
	 */
	clone() {
		return new Vector(this.x, this.y);
	}

	/**
	 * Sets the values to 0 (0,0)
	 *
	 * @returns {Vector} For chaining capabilities
	 */
	setZero() {
		this.x = 0;
		this.y = 0;
		return this;
	}

	/**
	 * Inverts the X axis
	 *
	 * ### Examples:
	 *     var vec = new Vector(100, 50);
	 *
	 *     vec.invertX();
	 *     vec.toString();
	 *     => x:-100, y:50
	 *
	 * @returns {Vector} For chaining capabilities
	 * */
	invertX() {
		this.x *= -1;
		return this;
	}

	/**
	 * Inverts the Y axis
	 *
	 * ### Examples:
	 *     var vec = new Vector(100, 50);
	 *
	 *     vec.invertY();
	 *     vec.toString();
	 *     => x:100, y:-50
	 *
	 * @returns {Vector} For chaining capabilities
	 */
	invertY() {
		this.y *= -1;
		return this;
	}

	/**
	 * Inverts both axis
	 * Graphically speaking, the vector would point the opposite direction
	 *
	 * ### Examples:
	 *     var vec = new Vector(100, 50);
	 *
	 *     vec.invert();
	 *     vec.toString();
	 *     => x:-100, y:-50
	 *
	 * @returns {Vector} For chaining capabilities
	 */
	invert() {
		this.invertX();
		this.invertY();
		return this;
	}

	/**
	 * Performs a linear blend / interpolation of the X axis towards another vector
	 *
	 *  ### Examples:
	 *     var vec1 = new Vector(100, 100);
	 *     var vec2 = new Vector(200, 200);
	 *
	 *     vec1.mixX(vec2, 0.5);
	 *     vec.toString();
	 *     => x:150, y:100
	 *
	 * @param {Vector} vector Vector
	 * @param {Number} amount the blend amount (default: 0.5)
	 * @returns {Vector} For chaining capabilities
	 */
	mixX(vector, amount) {
		if (typeof amount === "undefined") {
			amount = 0.5;
		}

		this.x = (1 - amount) * this.x + amount * vector.x;
		return this;
	}

	/**
	 * Performs a linear blend / interpolation of the y axis towards another vector
	 *
	 *  ### Examples:
	 *     var vec1 = new Vector(100, 100);
	 *     var vec2 = new Vector(200, 200);
	 *
	 *     vec1.mixX(vec2, 0.5);
	 *     vec.toString();
	 *     => x:100, y:150
	 *
	 * @param {Vector} vector Vector
	 * @param {Number} amount the blend amount (default: 0.5)
	 * @returns {Vector} For chaining capabilities
	 */
	mixY(vector, amount) {
		if (typeof amount === "undefined") {
			amount = 0.5;
		}

		this.y = (1 - amount) * this.y + amount * vector.x;
		return this;
	}

	/**
	 * Performs a linear blend / interpolation of the y axis towards another vector
	 *
	 *  ### Examples:
	 *     var vec1 = new Vector(100, 100);
	 *     var vec2 = new Vector(200, 200);
	 *
	 *     vec1.mixX(vec2, 0.5);
	 *     vec.toString();
	 *     => x:150, y:150
	 *
	 * @param {Vector} vector Vector
	 * @param {Number} amount the blend amount (default: 0.5)
	 * @returns {Vector} For chaining capabilities
	 */
	mix(vector, amount) {
		this.mixX(vector, amount);
		this.mixY(vector, amount);
		return this;
	}

	/**
	 * Returns true if the two vectors are identical
	 *
	 * @param {Vector} vector another vector
	 * @returns {Boolean}
	 */
	isEqualTo(vector) {
		return this.x === vector.x && this.y === vector.y;
	}

	/**
	 * randomizes this vector with x and y between 0 ~ 1
	 *
	 * @returns {Vector} for chaining capabilities
	 */
	randomize() {
		this.x = Math.random();
		this.y = Math.random();
		return this;
	}

	/**
	 * randomizes this vector within a certain range
	 *
	 * @param {Number} min
	 * @param {Number} max
	 * @returns {Vector} for chaining capabilities
	 */
	randomizeMinMax(min, max) {
		this.x = Math.random() * (max - min) + min;
		this.y = Math.random() * (max - min) + min;
		return this;
	}

	/**
	 * Returns an string representation of the vector
	 *
	 * ### Examples:
	 *     var vec = new Vector(10, 20);
	 *
	 *     vec.toString();
	 *     => x:10, y:20
	 *
	 * @return {String}
	 */
	toString() {
		return "x:" + this.x + ", y:" + this.y;
	}

	/**
	 * Returns an array representation of the vector
	 *
	 * ### Examples:
	 *     var vec = new Vector(10, 20);
	 *
	 *     vec.toArray();
	 *     => [10, 20]
	 *
	 * @return {Array}
	 */
	toArray() {
		return [this.x, this.y];
	}

	/**
	 * Returns an object representation of the vector
	 *
	 * ### Examples:
	 *     var vec = new Vector(10, 20);
	 *
	 *     vec.toObject();
	 *     => { x: 10, y: 20 }
	 *
	 * @return {Object}
	 */
	toObject() {
		return { x: this.x, y: this.y };
	}

	/**
	 * Returns the degree of a radian value
	 */
	radianToDegree(rad) {
		return (rad * 180) / Math.PI;
	}

	/**
	 * Returns the radian of a degree value
	 */
	degreeToRadian(deg) {
		return (deg / 180) * Math.PI;
	}
}
