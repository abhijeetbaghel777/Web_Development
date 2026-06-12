import React, { useReducer } from "react";

const New = () => {
  const initialData = {
    input: "",
    todos: [],
  };

  function reducer(state, action) {
    switch (action.type) {
      case "SET_INP":
        return {
          ...state,
          input: action.payload,
        };

      case "ADD_TODO":
        if (state.input.trim() === "") {
          return state;
        }

        return {
          ...state,
          todos: [...state.todos, state.input],
          input: "",
        };
      case "DELETE_TODO":
        return{
             ...state,
          todos: state.todos.filter((_, index) => index !== action.payload),
        };


      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={state.input}
        onChange={(e) =>
          dispatch({
            type: "SET_INP",
            payload: e.target.value,
          })
        }
      />

      <button
        onClick={() =>
          dispatch({
            type: "ADD_TODO",
          })
        }
      >
        Add Task
      </button>
      <div>
  {state.todos.map((todo, index) => (
    <div key={index}>
      <span>{todo}</span>

      <button
        onClick={() =>
          dispatch({
            type: "DELETE_TODO",
            payload: index,
          })
        }
      >
        Delete
      </button>
    </div>
  ))}
</div>



    </div>
  );
};

export default New;