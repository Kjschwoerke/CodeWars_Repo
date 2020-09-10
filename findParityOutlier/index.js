function findOutlier(integers){
    let int = integers
    let evenArr = []
    let oddArr =[]
    int.forEach(evenOdd)
    
    function evenOdd(el, i){
       if (el%2===0) {
       evenArr.push(el)
       } else if (el%2!==0){
       oddArr.push(el)
       }
     }
     
     //console.log('evenArr ' + evenArr)
     //console.log('oddArr ' + oddArr)
     
     if(evenArr.length === 1){
     return evenArr[0]
     } else if (oddArr.length === 1) {
     return oddArr[0]
     } else {
     return "there is no outlier"
     }
  }