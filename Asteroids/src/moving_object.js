const Util = require("./utils");

class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
  }
}

MovingObject.prototype.draw = function (ctx) {
  
};

module.exports = MovingObject;