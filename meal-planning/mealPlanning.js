const createMeal = (mealType, calorieGoal) => {
  let meal = {
    type: mealType,
    calorieGoal: calorieGoal,
    dishes: []
  }

  return meal
}

const addDish = () => {
  
}

const calculateCalories = () => {
  
}

module.exports = { 
  createMeal,
  addDish,
  calculateCalories
}