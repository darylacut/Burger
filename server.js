var PORT = process.env.PORT || 8080;

var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exhb = require('express-handlebars');
app.engine('handlebars', exhb({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening: http://localhost:" + PORT);
});