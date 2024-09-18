function waitOneSecond(){
    return new Promise(resolve => setTimeout(resolve, 3000));

}


async function example(){
    console.log("before waiting");
    await waitOneSecond();
    console.log("after waiting");
}
example();