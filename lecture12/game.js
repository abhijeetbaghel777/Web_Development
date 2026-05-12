let canvas=document.querySelector("canvas")
  let pen=   canvas.getContext("2d")
  let snakeCell=[[0,0]]
  let cell=50
  let direction="right"


  document.addEventListener("keydown",(e)=>{
    console.log(e);
    if(e.key=="ArrowUp"){
        direction='up'
    }else if(e.key=='ArrowDown'){
        direction='down'
    }else if(e.key=='ArrowLeft'){
        direction="left"

    }else{
        direction='right'
    }
    
  })


  function draw(){
    pen.fillStyle="red"
    pen.clearRect(0,0,1000,600)
    for(let a of snakeCell){
        pen.fillRect(a[0],a[1],cell,cell)

    }
  }
  draw()
  function update(){
  let headX=  snakeCell[snakeCell.length-1][0]
  let headY=  snakeCell[snakeCell.length-1][1]

 let newX
  let newY
  if(direction=='right'){
    newX=headX+cell
    newY=headY
  }
  else if(direction=="left"){
    newX=headX-cell
    newY=headY
  }
  else if(direction=="down"){
    newX=headX
    newY=headY+cell
  }
  else{
    newX=headX
    newY=headY-cell
  }
  snakeCell.push([newX,newY])
  snakeCell.shift()
  }

  setInterval(()=>{
    draw()
    update()

  },200)