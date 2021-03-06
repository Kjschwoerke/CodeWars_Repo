function solution(input, markers){
    var results = [];
    var arr = input.split('\n');
    var counter = [];
    for(var i = 0; i < markers.length; i++){
      for(var j = 0; j < arr.length; j++){
        if(arr[j].indexOf(markers[i]) !== -1){
          var index = arr[j].indexOf(markers[i]);
          results[j] = arr[j].slice(0, index);
          counter.push('a');
        }else if(counter[j] !== 'a'){
          results[j] = arr[j];
          counter.push(j);
        }
      }
    }
    results = results.map(val => val.trim());
    return results.join('\n');
  }
  var results = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);
  console.log(results);