function Surrogate () {}
  Surrogate.prototype = SuperClass.prototype;
  Subclass.prototype = new Surrogate();
  Subclass.prototype.constructor = Subclass;

Function.prototype.inherits = function inherits(objectClass) {
  function Surrogate () {}
  Surrogate.prototype = objectClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);