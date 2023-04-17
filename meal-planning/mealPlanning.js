const createMeal = (mealType, calorieGoal) => {
  let meal = {
    type: mealType,
    calorieGoal: calorieGoal,
    dishes: []
  }

  return meal
}

const addDish = (meal, dish) => {
  let calTotal = 0

  if (calTotal+dish.calories < meal.calorieGoal ) {
    meal.dishes.push(dish)
  }
  return meal
}

const calculateCalories = () => {
  
}

module.exports = { 
  createMeal,
  addDish,
  calculateCalories
}