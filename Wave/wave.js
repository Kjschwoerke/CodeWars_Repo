function wave(str){
    let arr = []
    str = str.toLowerCase()
  for (let i = 0; i<str.length; i++) {
    //Create an Array from the string
      let sArr = Array.from(str)
    //Change the letter at index(i) to upper case
      let temp = str.charAt(i).toUpperCase()
    //if the charAt(i) is not equal to a space then change the charAt(i) to a capital letter and push the result to arr
      if (sArr[i] !== " "){
        sArr.splice(i, 1, temp)
        arr.push(sArr.join('').toString())
      }
    }
    return(arr)
  }

  console.log(wave('This'))
  console.log(wave('this is a test'))