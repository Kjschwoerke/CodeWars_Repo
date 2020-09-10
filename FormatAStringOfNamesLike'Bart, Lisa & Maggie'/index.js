function list(names){
    //array is only to get the string data from the objects
    let array = []
    let newArray = []
    
    //this is turning the array of objects into an iterable array
    for(let i = 0; i<names.length; i++){
        let content = Object.values(names[i])
        array.push(content)
        }
      
      for (let a = 0; a<array.length; a++){
        let content = array[a][0]
        newArray.push(content) 
      }
      if (names.length > 1){
      let lastName = newArray.pop()
      let initialNames = newArray.join(', ')
      let result = initialNames +' & '+lastName
      
       return result
       } else if (names.length === 1){
       return newArray[0]
       }else{
       return ''
       }
      
    }