const add = (num1, num2) => {
  let n1 = num1.toString().split('')
  let n2 = num2.toString().split('')
  let numArr = []
  
  if (n1.length !== n2.length && n1.length < n2.length) {
    while (n1.length < n2.length) {
      n1.unshift('0')  
    }
  }
  
  if (n1.length !== n2.length && n1.length > n2.length) {
    while (n1.length > n2.length) {
      n2.unshift('0')  
    }
  }
  
  for (let i = 0; i < n1.length; i++) {
    let newNum = Number.parseInt(n1[i]) + Number.parseInt(n2[i])
    numArr.push(newNum)
  }

  let answer = Number.parseInt(numArr.join(''))
  return answer
}