function produceDrivingRange(dist) {
  return function(tripA, tripB){

          let tripDistance = parseInt(tripB.substring(0, tripB.length - 2)) - parseInt(tripA.substring(0, tripA.length - 2))
          tripDistance = Math.abs(tripDistance)
          debugger;
    if (tripDistance < dist){
      return `within range by ${dist - tripDistance}`
    }
    else if (tripDistance > dist) {
      return `${tripDistance - dist} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare){
    return fare * tip
  }
}



function createDriver(){
  let driverId = 0

  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}

debugger;
