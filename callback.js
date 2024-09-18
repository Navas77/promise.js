//function nn vere functionlik pass cheyyum

//call back
function greet(name){
    console.log(`hello,${name}|`);
    
}
function sayhello(callback){
    const name =" navas";
    callback(name);
}

sayhello(greet);

//currying

///currying is a technic where a function with multiple arguments is broke down in to a seriees of function
///each taking a single arguments

function multiply(a){
    return function(b){
        return a*b;
    };

    }

    const multiplyBy2 = multiply(2);
    console.log(multiplyBy2(7));

    //memolisation
    //it is a techniq to optimize function perfomence by 
    //catching and re using previously computed results

    //promise
    //it lets your code cntinue rnning while waits for something to finish ,like loading data
    //when the task is done it gives you the result(succes or failed) without making your code wait
    //


////ASYNC - AWAIT

//function that returns a promise that resolves after 1 sec
//turns a function into one that  handle prommises,allow it to  use "await-inside"
//await-pauses the function until a promise is done,so you can work with the result directly

function waitOneSecond(){
    return new Promise(resolve => setTimeout(resolve, 3000));

}

//Async function that uses await
async function example(){
    console.log("before waiting");
    await waitOneSecond();
    console.log("after waiting");
}
example();


    
