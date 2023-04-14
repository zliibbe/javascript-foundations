const createVampire = (name, pet = 'bat') => {
  return vampire = {
    name: name,
    pet: pet, 
    thirsty: true,
    ouncesDrank: 0
  }
}

const drink = (vampire) => {
  if(vampire.thirsty === true) {
    vampire.ouncesDrank += 10
    if (vampire.ouncesDrank >= 50) {
      vampire.thirsty = false
    }
  }

  return vampire
}

const findBatLovers = () => {
  
}

const encounterDeliciousVictim = (vampire) => {
  if(vampire.ouncesDrank >= 50) {
    return `No thanks, I am too full.`
  }
  
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