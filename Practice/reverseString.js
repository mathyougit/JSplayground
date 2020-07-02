const istring = "hello world";

const reverseString = (fstring) => {

    const farray = fstring.split('');

    const farraylength = farray.length;

    let bstring = ''

    let a = farraylength - 1

    while (a >= 0) {

        bstring += farray[a]

        a--

    }

    return(bstring)

}

console.log(reverseString(istring));