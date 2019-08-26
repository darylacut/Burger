var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
        arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


var orm = {
    selectAll: function(tableInput, bd) {
        var qString = "SELECT * FROM " + tableInput + ";";
        connection.query(qString, function(err, result) {
            if (err) {
                throw err;
            }
            bd(result);
        });
    },

    insertOne: function(table, cols, vals, bd) {
        var qString = "INSERT INTO " + table;

        qString += " (";
        qString += cols.toString();
        qString += ") ";
        qString += "VALUES (";
        qString += printQuestionMarks(val.length);
        qString += ") ";

        console.log(qString);

        connection.query(qString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            bd(result);
        });
    },

    updateOne: function(table, objColVals, condition, bd) {
        var qString = "UPDATE " + table;

        qString += " SET ";
        qString += objToSql(objColVals);
        qString += " WHERE ";
        qString += condition;

        console.log(qString);

        connection.query(qString, function(err, result) {
            if (err) {
                throw err;
            }
            bd(result);
        });
    },

    delete: function(table, condition, bd) {
        var qString = "DELETE FROM " + table;
        
        qString += " WHERE ";
        qString += condition;

        connection.query(qString, function(err, result) {
            if (err) {
                throw err;
            }

            bd(result);
        });
    }
};

module.exports = orm;