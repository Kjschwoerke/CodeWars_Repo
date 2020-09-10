function findUniq(arr) {
    console.log(arr)
      let num = arr[0]
      
      if (arr[0] !== arr[1] && arr[0] !== arr[2]){
        return arr [0]
      }
      
      for (i = 1 ; i< arr.length; i++){
          if (arr[i-1]!=arr[i] && arr[i-1]!=num){
          return arr [i-1]
          break
        } else if (arr[i-1]!=arr[i] && arr[i]!=num){
          return arr[i]
          break
        }
      }
      
    }