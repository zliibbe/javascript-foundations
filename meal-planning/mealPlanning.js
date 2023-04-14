const createMeal = (mealType, calorieGoal) => {
  let meal = {
    type: mealType,
    calorieGoal: calorieGoal,
    dishes: []
  }

  return meal
}

const addDish = (meal, dish) => {
  meal.dishes.push(dish)
  return meal
}

const calculateCalories = () => {
  
}

module.exports = { 
  createMeal,
  addDish,
  calculateCalories
}