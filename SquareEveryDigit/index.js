function squareDigits(num){
    //may the code be with you
    let numbers = num
    let numbersString = numbers.toString()
    let numbersArray = numbersString.split('')
    let numberArr =[]
    let squaredArr = []
  
   for (let i = 0; i<numbersArray.length; i++){
     let digit = Number(numbersArray[i])
     numberArr.push(digit)
     //console.log(numberArr)
   }
  
  for (let i = 0; i<numberArr.length; i++) {
    squaredArr.push(Math.pow(numberArr[i],2))
    //console.log(squaredArr)
  }
  let finalArr = squaredArr.join('')
  finalNumber = parseInt(finalArr)
  return finalNumber
  }