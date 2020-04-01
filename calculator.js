// const testinput = {
//   num1: 3,
//   num2: 0,
//   operation: '/',
// }

function calculator(input) {
  switch(input.operation) {
    case 'add':
    case '+':
      return input.num1 + input.num2;
    case 'subtract':
    case '-':
      return input.num1 - input.num2;
    case 'multiply':
    case '*':
      return input.num1 * input.num2;
    case 'divide':
    case '/':
      return input.num1 / input.num2;
    default:
      return 'That is not a valid operation.'
  }
}

// console.log(calculator(input))