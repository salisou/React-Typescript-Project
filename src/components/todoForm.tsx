import React, { Dispatch, SetStateAction, useState } from "react";
import TodoTypes from "../todo";
import TodoService from "../todoService";

interface PropTypes {
    setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoForm: React.FC<PropTypes> = ({ setTodos }) => {
    const [newTodoText, setNewTodoText] = useState<string>("");

    const handleAddTodo = () => {
        const trimmedText = newTodoText.trim();
        if (trimmedText.length > 0) {
            const newTodo = TodoService.addTodos(trimmedText);
            setTodos((prevTodo) => [...prevTodo, newTodo]);
            setNewTodoText("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleAddTodo();
        }
    };

    return (
        <div className="inputForm">
            <input
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                placeholder="Enter a new todo..."
            />
            <button onClick={handleAddTodo} aria-label="Aggiungi nuovo todo">
                Add Todo
            </button>
        </div>
    );
};

export default TodoForm;
