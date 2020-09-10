function alphanumeric(string){
    console.log(string)
    let regEx = "^[a-zA-Z0-9]*$"
    if (string.length === 0) {
      return false
    }else{
      return string.match(regEx) ? true : false 
    }
    
  }