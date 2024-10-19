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