const createVampire = (name, pet = 'bat') => {
  return vampire = {
    name: name,
    pet: pet, 
    thirsty: true,
    ouncesDrank: 0
  }
}

const drink = (vampire) => {
  vampire.ouncesDrank += 10

  return vampire
}

const findBatLovers = () => {
  
}

const encounterDeliciousVictim = (vampire) => {
  return 'I WANT TO SUCK YOUR BLOOD!'
}

const inquirePlace = () => {
  
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}