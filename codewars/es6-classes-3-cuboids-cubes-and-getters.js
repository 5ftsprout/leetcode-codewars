//Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
class Cuboid {
    constructor(length, width, height){
      this.length = length
      this.width = width
      this.height = height
    }
    get surfaceArea(){
      return (this.length * this.width) * 2 + (this.length * this.height) * 2 + (this.width * this.height) * 2
    }
    get volume(){
      return this.length * this.width * this.height
    }
  }
  class Cube extends Cuboid {
    constructor(length){
      super(length, length, length);
    }
  }



// Relevant Top Answer
class Cuboid {
    constructor(length, width, height) {
      Object.assign(this, { length, width, height })
    }
    get surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
    get volume() {
      return this.length * this.width * this.height
    }
    static cube(length){
        return new Cuboid(length, length, length)
    }
  }

Cuboid.cube(length)