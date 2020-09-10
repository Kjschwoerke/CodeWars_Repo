const longestRepetition = (string) => {
    let letter = "",
        count = 0
        temp = 0
      for (let i = 0; i<string.length; i++) {
        
        
    
        if (string[i] === string[i+1] || [string[i+1] === undefined && string[i]=== string[i-1]] || [string[i-1] === undefined && string[i] === string[i+1]] || [string[i] === string[i-1 && string[i] !== string[i+1]]]) {
          temp = temp + 1
          console.log(temp)
    
          if (temp > count) {
            count = temp
            letter = string[i]
          }
        }
    
        if (string[i]!==string[i+1]) {
          temp = 0
        }
    
      }
    
      let result = [letter, count]
      
      console.log(result)
      return result
    }