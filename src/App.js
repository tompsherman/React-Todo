import React from 'react';
import TodoList from "./components/TodoList"

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


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
