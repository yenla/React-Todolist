var React = require('react');

var TodoComponent = React.createClass({
	// passing an object in the component
	// create an initial state with a property todos
	getInitialState: function(){
		return {
			todos:['shower', 'eat lunch', 'take a nap', 'buy flowers'],
		}
	},

	// the render method below is require
	render: function(){
		// create a map function to return the item from the array above and it index
		var todos = this.state.todos;
		todos = todos.map(function(item,index){
			return(
				// create another TodoItem components
				<TodoItem item={item} key={index} onDelete={this.onDelete} />
			);
		}.bind(this));
		// this is an JSX
		return(
			// we can pass in several method inside an object
			// out putting the todos state and props
			<div id="todos-list">
				<Link to="/about">About</Link>
				<p>the busiest people have the most leisure..</p>
				<ul>{todos}</ul>
				<AddItem onAdd={this.onAdd}/>
			</div>
		);
	}, // render

	// Custom functions
	onDelete: function(item){
		var updatedTodos = this.state.todos.filter(function(val, index){
			return item !== val;
		});
		this.setState({
          todos: updatedTodos
        });
	},

	onAdd:function(item){
		var updatedTodos = this.state.todos;
		updatedTodos.push(item);
		this.setState({
          todos: updatedTodos
        });
	},

	// life cycle functions

	componentWillMount:function(){
		console.log('componentWillMount');
	},
	componentDidMount:function(){
		console.log('componentDidMount');

		// any grabbing of external data
	},

	componentWillUpdate: function(){
		console.log('componentWillUpdate');
	}


});

module.exports = TodoComponent;