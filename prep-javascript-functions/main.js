// Add 2 Numbers //

function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

// Convert Hours to Minutes //

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('Minutes is equal to', minutes);

// get Greeting //

function getGreeting(name) {
  return name;
}

const greeting = getGreeting('World!');
console.log('Hello', greeting);

// Add and Multiply by 5 //

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const product = addAndMultiplyBy5(10, 5);
console.log('The product is', product);

// Multiply and Divide by 5 //

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

const quotient = multiplyAndDivideBy5(35, 10);
console.log('The quotient is', quotient);

// Subtract Two Numbers //

function subtractTwoNumbers(x, y) {
  return x - y;
}

const difference = subtractTwoNumbers(22, 7);
console.log('The difference is', difference);

// Get Circle Circumference //

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log('The circumference of the circle is', getCircleCircumference(5));

// Get Full Name //

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = getFullName('Juan', 'Ramierz');
console.log(fullName);

// Cube //

function cube(num) {
  return Math.pow(num, 3);
}

const numberCubed = cube(5);
console.log('The number cubed is', numberCubed);
