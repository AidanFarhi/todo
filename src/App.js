import React from 'react'
import TodoItem from './TodoItem'
import todoItems from './todoItems'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoItems
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return (
      <div className='todo-list'>
        {todoComponents}
      </div>
    )
  }
}

export default App
