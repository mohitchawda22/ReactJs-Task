import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList'

function App() {

  return (
    <>
     <CreateTask/>
     <TaskList/>
    </>
  )
}

export default App
