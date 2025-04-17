import { use, useState } from "react";
import {nanoid} from 'nanoid'




// function handelSubmit(e){
    //     e.preventDefault();
    //     props.addTask('dire bonjour')
    // }
    
    
function Form(props){
    const [name, setName] = useState('')
    return (

        <form onSubmit={((e) =>{
            e.preventDefault();
            props.addTask(name)
            setName("")
        })}>
            <h1> To do list of the day</h1>
            <input type="text" value={name} onChange={((even) => setName(even.target.value))}/>
            <button type="submit" onClick={(() => {
                alert("task is add")
            })}> add </button>
        </form>

    )
}

function FilterButton(props){
    return (
        <button>
            <span>Afficher</span>
            <span>tout</span>
            <span>les taches</span>
        </button>
    )
}

function Todo(props){
    return (
        <>
        <li>
            <input type="checkbox"  defaultChecked={props.complete}/>
            <label id={props.id}> {props.name}</label>
            <button>edit</button>
            <button>remove</button>
        </li>
        </>
    )

}


const DATA = [
    { id:0, name:'create a task', completed:true,},
]

function deleteTask() {

}

function ToDoList() {
    const [tasks, setTask] = useState(DATA)
    const [text, setText] = useState('')
    const [index, setIndex] = useState(0)
    const todoLIst = tasks.map((task) =>
     <Todo name={task.name} complete={task.completed} id={task.id} key={task.id}/>
    )

    
    const headingText = `${taskList.length} taches reminds`
    
    return (
        <div>
            <Form addTask={((text) => {
                console.log('lebron james')
                const newTask = {id: `todo-${nanoid()}`, name:text, completed:false};

                setTask([...tasks, newTask])
                setIndex(index + 1);
            })}/>
            <div>
                <FilterButton/>
                <FilterButton/>
                <FilterButton/>
            </div>
            <h2> {index} tache restantes</h2>
            <hr />
            <ul>
                {todoLIst}
            </ul>
        </div>
    )

}

export default ToDoList;