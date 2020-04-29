// const mathsyms = {
//   add: '+',
//   subtract: '-',
//   divide: '/',
//   multiply: '*',
//   open: "(",
//   close: ")"
//   exp : "^"
// }

// let symbols = []
// for (const sym in mathsyms) {
//   symbols.push('\\' + mathsyms[sym])
// }


const cleanstr = (str) => {
  let cleaning = str.replace(/\s+/g, '')
  cleaning = cleaning.replace(/\-\-/g, '+')
  cleaning = cleaning.replace(/\+\-/g,'-')
  const cleaned = cleaning.replace(/(?<=\W)\+/g,'')
  return cleaned
}

const createarr = (str) => {
  const readystr = cleanstr(str)
  const arr = readystr.split(/(\*|\/|\+|\)|\(|\^|(?<=\d)\-)/)
  const filtarr = arr.filter(x => {
    return x !== ''    
  });
  const numarr = filtarr.map(x => {
    if (!isNaN(x)) {
      return parseInt(x)
    } else return x
  });
  return numarr
}

module.exports = createarr