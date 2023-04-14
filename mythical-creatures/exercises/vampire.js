const createVampire = (name, pet = 'bat') => {
  return vampire = {
    name: name,
    pet: pet, 
    thirsty: true,
    ouncesDrank: 0, 
    
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

const findBatLovers = (vampires) => {
  let batlovers =  vampires.filter(vampire => vampire.pet === 'bat')

  for(let i=0; i< batlovers.length; i++){
    batlovers[i] = batlovers[i].name
  }
  return batlovers
}

const encounterDeliciousVictim = (vampire) => {
  if(vampire.ouncesDrank >= 50) {
    return `No thanks, I am too full.`
  }
  
  return 'I WANT TO SUCK YOUR BLOOD!'
}

const inquirePlace = (locations, location) => {
  if (locations.includes(location)) {
    return `Yes, I have spent some time in ${location}.`
  } else {
    return `No, I have never been to ${location}.`
  }
  
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}