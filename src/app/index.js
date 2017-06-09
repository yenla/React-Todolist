var React = require('react');
var ReactDOM = require('react-dom');

var routes = require("./routes");

require('./css/index.css');

//put component into HTML page

ReactDOM.render(routes, document.getElementById('todo-wrapper'));