/*----------------- Callbacks -----------------*/
/*
function sum(a, b){
    console.log(a + b)
}

function calculator(a, b, fnc) {
    fnc(a, b);
    console.log('calculator')
}

calculator(1, 2, sum);
calculator(1, 2, (a, b)=>{
    console.log(a - b)
});
*/

/*
function getData(dataId, getNextData){
    setTimeout(()=> {
        console.log("data", dataId)
        if(getNextData){
            getNextData()
        }
    },2000)
}

getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4)
        })
    })
})
*/


/*----------------- Promise -----------------*/
/*
function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("data", dataId)
            resolve("success")
        },5000)
    })
}
*/

/*
function calculate(number1, number2){
    return new Promise((resolve, reject)=>{
        if(number2){
            console.log(number1 + number2)
            resolve('solve')
        } else {
            reject('error')
        }
    })
}

let value1 = calculate(5, 7);
value1.then((result)=>{
    console.log('5, 7', result)
})
value1.catch((error)=>{
    console.log('5, 7', error)
})

let value2 = calculate(5);
value2.then((result)=>{
    console.log('5', result)
})
value2.catch((error)=>{
    console.log('5', error)
})

calculate(2,3).then(
    (result)=>{console.log('2,3', result)}
).catch(
    (error)=>{console.log('2,3', error)}
)

calculate(2)
.then((result)=>{console.log('2', result)})
.catch((error)=>{console.log('2', error)})
*/

// Promises Chaining
/*
function getData(dataId){
    return new Promise((resolve, reject)=>{
        if(dataId){
            setTimeout(()=>{
                console.log('data', dataId)
                resolve('successful')
            } ,2000)
        }
        else {
            reject('error')
        }
        
    })
}

// getData(1).then(()=> { 
//     getData(2).then(()=>{
//         getData(3).then(()=>{
//             getData(4)
//         })
//     });
// });

// getData(1)
// .then(()=> { 
//     return getData(2)
// })
// .then(()=> getData(3))
// .then(()=> getData())
// .then(()=>{
//     getData(5)
// })

// getData(1)
// .then(()=> { 
//     return getData(2)
// })
// .then(()=> getData(3))
// .then(()=> {
//     getData() 
// })
// .then(()=>{
//     getData(5)
// })
*/