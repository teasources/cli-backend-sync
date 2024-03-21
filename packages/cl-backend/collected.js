const sum = arr => arr.reduce( ( p, c ) => p + c, 0 );
const size = numbers.length;
const average = sum(numbers) / size;

console.log(average); // 5.5