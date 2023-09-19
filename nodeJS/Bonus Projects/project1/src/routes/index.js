////Get Meals MENU Controller 
mealsController = require("../controllers/mealsController");

exports.appRoute = router => {
  router.get("/menu", mealsController.getMenuController);
};

/* you have to call the appRoute function on the 
bootstrap module and pass it the router to make sure it
 does the linking process of routes with their
  specified controllers.*/