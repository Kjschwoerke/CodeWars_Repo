function solution(roman){
    let numberArr = []
    let romanArr = roman.split('')
    console.log(romanArr)
    
    for(i=0; i<romanArr.length; i++){
    let character = romanArr[i]
    console.log(character)
       if(roman.charAt(i) ==='I' && roman.charAt(i+1) === 'V'){
        numberArr.push(4)
        i= i+2
       }
       else if(roman.charAt(i) ==='I' && roman.charAt(i+1) === 'X'){
        numberArr.push(9)
        i= i+2
       }
       else if (roman.charAt(i) === 'I'){
       numberArr.push(1)
       } 
       else if (character === 'V'){
       numberArr.push(5)
       }
       else if (character === 'X'){
       numberArr.push(10)
       }
       else if (character === 'L'){
       numberArr.push(50)
       }
       else if (character === 'C'){
       numberArr.push(100)
       }
       else if (character === 'D'){
       numberArr.push(500)
       }
       else if (character === 'M'){
       numberArr.push(1000)
       }
       
      }  
      function sumFunction(total, num){ 
        return total + num
      }
      return numberArr.reduce(sumFunction)
    }