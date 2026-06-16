// import { createContext, useReducer } from "react";

// let C=  createContext()
// export default C
// let data={
//     apiData:[],
//     cart:[]
// }

// const Context=({children})=>{
//    function reduser(state, action) {
//   if (action.type === "add_Data") {
//     return {
//       ...state,
//       apiData: action.payload,
//     };
//   }

//   if (action.type === "ADD_TO_CART") {
//     return {
//       ...state,
//       cart: [...state.cart, action.payload],
//     };
//   }

//   return state;
// }
//   let [state,dispatch]=  useReducer(reduser,data)
//     return(
//         <C.Provider value={{state,dispatch}}>
//               {children}
//         </C.Provider>
//     )

// }
// export {Context}                    