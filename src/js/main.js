function fizz (x) {
  // TODO
  if (x % 15 === 0) {
  	return 'FizzBuzz';
  }
  else if (x % 5 === 0) {
  	return 'Buzz';
  }

  else if (x % 3 === 0) {
  	return 'Fizz';
  }
  else {
  	return x;
  }
 
};

function fizzBuzz (start, end) {
  // Write fizzbuzz here once fizz is finished.
   for (var i = start; i < end; i++) {
   	console.log(fizz(i));
   }
};

export { fizz };
