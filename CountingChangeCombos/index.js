var countChange = function(money, coins) {
    let arr = []
    for (let i = 0; i <= money; i++) {
      arr[i] = 0
    }
     arr[0] = 1
     
     for (let j = 0; j <coins.length; j++) {
       let coin = coins[j]
       
       for (let currCoin = coin; currCoin <= money; currCoin++) {
         let remainder = currCoin - coin 
         arr[currCoin] += arr[remainder]
       }
     }
     return arr[money]
   }