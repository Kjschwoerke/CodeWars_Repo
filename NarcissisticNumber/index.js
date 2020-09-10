function narcissistic(value) {
    //change the input value to a string and split into an array
    value = value.toString()
    let numArr = value.split('')
    let valueArr = []
    let exponent = numArr.length
    
    //convert the elements in the array back into Integers
    for (let i=0; i<numArr.length; i++){
      valueArr.push(parseInt(numArr[i], 10))
    }
    
    //raise the numbers to the appropriate power
    const raise = (el, index) => Math.pow(el, exponent)
    valueArr = valueArr.map(raise)
    
    //add the resulting numbers together
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let narcNums = valueArr.reduce(reducer)
    
    //create an if statement to return whether the number is "narcissistic"
    if(narcNums == value){
      console.log(`${narcNums} is narcissistic`)
      return true  
    } else {
    console.log(`${narcNums} is not narcissistic`)
      return false  
    }
    
    }