var React = require('react');
var ReactDOM = require('react-dom');

var router = require("react-router");

var Link = require("react-router").Link;

var Router = router.Router;

var Route = router.Route;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');
var TodoComponent = require('./todo');

// Export the Routes
module.exports = (
    <Router history={hashHistory}>
        <Route path="/" component={TodoComponent} />
        <Route path="/about" component={About} />
    </Router>
);