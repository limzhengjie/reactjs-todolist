import React from 'react'
import { useState } from 'react'

export default function ToDoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder='Enter todo..'></input>
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}> Add </button>
        </header>
    )
}
