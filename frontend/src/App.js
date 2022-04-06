import React, {useState} from 'react';
import './App.css';

const todoItems = [
  {
    id: 1,
    title: "Go to Market",
    description: "Buy ingredients to prepare dinner",
    completed: true,
  },
  {
    id: 2,
    title: "Study",
    description: "Read Algebra and History textbook for the upcoming test",
    completed: false,
  },
  {
    id: 3,
    title: "Sammy's books",
    description: "Go to library to return Sammy's books",
    completed: true,
  },
  {
    id: 4,
    title: "Article",
    description: "Write article on how to use Django with React",
    completed: false,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>{todoItems.map((item)=>{
        return(
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h5>{item.completed ? 'Done':"To Do" }</h5>
          </div>)
      })}
      </div>
      </header>
    </div>
  );
}

export default App;
