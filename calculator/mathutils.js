// Math utilities
// Notes:
// How to terminate calculation if error? (i.e. divide by 0)

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

const terminate = (err) => {
  console.log('calculator terminated:', err)
}

const matchp = (arr) => {
  let opencount = 0
  let closedcount = 0
  for (let x = 0; x < arr.length; ++x) {
    if ( arr[x] === '(' ) {
      ++opencount
    } else if ( arr[x] === ')') {
      ++closedcount
    }
    if (opencount === closedcount) return x;
  }
}

const mathnums = (arr) => {

  let i = undefined
  let j = undefined

  let nextop = arr.indexOf('(') === -1 ? undefined : arr.indexOf('(')
  let nextcp = arr.indexOf(')') === -1 ? undefined : arr.indexOf(')')
    
  if (nextop!==undefined) {
    if ((arr.slice(nextop,nextcp)).length === 3) {
      arr.splice(nextop, 1)
      arr.splice(nextcp-1,1)
      return arr
    } else {
      i = nextop
      let tarr = [...arr]
      tarr.splice(0, i)
      let closingp = matchp(tarr)
      tarr.splice(closingp, tarr.length - closingp)
      tarr.splice(0,1)
      arr.splice(i, closingp + 1,...calculate(tarr))
      return arr
    }
  } 

  let nexte = arr.indexOf('^') === -1 ? undefined : arr.indexOf('^') 
  let nextd = arr.indexOf('/') === -1 ? undefined : arr.indexOf('/')
  let nextm = arr.indexOf('*') === -1 ? undefined : arr.indexOf('*')
  let nexta = arr.indexOf('+') === -1 ? undefined : arr.indexOf('+')
  let nexts = arr.indexOf('-') === -1 ? undefined : arr.indexOf('-')
  
  if (nexte!==undefined) {
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
  
  if (i!==undefined) {
  arr.splice(i-1, 3, j)
  }

  return arr
}


const calculate = (iarr) => {
  let narr = [...iarr]
  while (narr.length>1) {
    narr = mathnums(narr)
  }
  return narr
}

module.exports = calculate