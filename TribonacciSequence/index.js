function tribonacci(signature,n){
    let arrayLength = n
    let arrayNumbers = []
    let initial = signature
    
    if (n===1){
    arrayNumbers.push(initial[0])
    }
    if (n===2) {
    arrayNumbers.push(initial[0])
    arrayNumbers.push(initial[1])
    }
    if (n===3 || n>3) {
    arrayNumbers.push(initial[0])
    arrayNumbers.push(initial[1])
    arrayNumbers.push(initial[2])
    }
    
    
    if (arrayNumbers.length === 3){
    for (let j = 2; j<arrayLength-1; j++){
      let nextNum = arrayNumbers[j] + arrayNumbers[j-1] + arrayNumbers[j-2]
      arrayNumbers.push(nextNum)
    }
    }
    
    return arrayNumbers
  }