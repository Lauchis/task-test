// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { tasks } from './_tasks'
import { FormEvent, useRef, useState } from 'react'
import { firebase } from '../pages/firebase.js';

// console.log('list.js tasks', tasks)

// export default (req, res) => {
//   if(!req.query.todo){
//     retrun res.status(400).send("Please, enter a task");
//   }
//   let todo = encodeURI(req.query.todo)
//   return fetch("http://localhost:3000/")
//   .then(r => r.json());
//   .then(data => {
//     let result = JSON.stringify(data.result);
//     console.log('result', result)
//     return res.status(200).json(result)
//   })

// }


// ITASK {
//     name: string,
//     done: boolean
// }

export const List = () => {

    const [newTask, setNewTask ] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [id, setId] = useState(0);
    const theId = Number(id)
    const taskInput = useRef(null);
    const [edit, setEdit] = useState(false);
    // const taskRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(newTask)
        setNewTask('');
        taskInput.current?.focus();
        console.log(todoList)//lista de tareas completa
    }

    const addTask = ( title ) => {
        if(!newTask) {
            alert('Please, enter a task');
            taskInput.current?.focus();
        } else {
            const newTasks = [ ...todoList, { id: id, title, complete: false, color: '#00ff00' } ];
            setTodoList( newTasks )
            const newId = (Number(id) +1)
            setId (newId);
            console.log(newId);
        }
        taskInput.current?.focus();
    }
    // const handleEdit = () => {
    //     edit === false ? setEdit(true) : setEdit(false);
    // }
    const filterTask = (e) => {
        const todos = todoList;
        console.log(todos)
        todos.forEach(function(todo) {
            switch(e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "done":
                    if(todo.classList.contains("done")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "pending":
                    if(!todo.classList.contains("done")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
            }
        })
    }
    const editActivate = (item) => {
        setEdit(true);
        setTask(item.title); // para que salga el nombre de la tarea en el formulario
        setId(item.id);
      }
    
      const editTask = async (e) => {
        e.preventDefault();
    
        if (!task.trim()) {
          console.error('no task');
          return;
        }
    
        try {
          const db = firebase.firestore();
          // actualizamos la tarea en firebase
          await db.collection('tasks').doc(id).update({
            title : tarea
          })
    
          const arrayEditado = tasks.map( item => (
            item.id === id ? {id : item.id, title : tarea} : item
          ))
          
          // Actualizamdo estados
          setTasks(arrayEditado);
          setEdit(false);
          setTask('');
          setId('');
    
        } catch (error) {
          console.error(error);
        }
      }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setNewTask(e.target.value)}
                    value={ newTask }
                    ref={ taskInput }
                    placeholder='New Task'
                />
                {/* <button>ADD</button> */}
            </form>
            <ul>
                { todoList.map( (item, i) => (
                    <li key={i+1}>{item.title}</li>
                ) ) }
            </ul>
            <div>
                <select onChange={filterTask}>
                    <option value="all">All Tasks</option>
                    <option value="pending"> Pending Tasks</option>
                    <option value="done"> Done Tasks</option>
                </select>
            </div>
            <button onClick={handleSubmit}>ADD</button>
            {/* <button onClick={handleEdit}>MODIFY</button>             */}
        </div>
    );
}
