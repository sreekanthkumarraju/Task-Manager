import React,{useState} from 'react';
import {Form} from 'reactstrap';
import {v4} from 'uuid';
import Todos from './Todos';
import styled from 'styled-components'

function TodoForm(){
    const [title,setTitle]=useState('')

    const [todos,setTodo] =useState([])

    const handleChange=(event)=>{
        setTitle(event.target.value)
    }  

    const removeTodo=(id)=>{
        // console.log(id)
        // const allTodos=todos.filter((todo,index)=>{
        //     if(todo.id!==id)
        //       return todo

               
        // })
        // setTodo(allTodos)

        setTodo(todos.filter(todo=>todo.id!==id))

    }

    const handleSubmit=(event)=>
    {
        event.preventDefault();
        const todo={
            title,
            id:v4()
        }
        console.log(...todos)
        setTodo([...todos,todo])
        console.log(todos)
    }

    const removeTasks=()=>{
        setTodo([])
    }

    return(
    <div>
        <Container>
        
         <Form onSubmit={handleSubmit}>
            
                   <input  
                     type='text' 
                     name='todo'
                     onChange={handleChange}
                   />
                 

                 <button type='submit' id='add'>Add Task</button>
             
         </Form> 

             <button type='button' id='remove' onClick={removeTasks}>Remove Tasks</button>
        

           <Todos todos={todos} removeTodo={removeTodo}/>
         </Container>
    </div>
    )
}

export default TodoForm;

const Container=styled.div`
  
form{
    margin:100px 500px 0;
}

input{
    width:300px;
    height:30px;
}

input :focus{
    border-color:red;
}

button{
    width:150px;
    height:30px;
    border-radius:30px;
}
#add{
    margin:10px 80px;
}
#remove{
    margin:10px 580px;
}

  
`