
function modThree(x) {
    return(x % 3 === 0)
}


function modFive(x) {
    return(x % 5 === 0)
}


for (let i = 1; i < 101; i++) {
    
    if (modThree(i) && modFive(i)){
        console.log("fizzbuzz");
    } else if (modThree(i)) {
        console.log('fizz');
    } else if (modFive(i)) {
        console.log('buzz');
    } else {
        console.log(i)
    }
}


