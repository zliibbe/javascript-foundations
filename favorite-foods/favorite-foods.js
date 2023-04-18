const createFavoriteFood = (dishObj) => {
    return {
      name: dishObj.dish,
      ingredients: dishObj.ingredients
    }
}


module.exports = { 
  createFavoriteFood
};