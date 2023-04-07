const createHobbit = (name = 'unknown', age = '0') => {
  return {
    name: name,
    age: age,
    adult: false,
    isAdult: false,
    isOld: false,
    acquaintances: []
  }  
}

const celebrateBirthday = (hobbit, yearsAged = 1) => {
  if(hobbit.age > 31 && hobbit.isAdult === false) {
    hobbit.isAdult = true
  }
  if(hobbit.age >= 100) {
    hobbit.isOld = true
  }
  
  hobbit.age++

  return hobbit
}

const getRing = (hobbit) => {
  if (hobbit.name === 'Frodo') {
    return `Here is the ring!`
  }
  
  return 'You can\'t have it!'
}

const meetPeople = (hobbitObj, peopleArr) => {
  for (let i = 0; i<peopleArr.length; i++){
    hobbitObj.acquaintances.push(peopleArr[i])
  }
  return hobbitObj
}

const findFriends = (hobbitObj) => {
  console.log(hobbitObj);
  return hobbitObj.acquaintances.filter( hobbit => {
     return hobbit.relationship === 'friend'
  })
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}