const createFavoriteFood = (dishObj) => {
    return {
      name: dishObj.dish,
      ingredients: dishObj.ingredients,
      isSpicy: dishObj.isSpicy,
      timesOrdered: 0
    }
}

const commentOnSpiciness = (dishObj) => {
  if(dishObj.isSpicy) {
    return `Wow, this ${dishObj.name} is so spicy!`
  }
  
  return `Phew, this ${dishObj.name} is not very spicy.`
}

const orderFood = (dishObj) => {
    dishObj.timesOrdered++
    return dishObj
}

const createShoppingList = (dishes) => {
  const list = []
  dishes.forEach(dish => {
    list.push(dish.ingredients)
  })

  return list.flat()
}


module.exports = { 
  createFavoriteFood,
  commentOnSpiciness,
  orderFood,
  createShoppingList
};