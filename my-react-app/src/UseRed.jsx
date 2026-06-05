// import React, { useReducer } from 'react'

// const UseRed = () => {
//     let [count,dispatch]=useReducer(reducer,0);
//     function reducer(count,action){
//         if(action.type=="inc"){
//             return count+1
//         }
//         else if(action.type=="dec"){
//             return count-1
//         }
//         else if(action.type=="res"){
//             return 0
//         }
//         return count
//     }
//   return (
//     <div>
//         <h1>Counter</h1>
//         <h2>{count}</h2>
//         <button onClick={()=>dispatch({type:"inc"})}>++</button>
//         <button onClick={()=>dispatch({type:"dec"})}>--</button>
//         <button onClick={()=>dispatch({type:"res"})}>reset</button>
//     </div>
//   )
// }

// export default UseRed
import React, { useReducer } from 'react'

const Todo = () => {

    const initialData = {
        input: "",
        todos: [],
        editIndex: null
    }

    function reducer(state, action) {

        switch (action.type) {

            case "set_input":
                return {
                    ...state,
                    input: action.payload
                }

            case "add_TODO":

                if (state.input.trim() === "") {
                    return state
                }

                if (state.editIndex !== null) {

                    const updatedTodos = [...state.todos]
                    updatedTodos[state.editIndex] = state.input

                    return {
                        ...state,
                        todos: updatedTodos,
                        input: "",
                        editIndex: null
                    }
                }

                return {
                    ...state,
                    todos: [...state.todos, state.input],
                    input: ""
                }

            case "delete_todo":
                return {
                    ...state,
                    todos: state.todos.filter((_, i) => i !== action.payload)
                }

            case "edit_todo":
                return {
                    ...state,
                    input: state.todos[action.payload],
                    editIndex: action.payload
                }

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialData)

    return (
        <div>
            <h1>TODO LIST</h1>
            <input
                value={state.input}
                onChange={(e) =>
                    dispatch({
                        type: "set_input",
                        payload: e.target.value
                    })
                }
            />

            <button
                onClick={() =>
                    dispatch({
                        type: "add_TODO"
                    })
                }
            >
                {state.editIndex !== null ? "Update" : "Add"}
            </button>

            {
                state.todos.map((todo, index) => (
                    <div key={index}>
                        <h2>{todo}</h2>

                        <button
                            onClick={() =>
                                dispatch({
                                    type: "edit_todo",
                                    payload: index
                                })
                            }
                        >
                            Edit
                        </button>

                        <button
                            onClick={() =>
                                dispatch({
                                    type: "delete_todo",
                                    payload: index
                                })
                            }
                        >
                            Delete
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default Todo