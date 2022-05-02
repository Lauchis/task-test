import Head from 'next/head'
import styles from '../styles/main.module.css'
import React, { useState, useEffect, useRef} from 'react'
import { List } from '../pages/api/tasks/list.js';
import { firebase } from './firebase.js';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const taskRef = useRef();
  const buttonRef = useRef();
  const alertRef = useRef();
  // const listRef = useRef();
  const onChange = () => {};
  console.log('tasks',tasks);
  let changeHandler = (event) => {
    setTasks(event.target.value)
  }
  for (let i = 0; i < tasks.length; i++) {
    var listTasks = tasks[i];
    console.log('list', listTasks);
    var tareas = (<li>{listTasks}</li>)
    console.log(tareas);
    // return (tasks[i])
  }

//   let addTodo = (event) => {
//     // setLoading(true)
//     event.preventDefault();
//     fetch('/')
//         .then(res => res.json())
//         .then(data => {
//             loadTodos()
//         })
// }

  useEffect(() => {
    const saveTasks = JSON.parse(localStorage.getItem('task'));
    if(saveTasks) {
      setTasks(saveTasks);
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks));
  }, [tasks])

  // function noTask() {
  //   return { __html: '<div><code>Escriba la tarea :)</code></div>' };
  // }
  // function handleAddTask() {
  //   if(!taskRef.current.value) {
  //     // alertRef.current.innerHTML = noTask().__html;
  //     console.log('no_task')
  //     alert('Please, enter a task');
  //     taskRef.current.focus();
  //   } else {
  //     // alertRef.current.innerHTML = "";
  //     console.log('task succesfully');
  //     tasks.push(taskRef.current.value)
  //     console.log('new tasks', tasks)
  //   }
  //   const name = taskRef.current.value;
  //   console.log(name);
  //   console.log(alertRef.current.value);//undefined
  //   if(name === '') return
  //   setTasks(prevTasks => {
  //     return [...prevTasks]
  //   })
  //   taskRef.current.value = null;
  //   taskRef.current.focus()
  // }
  // var tasList = tasks.map(function(t){
  //   return (<li>{listTasks}</li>)
  // })
  // console.log(tasList)
  function handleClearTask() {
    const task = tasks.filter(task => !task.complete)
    setTasks(task)
  }

  function handleEnter(event) {
    if (event.key === 'Enter') {
      handleAddTask()
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>TODO LIST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          TODO LIST
        </h1>

        <p className={styles.description}>
          TODO LIST
        </p>

        <List />
        {/* <div className={styles.grid}>
          <div className={styles.card}>
          <ul>
            <li>{listTasks}</li>
            <input type="checkbox"/>
          </ul>
          </div>

          <div className={styles.card}>
          <ul>
            <div class='checkbox-wrapper'></div>
            <input type="checkbox"/>
          </ul>
          </div> */}
{/* 
          <div className={styles.card}>
            <input placeholder='New Todo' name='name' ref={taskRef} type="text" onKeyDown={handleEnter} autoFocus />
            <div ref={alertRef}></div>
          </div> */}
          <div className="container p-3">

                           {/* <form className={styles.card} onSubmit={addTodo}>
                               <input type="text"
                                      name="todo" onChange={changeHandler}
                                      placeholder="Enter your exciting TODO item!"/>
                           </form> */}
     

      {/* <div className="dropdown m-3">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          id="dropdownMenuButton1"
          aria-expanded="false"
        >
          Status (Pending / In Progress / Done) 
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Pending
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              In Progress
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Done
            </a>
          </li>
        </ul>
      </div>
      </div> */}
     

        {/* <div style={{ padding: 100 }}>
          <button type="primary">Button</button>
        </div> */}
        {/* <button onClick={handleAddTask} type='submit'>ADD</button>
        <button>MODIFY</button> */}
        </div>
      </main>
    </div>
  )
}
