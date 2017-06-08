// Create TodoItem component
var React = require('react');
require('./css/todoItem.css')

var TodoItem = React.createClass({
	render:function(){
		return(
				<div className="todo-item">
					<span className="item-name">{this.props.item}</span>
					<span className="item-delete" onClick={this.handleDelete}> x </span>
				</div>
		);
	},

	// Custom functions
	handleDelete: function(){
		this.props.onDelete(this.props.item);
	}

});

module.exports = TodoItem;