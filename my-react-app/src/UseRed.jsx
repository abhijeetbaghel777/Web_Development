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

const UseRed = () => {
    let initialData={
        input:"",
        todos:[]
    }
    function reducer(state,action){
        if(action.type=="set_input"){
            return{
                ...state,input:action.payload
            }
        }else if(action.type=="add_TODO"){
            return{
                input:"",
                todos:[...state.todos,state.input]
            }
        }
        
    }
    let [state,dispatch]=useReducer(reducer,initialData)
  return (
    
    <div>
        <input  onClick={(e)=>dispatch({type:"set_input",payload:e.target.value})} />
        
        <button onClick={()=>dispatch({type:"add_todo"})}>add</button>
         {
            state.todos.map((a)=>{
                return(<>
                <h2>{a}</h2>
                </>)
            })
        }
    </div>
  )
}

export default UseRed