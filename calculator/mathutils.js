// Simple caluculator-math functions

const addnums = (a, b) => {
  c = a + b
  return c
}

const subnums = (a, b) => {
  c = a - b
  return c
}

const divnums = (a, b) => {
  c = b !== 0 ? a / b : 'cannot divide by 0'
  if (typeof(c) !== 'number') terminate(c)
  // should this still return c?
  return c
}

const mulnums = (a, b) => {
  c = a * b
  return c
}

const expnums = (a, b) => {
  c = a ** b
  return c
}


// const mathnums = (sym) => {
//   if (isNaN(sym)){
//     if (sym === '*') {
//       mulnums()
//     } else if (sym === '/') {
//       divnums()
//     } else if (sym === '+') {
//       addnums()
//     } else if (sym === '-') {
//       subnums()
//     } else if (sym === '^') {
//       expnums()
//     }
//   }
// }

const terminate = (err) => {
  console.log('calculator terminated:', err)
}

const mathnums = (arr) => {

  let nexte = arr.indexOf('^') === -1 ? undefined : arr.indexOf('^') 
  let nextd = arr.indexOf('/') === -1 ? undefined : arr.indexOf('/')
  let nextm = arr.indexOf('*') === -1 ? undefined : arr.indexOf('*')
  let nexta = arr.indexOf('+') === -1 ? undefined : arr.indexOf('+')
  let nexts = arr.indexOf('-') === -1 ? undefined : arr.indexOf('-')
  
  let i = -1
  let j = undefined
  let rarr = arr

  if (nexte) {
    i = nexte
    j = expnums(arr[i-1], arr[i+1])
  } else if (nextm < nextd || nextm && !nextd) {
    i = nextm
    j = mulnums(arr[i-1], arr[i+1])
  } else if (nextd < nextm || nextd && !nextm) {
    i = nextd
    j = divnums(arr[i-1], arr[i+1])
  } else if (nexta < nexts || nexta && !nexts) {
    i = nexta
    j = addnums(arr[i-1], arr[i+1])
  } else if (nexts < nexta || nexts && !nexta) {
    i = nexts
    j = subnums(arr[i-1], arr[i+1])
  }
    
  rarr = arr.splice(i-1, 3)
  rarr = arr.splice(i-1,0,j)

//  uncomment to see math steps 
//  console.log(arr)

  return(arr)

}

const calculate = (iarr) => {
  let narr = iarr
  while (narr.length>1) {
    narr = mathnums(narr)
  }
  const oarr = narr
  return oarr
}

module.exports = calculate