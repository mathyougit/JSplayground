function equalLeaves(tree, leavesArr) {
  let leaves = !!leavesArr ? leavesArr : []
  let isEq = true
  for (const branch in tree) {
    if (isEq) {
      if (typeof (tree[branch]) !== 'object') {
        if (leaves.length === 0) {
          leaves.push(tree[branch])
        } else {
          isEq = leaves[leaves.length - 1] === tree[branch] ? true : false
          if (!isEq) {
            return false
          } else leaves.push(tree[branch])
        }
      } else {
        isEq = equalLeaves(tree[branch], leaves)
      }
    }
  }
  return isEq
}

const exampleTree = {
  a: {
    b1: 'a',
  },
  b: 'a',
  c: {
    d2: 'a',
    e2: {
      f3: 'a',
    }
  },
  g: 14,
}

const res = equalLeaves(exampleTree)

console.log(res)