 class Graphics {
	constructor(ctx) {
		/**@type {CanvasRenderingContext2D} */
		this.g = ctx;
	}

	//Shapes===========================================
	line(x1, y1, x2, y2) {
		this.g.beginPath();
		this.g.moveTo(x1, y1);
		this.g.lineTo(x2, y2);
		this.g.stroke();
	}

	point(x, y, weight) {
		this.g.beginPath();
		this.circle(x, y, weight);
		this.g.fill();
	}

	circle(x, y, radius) {
		this.g.beginPath();
		this.g.arc(x, y, radius, 0, Math.PI * 2);
		this.g.stroke();
	}

	fillCircle(x, y, radius) {
		this.g.beginPath();
		this.g.arc(x, y, radius, 0, Math.PI * 2);
		this.g.fill();
	}

	rect(x, y, width, height) {
		this.g.beginPath();
		this.g.strokeRect(x, y, width, height);
	}

	fillRect(x, y, width, height) {
		this.g.beginPath();
		this.g.fillRect(x, y, width, height);
	}

	clearRect(x, y, width, height) {
		this.g.clearRect(x, y, width, height);
	}

	square(x, y, len) {
		this.g.beginPath();
		this.g.strokeRect(x, y, len, len);
	}

	fillSquare(x, y, len) {
		this.g.beginPath();
		this.g.fillRect(x, y, len, len);
	}

	triangle(x1, y1, x2, y2, x3, y3) {
		this.g.beginPath();
		this.g.moveTo(x1, y1);
		this.g.lineTo(x2, y2);
		this.g.lineTo(x3, y3);
		this.g.closePath();
		this.g.stroke();
	}

	fillTriangle(x1, y1, x2, y2, x3, y3) {
		this.g.beginPath();
		this.g.moveTo(x1, y1);
		this.g.lineTo(x2, y2);
		this.g.lineTo(x3, y3);
		this.g.closePath();
		this.g.fill();
	}

	//Colors=========================================
	fillStyle(color) {
		this.g.fillStyle = color;
		return this.g.fillStyle;
	}

	strokeStyle(color) {
		this.g.strokeStyle = color;
		return this.g.strokeStyle;
	}

	setColor(color) {
		this.g.fillStyle = color;
		this.g.strokeStyle = color;
		return this.g.fillStyle;
	}

	setColorRGB(r, g, b) {
		return this.setColor(`rgb(${r},${g},${b})`);
	}
	setColorRGBA(r, g, b, a) {
		return this.setColor(`rgba(${r},${g},${b},${a})`);
	}
	setColorHSL(h, s, l) {
		return this.setColor(`hsl(${h},${s}%,${l}%)`);
	}
	setColorHSLA(h, s, l, a) {
		return this.setColor(`hsla(${h},${s}%,${l}%,${a})`);
	}

	getFillColor() {
		return this.g.fillStyle;
	}

	getStrokeColor() {
		return this.g.strokeStyle;
	}

	fill() {
		this.g.fill();
	}

	shadowColor(color) {
		return (this.g.shadowColor = color);
	}

	/**
	 * Around 0 ~ 50 is enough in most cases
	 * Higher, wider the shadow, but less concentrated (less visible)
	 * Has relationship with the alpha value(I think?)
	 * If there is no transparency in the background, shadow doesn't show(?)
	 */
	shadowBlur(level) {
		return (this.g.shadowBlur = level);
	}

	shadowOffsetX(value) {
		return (this.g.shadowOffsetX = value);
	}
	shadowOffsetY(value) {
		return (this.g.shadowOffsetY = value);
	}

	/**
	 * ### Example
	 *  const grd = g.createLinearGradient(0, 0, 170, 0);
	 *  grd.addColorStop(0, "black");
	 *  grd.addColorStop(1, "white");
	 *  g.fillStyle = grd;
	 *
	 * addColorStop(stop,color):
	 * stop: A value between 0.0 and 1.0 that represents the position between start and end in a gradient
	 * color: A CSS color value to display at the stop position
	 *
	 * @param {Number} x1 The x-coordinate of the start point of the gradient
	 * @param {Number} y1 The y-coordinate of the start point of the gradient
	 * @param {Number} x2 The x-coordinate of the end point of the gradient
	 * @param {Number} y2 The xy-coordinate of the end point of the gradient
	 */
	createLinearGradient(x1, y1, x2, y2) {
		return this.g.createLinearGradient(x1, y1, x2, y2);
	}

	/**
	 * ### Example
	 *  const grd = g.createRadialGradient(75, 50, 5, 90, 60, 100);
	 *  grd.addColorStop(0, "red");
	 *  grd.addColorStop(1, "white");
	 *  ctx.fillStyle = grd;
	 *
	 * addColorStop(stop,color):
	 * stop: A value between 0.0 and 1.0 that represents the position between start and end in a gradient
	 * color: A CSS color value to display at the stop position
	 *
	 * @param {Number} x1 The x-coordinate of the starting circle of the gradient
	 * @param {Number} y1 The y-coordinate of the starting circle of the gradient
	 * @param {Number} r1 The radius of the starting circle
	 * @param {Number} x2 The x-coordinate of the ending circle of the gradient
	 * @param {Number} y2 The y-coordinate of the ending circle of the gradient
	 * @param {Number} r2 The radius of the ending circle
	 */
	createRadialGradient(x1, y1, r1, x2, y2, r2) {
		return this.g.createRadialGradient(x1, y1, r1, x2, y2, r2);
	}

	fill() {
		this.g.fill();
	}

	stroke() {
		this.g.stroke();
	}

	//Line Styles==========================================
	/**
	 * 'butt': Default. A flat edge is added to each end of the line
	 * 'round':	A rounded end cap is added to each end of the line
	 * 'square': A square end cap is added to each end of the line
	 *
	 * @param {String} style
	 */
	lineCap(style) {
		this.g.lineCap = style;
	}

	/**
	 * bevel: Creates a beveled(folded) corner
	 * round: Creates a rounded corner
	 * miter: Default. Creates a sharp corner
	 *
	 * @param {String} style
	 */
	lineJoin(style) {
		this.g.lineJoin = style;
	}

	/**
	 * Sets the line width of the strokes
	 *
	 * @param {Number} lineWidth
	 */
	strokeWeight(lineWidth) {
		this.g.lineWidth = lineWidth;
	}

	//Paths==============================================
	/**
	 * begins drawing a shape
	 * 1. Specify where to start shape => startAt(x,y)
	 * 2. Specify the vertices => vertex(x,y)
	 * 3. endShape() to finish
	 *
	 * @param {Number} x x-coordinate of starting point of shape
	 * @param {Number} y y-coordinate of starting point of shape
	 */
	beginShape(x, y) {
		this.g.beginPath();
		this.g.moveTo(x, y);
	}

	vertex(x, y) {
		this.g.lineTo(x, y);
	}

	/**
	 * Ends Shape
	 *
	 * @param {Boolean} close connects current point to starting point
	 * @param {Boolean} fill fills the shape
	 */
	endShape(close, fill) {
		if (close) {
			this.g.closePath();
		}
		this.g.stroke();
		if (fill) {
			this.g.fill();
		}
	}

	arc(x, y, radius, startAngle, endAngle) {
		this.g.arc(x, y, radius, startAngle, endAngle);
	}

	/**
	 * ### Example:
	 * -Clip a rectangular area
	 * g.rect(50, 20, 200, 120);
	 * g.stroke();
	 * g.clip();
	 * -Draw red rectangle after clip()
	 * g.fillStyle = "red";
	 * g.fillRect(0, 0, 150, 100);
	 */
	clip() {
		this.g.clip();
	}

	/**
	 * Returns true if the specified point is in the current path, otherwise false.
	 * @param {Number} x
	 * @param {Number} y
	 */
	isPointInPath(x, y) {
		return this.g.isPointInPath(x, y);
	}

	//Transformation==================================
	/**
	 * Scales the current drawing bigger or smaller
	 * @param {Number} scaleWidth
	 * @param {Number} scaleHeight
	 */
	scale(scaleWidth, scaleHeight) {
		this.g.scale(scaleWidth, scaleHeight);
	}

	/**
	 * Rotates the current drawing
	 *
	 * ### Examples:
	 * const g = c.getContext("2d");
	 * g.rotate(20 * Math.PI / 180);
	 * g.fillRect(50, 20, 100, 50);
	 *
	 * @param {Number} angle in Radian
	 */
	rotate(angle) {
		this.g.rotate(angle);
	}

	/**
	 * Remaps the (0,0) position on the canvas
	 *
	 * @param {Number} x
	 * @param {Number} y
	 */
	translate(x, y) {
		this.g.translate(x, y);
	}
	//Text=========================================
	/**
	 * Sets or returns the current font properties for text content
	 *
	 * Default value: 10px sans-serif
	 * Syntax: font="italic small-caps bold 12px arial";
	 *
	 * ### Example:
	 * g.font = "30px Arial";
	 * g.fillText("Hello World", 10, 50);
	 *
	 * @param {String} fontStyleInString
	 */
	setFont(fontStyleInString) {
		return (this.g.font = fontStyleInString);
	}

	/**
	 * Sets or returns the current alignment for text content
	 *
	 * Possible values: start, end, center, left, right
	 * ### Example:
	 * g.textAlign("center");
	 *
	 * @param {String} where
	 */
	textAlign(where) {
		return (this.g.textAlign = where);
	}

	/**
	 * Sets or returns the current text baseline used when drawing text
	 * Possible values: alphabetic, top, hanging, middle, ideographic, bottom
	 *
	 * ### Example:
	 * g.textBaseline("middle");
	 *
	 * @param {String} where
	 */
	textBaseline(where) {
		return (this.g.textBaseline = where);
	}

	/**
	 * Draws "filled" text on the canvas
	 *
	 * @param {String} text
	 * @param {Number} x
	 * @param {Number} y
	 */
	fillText(text, x, y) {
		this.g.fillText(text, x, y);
	}

	fillTextWMaxWidth(text, x, y, maxWidth) {
		this.g.fillText(text, x, y, maxWidth);
	}

	/**
	 * Draws text on the canvas (no fill)
	 *
	 * @param {String} text
	 * @param {Number} x
	 * @param {Number} y
	 */
	strokeText(text, x, y) {
		this.g.strokeText(text, x, y);
	}

	/**
	 * Measures the width of the text
	 * Returns an object that contains the width
	 *
	 * @param {String} text
	 */
	measureText(text) {
		return this.g.measureText(text);
	}

	//Draw Image=====================================
	drawImage1(img, x, y) {
		this.g.drawImage(img, x, y);
	}

	drawImage2(img, x, y, w, h) {
		this.g.drawImage(img, x, y, w, h);
	}

	drawImage3(img, sx, sy, sw, sh, x, y, w, h) {
		this.g.drawImage(img, sx, sy, sw, sh, x, y, w, h);
	}

	//Pixel manipulation==============================
	/**
	 *Creates a new, blank ImageData object

	 * @param {Number} w Width
	 * @param {Number} h Height
	 */
	createImageData(w, h) {
		return this.g.createImageData(w, h);
	}

	/**
	 * Returns an ImageData object that copies the pixel data for the specified rectangle on a canvas
	 *
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w
	 * @param {Number} h
	 */
	getImageData(x, y, w, h) {
		return this.g.getImageData(x, y, w, h);
	}

	/**
	 * Puts the image data (from a specified ImageData object) back onto the canvas
	 *
	 * @param {ImageData} imgData
	 * @param {Number} x The x-coordinate, in pixels, of the upper-left corner of the ImageData object
	 * @param {Number} y The y-coordinate, in pixels, of the upper-left corner of the ImageData object
	 */
	putImageData1(imgData, x, y) {
		this.g.putImageData(imgData, x, y);
	}

	/**
	 * Puts the image data (from a specified ImageData object) back onto the canvas
	 *
	 * @param {ImageData} imgData
	 * @param {Number} x The x-coordinate, in pixels, of the upper-left corner of the ImageData object
	 * @param {Number} y The y-coordinate, in pixels, of the upper-left corner of the ImageData object
	 * @param {Number} sx x-coordinate of where to put on canvas
	 * @param {Number} sy y-coordinate of where to put on canvas
	 * @param {Number} sw width to use to draw the image on the canvas
	 * @param {Number} sh height to use to draw the image on the canvas
	 */
	putImageData2(imgData, x, y, sx, sy, sw, sh) {
		this.g.putImageData(imgData, x, y, sx, sy, sw, sh);
	}

	/**
	 *Sets or returns the current alpha or transparency value of the drawing
	 *
	 * @param {Number} value between 0 ~ 1 (0-> fully transparent, 1-> no transparency)
	 */
	setGlobalAlpha(value) {
		return (this.g.globalAlpha = value);
	}

	/**
	 * @returns	The global alpha value
	 */
	getGlobalAlpha() {
		return this.g.globalAlpha;
	}

	/**
	 * Saves the state of the current context
	 */
	save() {
		this.g.save();
	}

	/**
	 * Returns previously saved path state and attributes
	 */
	restore() {
		this.g.restore();
	}
}
