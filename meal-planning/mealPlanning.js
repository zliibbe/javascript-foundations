const createMeal = (mealType, calorieGoal) => {
  let meal = {
    type: mealType,
    calorieGoal: calorieGoal,
    dishes: []
  }

  return meal
}

const addDish = (meal, dish) => {
let calTotal = 0;

  if (calTotal+dish.calories < meal.calorieGoal ) {
    meal.dishes.push(dish)
  }

  meal.calorieGoal -= dish.calories

  return meal
}

const calculateCalories = (meal) => {
  let totalCal = 0
  meal.dishes.forEach(dish =>{
      totalCal += dish.calories
  })
  
  return `${meal.type} has a total of ${totalCal} calories.`
}

module.exports = { 
  createMeal,
  addDish,
  calculateCalories
}