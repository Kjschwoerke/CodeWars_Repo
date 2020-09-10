const encrypter = (string) => {
    const str = string, 
          strArr = str.split(''),
          alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
    let encrypted13 = []
    let encrypted13Rev = []
    //encrypt the initial ROT13
    for (let x = 0; x<strArr.length; x++)
        if (strArr[x] === " ") {
            encrypted13.push(" ")
          } else if (strArr[x] !== " ") {
            for (let y = 0; y<alpha.length; y++) {
             if (strArr[x] === alpha[y] && y + 13 < 26) {
              encrypted13.push(alpha[y+13])
            }
            else if (strArr[x] === alpha[y] && y + 13 >= 26){
              encrypted13.push(alpha[(y + 13) - 26])
            }
          }
      }
    
      console.log(encrypted13)
    
      //Reverse the ROT13 encryption
      const reverseEncrypter = (encrypted13) => {
        for (i = 0; i<encrypted13.length; i++) {
          if(encrypted13[i] === " "){
              encrypted13Rev.push(" ")
            } 
            else if (encrypted13[i] !== " ") {
              for (j = 0; j<alpha.length; j++) {
                if (encrypted13[i] === alpha[j]) {
                  encrypted13Rev.push(alpha[Math.abs(j-25)])
                } 
              }
            }
        }
      }
    
    reverseEncrypter(encrypted13)
    
    let result = encrypted13Rev.join('')
    return result
    }