import { useEffect, useState } from "react"

function Todos() {
    const [todos, setTodos] = useState(() => { // lazy initializer
        try {
            return JSON.parse(localStorage.getItem("unsere-todo-liste") ?? []) // nullish coalescence
        } catch(error) {
            console.warn(error)
            return []
        }
    })
    const [input, setInput] = useState("")
    
    useEffect(() => {
        localStorage.setItem("unsere-todo-liste", JSON.stringify(todos))
    }, [todos])

    return (
        <>
            <h1>Todos</h1>
            <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />
            <button onClick={() => {
                setTodos((currentTodos) => {
                    return [
                        ...currentTodos,
                        input,
                    ]
                })
                setInput("")
            }}>Add</button>
            <ul>
                {
                    todos.map((todo) => <li key={todo}>{todo}</li>)
                }
            </ul>
        </>
    )
}

export default Todos