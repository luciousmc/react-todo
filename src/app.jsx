import React from 'react';
import TodoForm from './todo-form';

const App = (props) => {
  return(
    <>
      <header className="header">
        <h1>Todo React App</h1>
      </header>
      <section className="section section-input-form">
        <Todoform />
      </section>
    </>
  );
};

export default App;
