// import React from 'react'

// const Cart = ({cart}) => {
//   return (
//     <div>
//          {
//         cart.map((a)=>{
//           return(<div id='main_card'>
//           <img  src={a.thumbnail}/>
//           <p>{a.title}</p>
//           <p>{a.price}</p>
           
//           </div>)
//         })
//       }
//     </div>
//   )
// }

// export default Cart
// import React, { useContext } from 'react'
// import C from './Context'

// const Cart = () => {
//   const { state } = useContext(C)

//   return (
//     <div>
//       <h2>Cart Items: {state.cart.length}</h2>

//       {state.cart.map((item) => (
//         <div key={item.id}>
//           <p>{item.title}</p>
//         </div>
//       ))}
//     </div>
//   )
// }


// export default Cart