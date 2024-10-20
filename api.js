const URL = "https://cat-fact.herokuapp.com/facts";


/*------- Promises Chaining -------*/
/*
const getFacts = async () => {
    fetch(URL).then(
        (response) => response.json()
    ).then(
        (data) => {
            console.log(data)
        }
    )
};
*/


/*------- Async-Await -------*/
/*
const getFacts = async () => {
    console.log("Getting data.......");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data)
};
*/