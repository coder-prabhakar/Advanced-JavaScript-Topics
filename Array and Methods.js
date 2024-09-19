/*
let arr = [
    91,
    82,
    { name: 'Prabhakar', age: 21 },
    84,
    false,
    null,
    'Not Present',
    undefined
];
console.log(arr)
console.log(typeof arr)
console.log(arr.length)
console.log(arr[5], typeof arr[5]);
console.log(arr[6], typeof arr[6]);
console.log(arr[7], typeof arr[7]);
console.log(arr[8]), typeof arr[8];
*/


/*
let arr = [6,7,8,9,10];

arr[30] = 11;
arr[15] = 34;

console.log(arr)

console.log(arr[7]) 
*/


/*
let arr2 = [1,2,3,4,5];
arr2[-31] = 15;
arr2['-1'] = "Prabhakar";
arr2[17] = "Seventeen";
console.log(arr2)
console.log(arr2[-31])
*/


// array.toString()  &  array.join()
/*
let arr = [
		91,
		undefined,
		82,
		{ name: 'Prabhakar', age: 21 },
		84,
		false,
		null,
		'Not Present',
		undefined
];

console.log(arr.toString())

console.log(arr.join(' / '))
*/


// array.indexOf()  &  array.includes()
/*
const student = [
  "prabhakar",
  "diwakar",
  "wasim",
  "pritam",
  "amit",
  "prabhakar",
  "sonu",
];

console.log(student.indexOf("diwakar"));            //  1
console.log(student.indexOf("diwakar", 3));         //  -1
console.log(student.indexOf("prabhakar"));          //  0
console.log(student.indexOf("prabhakar", 3));       //  5

console.log(student.includes("prabhakar"));         //  true
console.log(student.includes("prabhakar", 5));      //  true
console.log(student.includes("Prabhakar", 5));      //  false
*/


// PUSH, POP, SHIFT, UNSHIFT, DELETE Methods
/*
let arr2 = [13, 26, 39, 52, 65]

console.log(arr2.pop())
console.log(arr2)

console.log(arr2.push(100))
console.log(arr2)

console.log(arr2.shift())
console.log(arr2)

console.log(arr2.unshift(14))
console.log(arr2)

delete arr2[2]
console.log(arr2)
console.log(arr2.length)
console.log(arr2[2])
*/


// array.concat(arr1,arr2)
/*
let n1 = [1,2];
let n2 = [3,4,5];
let n3 = [6,7,8,9,0]

console.log(n1.concat(n2,n3))
*/


// Slice Method
/*
let num = [1, 2, 3, 4, 5, 6];

console.log(num.slice(2))
console.log(num)
console.log(num.slice(1,4))
*/


// Splice Method
/*
let num = [1, 2, 3, 4, 5, 6]
console.log(num.splice(1,3))
console.log(num)

console.log(num.splice(1,3,666,777,888,999,555))
console.log(num)
*/


// Reverse Method
/*
let num = [1, 2, 3, 4, 5, 6];

console.log(num.reverse())
console.log(num)
*/


// Array.from()
/*
console.log(Array.from("Prabhakar"))                    //  [ 'P', 'r', 'a', 'b', 'h', 'a', 'k', 'a', 'r' ]
console.log(Array.from(6789))                           //  []
console.log(Array.from(true))                           //  []
console.log(Array.from({name: "Prabhakar", age: 21}))   //  []
*/


// Sort Method
/*
const compare =(a,b)=>{
    return a-b
}

let number = [12,456,36,9,-79,55,1,6666,70,8,-1,-4567,-67]

let numb = number.sort(compare)

console.log(number)
console.log(numb)
*/


// Reduce Method
/*
let number = [12,456,36,9,-79,55,1,6666,70,8,-1,-4567,-67];

function addOn(a,b){
    return a+b;
}

function biggerNumber(a,b){
    return a>b?a:b;
}

console.log(number.reduce(addOn))
console.log(number.reduce(biggerNumber))
console.log(number) 
*/


// forEach Method
/*
let name = ['Prabhakar', 'Diwakar', 'Sonu', 'Wasim', 'Amit', 'Priyanshu'];

name .forEach((item, index, array)=>{
    console.log(item, index, array)
})

let newArray = name.forEach( item => item + ' Kumar' );
console.log(newArray) 
*/


// Map Method
/*
let num = [1, 2, 3, 4, 5, 6];

num.map((value,index,arr)=>{
    console.log(value,index,arr)
})

let newArray2 = num.map(value => value**2);
console.log(newArray2)
*/


// Filter Method
/*
let num = [1, 2, 3, 4, 5, 6];

num.filter((value,index,arr)=>{
    console.log(value,index,arr)
})

let evenNum = num.filter(value => value%2 == 0)
console.log(evenNum)
*/


// Find Method
/*
let num = [1, 2, 3, 4, 5, 6];

num.find((value,index,arr)=>{
    console.log(value,index,arr)
})

let evenNum = num.find(value => value%2 == 0)
console.log(evenNum)
*/