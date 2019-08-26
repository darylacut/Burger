var orm = require("../config/orm.js");

var burger = {
    selectAll: function(bd) {
        orm.selectAll("burgers", function(res) {
            bd(res);
        });
    },

    insertOne: function(cols, vals, bd) {
        orm.insertOne("burgers", cols, vals, function(res) {
            bd(res);
        });
    },

    updateOne: function(objColVals, condition, bd) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            bd(res);
        });
    },

    delete: function(condition, bd) {
        orm.delete("cats", condition, function(res) {
            bd(res);
        });
    }
};

module.exports = burger;