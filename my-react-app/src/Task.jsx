import React, { useEffect, useState } from 'react'


const Task = () => {
  let[search,SetSearch]=useState('')
  let [ApiData,SetApiData]=useState([])
  async function apiCall() {
    if(!search){
      alert("kucch nahi ba!!!")
      return
    }
    let response=await fetch(`https://dummyjson.com/products/search?q=${search}`)
    let data=await response.json()
    console.log(data)
    SetApiData(data.products)
    
    
  }
  useEffect(()=>{
    fetch('https://dummyjson.com/products').then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data)
       SetApiData(data.products)
    })
  },[])
   function fun1(){
        console.log("dortt");
        
       let sortData= [...ApiData].sort((a,b)=>{
             return a.price-b.price

        })
        SetApiData(sortData)
        console.log(sortData,"hello");
        

    }
   function fun2(){
        console.log("dortt");
        
       let sortData= [...ApiData].sort((a,b)=>{
             return b.price-a.price

        })
        SetApiData(sortData)
        console.log(sortData,"hello");
        

    }
  return (
    <div>
      <input onChange={(e)=>SetSearch(e.target.value)} />
      <button onClick={apiCall}>Search</button>
      <button onClick={fun1}>low</button>
      <button onClick={fun2}>high</button>
      {
        ApiData.map((a)=>{
          return(
             <div id="card">
                  <h1>{a.id}</h1>
                  
                  <img  src={a.thumbnail}/>
                  <h2>{a.title}</h2>
                  <h2>Price={a.price}$</h2>
                </div>
          )
        })
      }
      
    </div>
  )
}

export default Task
