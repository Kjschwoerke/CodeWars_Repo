function ipsBetween(start, end) {
    var result = 0;
    var s = start.split('.');
    var e = end.split('.');
    
    for (var i = 0; i < 4; i++) {
      result += (parseInt(e[i]) - parseInt(s[i])) * Math.pow(256, 3 - i);
    }
    
    return result;
  }