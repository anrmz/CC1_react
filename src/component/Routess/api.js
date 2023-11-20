import React, { useState, useEffect } from 'react';
import './api.css'
import axios from 'axios';


function Api() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=15`)
      .then(res => setTodos(res.data))
      .catch(error => console.error(error));
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button className='handlePreviousPage' onClick={handlePreviousPage}>Précédent</button>
      <button className='handleNextPage' onClick={handleNextPage}>Suivant</button>
    </div>
  );
}

export default Api;
