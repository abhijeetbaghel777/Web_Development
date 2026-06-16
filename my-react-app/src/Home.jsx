// import React from 'react'

// const Home = () => {
//   return (
//       <div className="page">

//       <div className="hero">
//         <h1>Dashboard Overview</h1>
//         <p>Monitor progress, tasks, and system activity in one place.</p>
//       </div>

//       {/* STATS */}
//       <div className="stats">
//         <div className="card blue">
//           <h2>18</h2>
//           <p>Active Tasks</p>
//         </div>

//         <div className="card green">
//           <h2>9</h2>
//           <p>Completed</p>
//         </div>

//         <div className="card purple">
//           <h2>4</h2>
//           <p>Pending Review</p>
//         </div>

//         <div className="card orange">
//           <h2>2</h2>
//           <p>Overdue</p>
//         </div>
//       </div>

//       {/* TASK LIST PREVIEW */}
//       <div className="section">
//         <h2>Recent Tasks</h2>

//         <div className="taskList">
//           <div className="taskItem">
//             <span>Build Navbar UI improvements</span>
//             <small>High Priority</small>
//           </div>

//           <div className="taskItem">
//             <span>Fix routing bug in Task page</span>
//             <small>Medium Priority</small>
//           </div>

//           <div className="taskItem">
//             <span>Improve About page layout</span>
//             <small>Low Priority</small>
//           </div>

//           <div className="taskItem">
//             <span>API integration for tasks</span>
//             <small>High Priority</small>
//           </div>
//         </div>
//       </div>

//       {/* QUICK ACTIONS */}
//       <div className="section">
//         <h2>Quick Actions</h2>

//         <div className="actionGrid">
//           <div className="action">➕ Add New Task</div>
//           <div className="action">📊 Analytics</div>
//           <div className="action">🔍 Search Tasks</div>
//           <div className="action">⚙️ Settings</div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Home
// import React, { useEffect } from 'react'
// import { useContext } from 'react'
// import C from './Context'

// const Home = () => {
//   let {state,dispatch}=  useContext(C)
//   console.log(state,"statetetetetetet");
  

  
//     useEffect(()=>{
//        async  function call(){      
//              let res= await fetch("https://dummyjson.com/products")
//               let data= await  res.json()
//               console.log(data,"'he");
//               dispatch({type:"add_Data",payload:data.products})

//         }
//         call()


//     },[])
//   return (
//     <div>
//         {
//             state.apiData.map((a)=>{
//                 console.log(a,"aaa");
                
//                 return(<>
//                       <img  src={a.thumbnail}/>
//                 </>)

//             })
//         }
//         {state.apiData.map((a) => {
//       return (
//         <div key={a.id}>
//           <img src={a.thumbnail} alt={a.title} />
//           <h3>{a.title}</h3>
//           <button
//             onClick={() =>
//               dispatch({
//                 type: "ADD_TO_CART",
//                 payload: a,
//               })
//             }
//           >
//             Add To Cart
//           </button>
//         </div>
//       );
//     })}
//     </div>
    
//   )
// }

// export default Home