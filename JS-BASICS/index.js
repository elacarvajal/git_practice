
// let x = 10;
// let y = 3;

// // console.log (x + y );
// // console.log (x - y );
// // console.log (x * y );
// // console.log (x / y );
// // console.log (x % y );
// // console.log (x ** y );

// // console.log(++x);
// console.log(--x);

// let x = 1;
// console.log (1 === 1 );
// console.log ('1' == 1);
// console.log(true == 1);


// let points = 90;
// let type = points > 100 ? 'gold' : 'silver'; 
// console.log(type);


// console.log(false && true);

// let highIncome =  false;
// let goodCreditScore = false;
// let eleigleForLoan = highIncome || goodCreditScore;
// console.log('Eligible', eleigleForLoan);

// let applicationRefused = !eleigleForLoan;
// console.log('application Refused', applicationRefused);

// let userColor = 'red';
// let defaultColor = 'blue' 
// let currentColor = userColor || defaultColor;
// // console.log(currentColor);

// const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz(input){
// }    //no working!!!

// showNumbers (10);

// function showNumbers(limit){
//     for (let i = 0; i <= limit; i++){
//         const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
//         console.log(i, message);
//         }
// }




// function countTruthy (array){
//     let count = 0;
//     for (let value of array)
//     if (value)
//     count++;
//     return count;
    // for (let i = 0; i<array.length; i++) {
//     //     if (Boolean(array[i])) count++;
//     // }  
// }

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj){
//     for (let key in obj)
//     if (typeof obj [key] === 'string')
//     console.log(key, obj[key]);
// };

// console.log (sum(10));

// function sum (limit){
//  let sum = 0

//   for (let i = 0; i <= limit; i++)
//    if (i % 3 === 0 || i % 5 === 0)
//       sum += i;
//   return sum;
// }



//Average = 70

//1-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A


// const marks = [80, 80, 50];

// function calculateGrade(marks) {
//  const average = calculateAverage(marks);
//  if (average < 60) return 'F';
//  if (average < 70) return 'D';
//  if (average < 80) return 'C';
//  if (average < 90) return 'B';
//  return 'A';
// }

// function calculateAverage(array) {
//     let sum = 0;
//     for(let value of array)
//     sum += value;
//     return sum / array.length;
// }
// console.log(calculateGrade([80, 80, 50]))

// showStars(0);

// function showStars(rows){
//     for (let row = 1; rows; row++){
//         let pattern = '';
//         for (let i = 0; i < row; i++)
//          pattern += '*';
//         console.log(pattern);
//     }
// }


// function showPrimes (limit){
//     for ( let number =2; number <= limit; number++)
//     if (isPrime(number)) onsole.log(number);
// }


// function isPrime (number){
//     for (let factor = 2; factor < number; factor++)
//      if (number % factor === 0)
//         return false;

//     return true;
// } 


// function createCircule(radius){
//     return {
//         radius,
//         draw (){
//             console.log ('draw');
//         }
//     };
// }    

// const circle1 = createCircle (1);
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log (circle2);

// let address = {
//     street:'7316 Santa Monica Blvd',
//     city: 'Los Angeles',
//     zipCode: 90046
// };

// function showAddress (address) {
//     for (let key in address){
//         console.log(key, address[key])
//     }
// }
// showAddress(address);




