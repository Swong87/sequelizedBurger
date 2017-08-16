
var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function(dbBurger) {
      // We have access to the burgers as an argument inside of the callback function
      // res.json(dbBurger);
      var hbsObject = {
        burgers: dbBurger
      };

      res.render("index", hbsObject);
    });

  });

  // POST route for saving a new burger
  app.post("/", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a text and
    // complete property
    db.Burger.create({
      burger_name: req.body.name
    }).then(function(dbBurger) {
      // We have access to the new burger as an argument inside of the callback function
      // res.json(dbBurger);
      res.redirect("/");
    });

  });

  // DELETE route for deleting burgers. We can get the id of the burger to be deleted
  // from req.params.id
  app.delete("/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the burgers we want to destroy
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbBurger) {
      // res.json(dbBurger);
      res.redirect("/");
    });

  });

  // PUT route for updating burgers. We can get the updated burger data from req.body
  app.put("/:id", function(req, res) {
    var condition = req.params.id;
    db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: condition
      }
    })
    .then(function() {
      // res.json(dbBurger);
      res.redirect("/");
    });

  });
};
