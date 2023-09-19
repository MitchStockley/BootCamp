//import meals model for the database
const mealModel = require("../models/mealModel");
//menu controller takes the request, response and next object 
exports.getMenuController = (req, res, next) => {
  //Get menu meals from model (Array)
  const meals = mealModel.getMeals();

  res.render("menu", { meals });
};
