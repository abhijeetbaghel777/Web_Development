// import React, { useState } from 'react'

// const App = () => {
//   let [input,SetInput]=useState("")
//   let [data,SetData]=useState("")
//     function fun1(e){
//       SetInput(e.target.value)
//     }
//     function done(){
//       SetData(input)
//       SetInput("")
//     }
  
//   return (
//     <div>
//       <h2>{data}</h2>
//       <input type='text' name='input' value={input} onChange={fun1} />
//       <button onClick={done}>click</button>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import Form from './Form'
// const App = () => {
//   return (
//     <div>
//       <Form/>  
//         </div>
//   )
// }

// export default App
// import React, { useEffect, useState } from 'react'

// const App  = () => {
//   let [count,SetCount]=useState(0)
//   let [city,SetCity]=useState("goa")
//   useEffect(()=>{
//     console.log("hiii")
//   },[city])
//   return (
//     <div>
//       <h3>{count}</h3>
//        <button onClick={()=>{SetCount(count+1)}}>click</button>
//       <h2>{city}</h2>
//        <button onClick={()=>{SetCity("mumbai")}}>change</button>
//     </div>
//   )
// }

// export default App
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [count,SetCount]=useState(0)
//   // let [apidata,SetApi]=useState
//   useEffect(()=>{
//     fetch(`https://dummyjson.com/products`)
//     .then(response => response.json())
//       .then(json => console.log(json))
//   },[])
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={()=>{SetCount(count+1)}}>click</button>
//     </div>
//   )
// }

// export default App
// import React, { useEffect, useState } from 'react'
// import './App.css'

// const App = () => {
//   let [apidata,SetApi]=useState([])
//   useEffect(()=>{
//     fetch("https://dummyjson.com/products").then((res)=>{
//       return res.json()
//     }).then((data)=>{
//       console.log(data)
//       SetApi(data.products)
//       console.log(apidata,"hhehe")
//     })
//   },[])
//   return (
//     <div>
//       {
//         apidata.map((a)=>{
//           return(
//              <div id="card">
//                   <h1>{a.id}</h1>
                  
//                   <img  src={a.thumbnail}/>
//                   <h2>{a.title}</h2>
//                   <h2>Price={a.price}$</h2>
//                 </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import Task from './Task'
// import './App.css'
// const App = () => {
//   return (
//     <div>
//       <Task/>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import Navbar from './Navbar'
// import { Route,Routes } from 'react-router-dom'
// import Home from './Home'
// import About  from './About'
// import Task from './Task'

// import './App.css'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home/>}></Route>
//         <Route path="/about" element={<About/>}></Route>
//         <Route path="/task" element={<Task/>}></Route>
        
//       </Routes>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import Todo from './Todo'

// const App = () => {
//   return (
//     <div>
//         <Todo/>
//     </div>
//   )
// }

// export default App
import React from 'react'
import UseRed from './UseRed'

const App = () => {
  return (
    <div>
      <UseRed/>
    </div>
  )
}

export default App