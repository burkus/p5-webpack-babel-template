// Make Canvas setup and adjustment easier

export default class ViewBox {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  move(x, y) {
    return new ViewBox(x, y, this.width, this.height);
  }

  resize(width, height) {
    return new ViewBox(this.x, this.y, width, height);
  }
}
