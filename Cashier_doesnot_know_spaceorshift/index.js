function getOrder(input) {
    let s = input
    
    s = s.replace(/burger/gi, "Burger ")
    s = s.replace(/fries/gi, "Fries ")
    s = s.replace(/chicken/gi, "Chicken ")
    s = s.replace(/pizza/gi, "Pizza ")
    s = s.replace(/sandwich/gi, "Sandwich ")
    s = s.replace(/onionrings/gi, "Onionrings ")
    s = s.replace(/milkshake/gi, "Milkshake ")
    s = s.replace(/coke/gi, "Coke ")
    let sArr = s.split(' ')
    let orderArr = []
    
    for (let i = 0; i<sArr.length; i++) {
      (sArr[i]==='Burger') ? orderArr.push(sArr[i]) : orderArr = orderArr
    }
    for (let i = 0; i<sArr.length; i++) {
      (sArr[i]==='Fries') ? orderArr.push(sArr[i]) : orderArr = orderArr
    }
    for (let i = 0; i<sArr.length; i++) {
      (sArr[i]==='Chicken') ? orderArr.push(sArr[i]) : orderArr = orderArr
    }
    for (let i = 0; i<sArr.length; i++) {
      (sArr[i]==='Pizza') ? orderArr.push(sArr[i]) : orderArr = orderArr
    }
    for (let i = 0; i<sArr.length; i++) {
      (sArr[i]==='Sandwich') ? orderArr.push(sArr[i]) : orderArr = orderArr
    }
    for (let i = 0; i<sArr.length; i++) {
      (sArr[i]==='Onionrings') ? orderArr.push(sArr[i]) : orderArr = orderArr
    }
    for (let i = 0; i<sArr.length; i++) {
      (sArr[i]==='Milkshake') ? orderArr.push(sArr[i]) : orderArr = orderArr
    }
    for (let i = 0; i<sArr.length; i++) {
      (sArr[i]==='Coke') ? orderArr.push(sArr[i]) : orderArr = orderArr
    }
  
  
    return orderArr.join(' ')
  }
  