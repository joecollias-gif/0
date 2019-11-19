import React, {Component} from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css';

class App extends Component {
  state={
    todos:[
      {
        id: 1,
        title:'Put copier in front yard',
        completed:false
      },
      {
        id: 2,
        title:'Get towels off roof',
        completed:true
      },
      {
        id: 3,
        title:'Tow car from lake',
        completed:false
      },
    ]
  }
  //toggle complete
  markComplete=(id)=>{
    this.setState({ todos:this.state.todos.map(todo=>{if(todo.id===id){
      todo.completed=!todo.completed
    }
    return todo;
  })});
  }
  //delete todo
  delTodo=(id)=>{
    this.setState({ todos: [...this.state.todos.filter(todo=> todo.id !==id)] });
  }
  render(){
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo/>
          <Todos todos={this.state.todos} markComplete={this.markComplete}
          delTodo={this.delTodo} />
        </div>
       
      </div>
    );
  }
}

export default App;
