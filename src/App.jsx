import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
export default function App() {
  const [todos, setTodo] = useState([]);

  useEffect(() =>{

    getData();
  },[]);

  const getData =async() =>
  {

  try{
    const incomingData =await fetch('https://jsonplaceholder.typicode.com/todos');
    const formattedData = await incomingData.json();
    setTodo(formattedData);
    console.log(formattedData);
  }
  catch(error){
    console.log(error);
  }
  };
  return (
    <div>

      <Container className=" my-5">
        <h1 className="my-5 text-container dispaly-2"> TODO LIST</h1>
      
      <Table striped bordered hover>
      <thead>
        </thead>
        <tbody>
        {todos.map((todo,i)=>(
          <tr key={todo.i}>
            <td>{i+1}</td>
            <td style={{ color: todo.completed ? 'green' : 'red' }}>{todo.title}</td>
            <td>{todo.completed?"completed":"pending"}</td>
            <td>
      {todo.completed ? (
        <span>&#10003;</span> // Green tick mark for true
      ) : (
        <span>&#10005;</span> // Red cross for false
      )}
    </td>

          </tr>
        ))}
      </tbody>
    </Table>
    </Container>
    </div>
  );
}
