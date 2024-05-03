//Fun with ES6 Classes #4 - Cubes and Setters
class Cube {
    constructor(length){
      this.length = length
    }
    get surfaceArea(){
      return 6*Math.pow(this.length,2)
    }
    set surfaceArea(x){
       this.length = Math.sqrt(x/6)
    }
    get volume(){
      return Math.pow(this.length,3)
    }
    set volume(x){
       this.length = Math.cbrt(x)
    }
  }



//Relevant Answers
  class Cube {
    constructor(length) {
        this.length = length;
    }

    get surfaceArea() {
        return this.length ** 2 * 6;
    }

    set surfaceArea(val) {
        this.length = Math.sqrt(val / 6);
    }

    get volume() {
        return this.length ** 3;
    }

    set volume(val) {
       this.length = Math.cbrt(val);
    }
}

class Cube {
    length: number;
  
    constructor(length: number) {
      this.length = length;
    }
  
    get volume(): number {
      return this.length ** 3;
    }
    set volume(val: number) {
      this.length = val ** (1/3);
    }
  
    get surfaceArea(): number {
      const face = this.length ** 2;
      return 6 * face;
    }
    set surfaceArea(val: number) {
      const face = val / 6;
      this.length = face ** (1/2);
    }
  }