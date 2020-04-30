// Main calculator app script

const createarr = require('./stringutils')

const calculate = require('./mathutils')

// const iarr = '-1+ 45- -13 * (4 * -8 * (11 + 12/ 19) ^ 5) * 14'

// const inputString = process.argv[2]

const inputString = '5*(3-4)^2+2^2'

if (!inputString) {

  console.log('please input calculation as command line arg')

} else {
  
  const inputArray = createarr(inputString)

  const outputArray = calculate(inputArray)
  
  console.log('Calculate:', inputString)
  
  console.log('As Array:', inputArray)

  console.log('Result:', outputArray)

}


