function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let sharkspeed = !dolphin ? sharkSpeed = sharkSpeed : sharkSpeed = sharkSpeed/2,
        me = pontoonDistance/youSpeed,
        shark = sharkDistance/sharkspeed,
        result = me < shark ? "Alive!" : "Shark Bait!"
      
    return result
  }

  //Given distances and speeds of you a boat and a shark, determine if you can make it to the boat before the shark eats you.  Dolphin is a Boolean that if true halves the speed of the shark.