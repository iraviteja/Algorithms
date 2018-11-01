// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.

function sum(...args) {
	var total;
	total = args.reduce((accumulator,element)=>accumulator+element,0);
	console.log(total);
}

sum(123,456,789);