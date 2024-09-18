// let b = [6,7,8,9,10]
// console.log(b)
// b[30] = 11;
// console.log(b)
// b[15] = 34;
// console.log(b)
// console.log(b[7])

// let a = [1,2,3,4,5];
// console.log(a)
// a[-31] = 15;
// a[-1] = "Prabhakar";
// a[17] = "Seventeen";
// console.log(a)
// console.log("a[-31] -", a[-31])


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

// console.log(arr[5], typeof arr[5]);
// console.log(arr[6], typeof arr[6]);
// console.log(arr[7], typeof arr[7]);
// console.log(arr[8]), typeof arr[8];

// console.log(arr)
// console.log(arr.toString())
// console.log(arr.join(' / '))

let arr2 = [13, 26, 39, 52, 65]
// console.log(arr2)
// console.log(arr2.pop())
// console.log(arr2)
// console.log(arr2.push(100))
// console.log(arr2)
// console.log(arr2.shift())
// console.log(arr2)
// console.log(arr2.unshift(14))
// console.log(arr2)

// delete arr2[4]
// console.log(arr2)
// console.log(arr2.length)
// console.log(arr2[4])

// let n1 = [1,2];
// let n2 = [3,4,5];
// let n3 = [6,7,8,9,0]
// console.log(n1.concat(n2,n3))

/*
Slice Method
let num = [1, 2, 3, 4, 5, 6];
console.log(num.slice(2))
console.log(num)
console.log(num.slice(1,4))
*/

// let num = [1, 2, 3, 4, 5, 6];
// console.log(num.reverse())
// console.log(num)

/*
Splice Method
let num = [1, 2, 3, 4, 5, 6]
console.log(num.splice(1,3))
console.log(num)

let num = [1, 2, 3, 4, 5, 6]
console.log(num.splice(1,3,666,777,888,999,555))
console.log(num)
*/


// console.log(Array.from("Prabhakar"))
// console.log(Array.from({name: "Prabhakar", age: 21}))



// sort() method

let num = [1, 2, 3, 4, 5, 6];

// forEach Method
/*
num.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})

let newArray = num.forEach( value=> value + 2 );
console.log(newArray)
*/

// Map Method
/*
num.map((value,index,arr)=>{
    console.log(value,index,arr)
})

let newArray2 = num.map(value => value**2);
console.log(newArray2)
*/

/*
let evenNum = num.filter(value => value%2 == 0)
console.log(evenNum)

num.filter((value,index,arr)=>{
    console.log(value,index,arr)
})
*/


/*
let number = [2, 5, 1, 0, 3, 8, 7, 4, 6];

function addOn(a,b){
    return a+b;
}

function biggerNumber(a,b){
    return a>b?a:b;
}

console.log(number.reduce(addOn))
console.log(number.reduce(biggerNumber))
*/