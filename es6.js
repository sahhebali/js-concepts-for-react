
const numbers = [89, 35, 98, 12];
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

// 1. template string
// const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
const tudentDetails = `my name is ${student.name} iam old ${student.age} my favrite movi ${student.movies[0]}`
// console.log(tudentDetails)

// 2. arrow function
const getFiftyFive = () => 55; /* const getfiftyFive = ()=>55; */
const addSixtyFive = num => num + 65;/* const addFive = num=>num+65; */
const isEven = x => x % 2 == 0;/* const iseven = x => x %2 == 0 ;*/
const addThree = (x, y, z) => x + y + z;/* const addThree = (x,y,z) => x+y+z */

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];
const exzample4 = [...numbers, 102];


numbers.push(99);
numbers.push(99);
numbers.push(99);


// console.log(numbers);
// console.log(newNumbers);
// console.log(currentNumbers);
// console.log(exzample4);





const mobile = { name: 'samsung', Storage: '64Gb', prosesor: '4 gb' };
const newobject = `this mobile name ${mobile.name} a phone tar ram  ${mobile.prosesor} and this phone room ${mobile.Storage}`
// console.log(newobject);
// console.log(mobile);

const studentREsult = { bengali: 65, eng: 55, math: 56, physicalSince: 52, lifSince: 86, }
const resultSheet = [studentREsult]
// console.log(...resultSheet)

const batchNumber = [1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15];
const batch2 = [...batchNumber, 55]
batchNumber.push(16, 17, 18)
console.log(batch2);
// for (const batch of batchNumber) {
//     onlyoddNumber = batch;
//     console.log(onlyoddNumber)
// }
