import * as React from 'react';
import AddTodo from './application/addTodo';
import VisibleTodoList from './application/visibleTodoList';
import Footer from './components/footer';

// import logo from './../logo.svg';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
