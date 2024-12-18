import { FaClipboardList, FaPen } from "react-icons/fa"
import TodoList from "./components/todoList"
import "./css/App.css"
import "./css/TodoList.css"
import "./css/TodoForm.css"

function App() {

  return (
    <div className="App">
      <div className="header">
        <div className="logoside">
          <FaPen />
          <h1>Cosa Faccio Oggi?</h1>
          <FaClipboardList />
        </div>
      </div>
      <TodoList />
    </div>
  )
}

export default App
