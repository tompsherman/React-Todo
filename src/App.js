import React from 'react';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

const todo = [
  {
  name: "dishes",
  id: 1234,
  completed: false
  },
  {
    name: "mow lawn",
    id: 1235,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor( ){
    super()
    this.state ={
      todo
    }
  }

  addItem = (event, item) => {
    event.preventDefault()
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newItem]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem}/>
        </div> 
        <TodoList todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
