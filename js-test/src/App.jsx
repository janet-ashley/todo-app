import Counter from './component/Count'
import  TasksPage from './component/tasksPage'
import './App.css'
import AddTask from './component/AddTask'
import TaskList from './component/TaskList'
function App() {

  return (
    <div className='main'>
     <h1 className= 'h1'>To Do List</h1>
      <AddTask />
      <TaskList/>
      
    </div>
  )
}

export default App