function fizz (x) {
  // TODO
  if (x % 3 === 0) {
  	console.log('Fizz');
  }
  else if (x % 5 === 0) {
  	console.log('Buzz');
  }

  else if (x % 15 === 0) {
  	console.log('FizzBuzz');
  }
  else {
  	return x;
  }
};

function fizzBuzz (start, end) {
  // Write fizzbuzz here once fizz is finished.
  // for (var i = 0; i < end; i++)
};

export { fizz };
