// Main calculator app script

const createarr = require('./stringutils')

const calculate = require('./mathutils')

const inputString = process.argv[2]

if (!inputString) {

  console.log('please input calculation as command line arg')

} else {
  
  const inputArray = createarr(inputString)

  const outputArray = calculate(inputArray)
  
  console.log('Calculate:', inputString)
  
  console.log('As Array:', inputArray)

  console.log('Result:', ...outputArray)

}


