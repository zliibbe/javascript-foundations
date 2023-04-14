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
    let friends = hobbitObj.acquaintances.filter( hobbit => {
      if(hobbit.relationship === 'friend') {
        return hobbit.name
      }
    })

      for(let i=0; i< friends.length; i++){
        friends[i] = friends[i].name
      }
      return friends
  }


module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}