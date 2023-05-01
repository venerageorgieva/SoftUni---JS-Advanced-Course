class Circle {
  //if private:
  // #radius
  constructor(radius) {
    // this.#radius = radius;
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (typeof value != "number") {
      throw new TypeError("Radius must be a number!");
    }
    // this.#radius = value;
    this._radius = value;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(value) {
    if (typeof value != "number") {
      throw new TypeError("Diameter must be a number!");
    }
    this.radius = value / 2;
  }
  get area() {
    return this.radius ** 2 * Math.PI;
  }
}

const c = new Circle(5);
console.log(c.diameter);
c.radius = 6;
console.log(c.diameter);
c.diameter = 8;
console.log(c);
console.log(c.area);
