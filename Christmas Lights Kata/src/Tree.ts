class Light {
  private state: boolean;

  constructor(){
  this.state = false
  }

  toggle () {
    this.state = !this.state
  }

  turnOn () {
    this.state = true
  }

  turnOff () {
    this.state = false
  }

  isOn ()  {return this.state}
}

class Tree {

  width :number;
  height :number;
  lights :Light[][];
  constructor( width :number, height :number) {
    this.width = width;
    this.height = height;
    this.lights = [];
    for (let i = 0; i < width; i++) {
      this.lights[i] = [];
      for (let j = 0; j < height; j++) {
        this.lights[i][j] = new Light();
      }
    }
  }

  turnOn(x, y) {
    this.lights[x][y].turnOn()
  }

  turnOnRange(x1, y1, x2, y2) {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j < y2; j++) {
        this.lights[i][j].turnOn()
      }
    }
  }

  turnOff(x, y) {
    this.lights[x][y].turnOff() 
  }

  turnOffRange(x1, y1, x2, y2) {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j < y2; j++) {
        this.lights[i][j].turnOff()
      }
    }
  }

  toggle(x, y) {
    this.lights[x][y].toggle()
  }  

  toggleRange(x1, y1, x2, y2) {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j < y2; j++) {
        this.lights[i][j].toggle()
      }
    }
  }
  
  getStatus(x,y){
    return this.lights[x][y].isOn()
  }

  getRange(x1, y1, x2, y2) {
    const range = []
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j < y2; j++) {
        range.push(this.lights[i][j])
      }
    }
    return range;
  }

}

export default Tree;