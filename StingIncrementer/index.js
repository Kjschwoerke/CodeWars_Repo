function incrementString (string) {
    let str = string.split('')
    let numberArr = []
    let letterArr = []
    
    //find the numbers in the string and create a new array of just the numbers and a new array of just the letters
    str.forEach(findNums)
    
    function findNums(el, index) {
      if (el.match(/[0-9]/g)){ 
        numberArr.push(el)
      } else if (el !== " ") {
        letterArr.push(el)
      }
    }
    
    //change the value types of the items in the numberArr into actual integers & remove leading zeros
    let numberArray = numberArr.map(Number).filter(num => num !== 0)
    let number = numberArray.join('')
    let isAnArr = Array.isArray(numberArray)
    let integer = 1
    //console.log(numberArray)
    
    // add 1 to the number being incremented
    if(numberArray.length !== 0){
    number = parseInt(number) + 1
    } else if (numberArray.length === 0){
    numberArray.push(integer)
    number = integer
    }
    
    let newNumberArr = number.toString().split('')
    console.log(newNumberArr)
    //Set the lengths of the various arrays as variables, and define the difference between the arrays.
    let lengthStr = parseInt(str.length)
    let numArrLen = parseInt(newNumberArr.length)
    let letArrLen = parseInt(letterArr.length)
    let newTotal = numArrLen + letArrLen
    
    let difference = 0
      if (newTotal !== lengthStr) {
      difference = lengthStr - newTotal
      } else {
      difference = 0
      }
    let letterArray = letterArr 
    if (newTotal < lengthStr){
    for(let i=0; i<difference; i++){
      letterArray.push('0')
      }
    }
    
    
    let result = letterArr.join('') + number
    
    console.log("original array length: " + lengthStr)
    console.log('letter array length: ' + letArrLen)
    console.log('number array length: ' + numArrLen)
    console.log("result: " + letterArr.join('') + number)
    return result
  }