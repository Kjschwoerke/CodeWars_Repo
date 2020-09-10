function manhattanDistance(pointA, pointB){
    let a = pointA, 
        b = pointB, 
        difX = Math.abs(b[0]-a[0]), 
        difY = Math.abs(b[1]-a[1]),
        dist = difX + difY
    
    return dist
  }