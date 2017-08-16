module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
    	type: DataTypes.STRING, 
    	validate: {
    		len: [1, 140]
    	},
    	allowNull: false,
    },
    devoured: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
    }
  });
  return Burger;
};

