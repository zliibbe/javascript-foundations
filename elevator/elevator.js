const createElevator = (name, floors, currentFloor, passengers) => {
  return {
     building: name,
     floors: floors,
     currentFloor: currentFloor,
     passengers: passengers
  }
}

const changeFloors = (elevatorObj, floor) => {
  if(floor === elevatorObj.currentFloor) return `You\'re already on floor ${floor}!`
  
  elevatorObj.currentFloor = floor;

  return `Taking you to floor ${floor}!`


}

const dropOffPassenger = () => {
  
}

module.exports = { 
  createElevator,
  changeFloors,
  dropOffPassenger
 };
