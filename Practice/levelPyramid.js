numlevels = 5


const printPyramid = (numLevels) => {
  let blanks = 0
    for (i = 1; i <= numlevels; i++){
      let rowstring1 = ''
      let rowstring2 = ''
      blanks = numLevels - i
      for (j = 1; j <= numlevels; j++){
        if (j <= blanks){
          rowstring1 += ' '
        } else {
            rowstring1 += 'X'
          }
        if (numlevels - j >= blanks){
          rowstring2 += 'X'
        } else {
            rowstring2 += ' '
          }
        }
      console.log(rowstring1+rowstring2);
    }
}

console.log(printPyramid(numlevels));

