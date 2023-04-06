const createDragon = (name, rider, temperment) =>  {

  return dragon = {
      name: name,
      rider: rider, 
      temperment: temperment,
      timesEaten: 0,
      hungry: true
    }
}

const greetRider = (dragonObj) => {

  return `Hi, ${dragonObj.rider}!`
}

const eat = (dragonObj) => {
  if (dragonObj.timesEaten < 3) {
    dragonObj.timesEaten++
  } 
  
  if (dragonObj.timesEaten > 2) {
    dragonObj.hungry=false
  }

  return dragonObj
}

const findFireBreathers = (dragonArr) => {
  return dragonArr.filter((dragon) => dragon.temperment === 'aggressive')
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}