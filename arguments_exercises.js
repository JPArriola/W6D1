// Sum with arguments keyword
function sum() {
  let total = 0;
  let args = Array.from(arguments);
  args.forEach( (el) => total += el);
  return total;
}

sum(1,2,3,4);

// Sum with the ... rest operator
function restSum(...args) {
  let total = 0;
  args.forEach( (el) => total += el);
  return total;
}

restSum(1,2,3,4);


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// myBind with arguments keyword
Function.prototype.myBind = function () {
  let context = arguments[0];
  let args = Array.from(arguments).slice(1);
  let that = this;

  return function() {
    let args2 = Array.from(arguments);
    that.apply(context, args.concat(args2));
  };
};

// markov.says.myBind(pavlov)("meow", "a tree");
// markov.says.myBind(pavlov, "meow")("Markov");

// myBind with Rest Operator 
Function.prototype.myBetterBind = function (...args) {
  let context = args[0];
  let otherArgs = args.slice(1);

  return (...args2) => {
    this.apply(context, otherArgs.concat(args2));
  };
};

// markov.says.myBetterBind(pavlov)("meow", "a tree");
// markov.says.myBetterBind(pavlov, "meow")("Markov");


//curriedSum

function curriedSum(numArgs) {
  let numbers = [];
  
  return function _curriedSum(n) {
    numbers.push(n);
    while (numbers.length < numArgs) {
      return _curriedSum;
    } 
    
    let sum = 0;
    numbers.forEach( (el) => sum += el );
    numbers = [];
    return sum;
  };
}

// monkey curry with arguments
Function.prototype.curry = function (numArgs) {
  let numbers = [];
  let parentFunction = this;

  return function _curry(n) {
    numbers.push(n);
    while (numbers.length < numArgs) {
      return _curry;
    }
    let context = numbers[0];
    return parentFunction.apply(context, numbers);
  };
};

//monkey curry with spread operator
Function.prototype.spreadCurry = function (numArgs) {
  let numbers = [];
  let parentFunction = this;
  
  return function _curry(n) {
    numbers.push(n);
    while (numbers.length < numArgs) {
      return _curry;
    }
    let context = numbers[0];
    return parentFunction.call(context, ...numbers);
  };
};



















