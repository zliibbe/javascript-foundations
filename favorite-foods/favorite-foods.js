const createFavoriteFood = (dishObj) => {
    return {
      name: dishObj.dish,
      ingredients: dishObj.ingredients,
      isSpicy: dishObj.isSpicy
    }
}


module.exports = { 
  createFavoriteFood
};