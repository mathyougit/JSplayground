let numarray = [1,1,2];

console.log(numarray.length / 2)

const reverseArray = (farray) => {

for(i = 0; i < Math.floor(farray.length / 2); i++){

    farray[i] = farray[i] + farray[farray.length - i - 1]

    farray[farray.length - i - 1] = farray[i] - farray[farray.length - i - 1]

    farray[i] = farray[i] - farray[farray.length - i - 1]

}

return(farray)

}

console.log(reverseArray(numarray));