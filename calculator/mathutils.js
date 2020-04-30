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

const terminate = (err) => {
  console.log('calculator terminated:', err)
}

const matchp = (arr) => {
  let opencount = 1
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

  let nexte = arr.indexOf('^') === -1 ? undefined : arr.indexOf('^') 
  let nextd = arr.indexOf('/') === -1 ? undefined : arr.indexOf('/')
  let nextm = arr.indexOf('*') === -1 ? undefined : arr.indexOf('*')
  let nexta = arr.indexOf('+') === -1 ? undefined : arr.indexOf('+')
  let nexts = arr.indexOf('-') === -1 ? undefined : arr.indexOf('-')
  let nextop = arr.indexOf('(') === -1 ? undefined : arr.indexOf('(')
  let nextcp = arr.indexOf(')') === -1 ? undefined : arr.indexOf(')')
  
  let i = -1
  let j = undefined

  if (nextop!==undefined) {
    if ((arr.slice(nextop,nextcp)).length === 3) {
      arr.splice(nextop, 1)
      arr.splice(nextcp-1,1)
      return arr
    } else {
      i = nextop
      let tarr = [...arr]
      tarr.splice(0, i + 1)
      let closingp = matchp(tarr)
      let temparr = [...arr]
      temparr.splice(0, i + 1)
      temparr.splice(closingp, temparr.length - closingp)
      if (i === 0) {
        arr.splice(i, i + 1 + closingp,...mathnums(temparr))
        return arr 
      } else {
          arr.splice(i, i + closingp,...mathnums(temparr))
          return arr 
      }
    }
  } else if (nexte!==undefined) {
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
    
  arr.splice(i-1, 3)
  arr.splice(i-1,0,j)

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