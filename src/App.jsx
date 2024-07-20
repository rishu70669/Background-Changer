import { useState } from "react"


function App() {
  const [color,setColor] = useState("olive")


  return (
    <>
     
     <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl cursor-pointer">
          
          <button 
          onClick = {()=>setColor("Violet")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Violet"}}>Violet
          </button>

          <button 
          onClick = {()=>setColor("Aqua")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Aqua"}}>Aqua
          </button>
          <button 
          onClick = {()=>setColor("Orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Orange"}}>Orange
          </button>

          <button 
          onClick = {()=>setColor("Yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Yellow"}}>Yellow
          </button>

          <button 
          onClick = {()=>setColor("Green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}>green
          </button>

          <button 
          onClick = {()=>setColor("Red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}>Red
          </button>

          <button 
          onClick = {()=>setColor("Brown")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Brown"}}>Brown
          </button>

          <button 
          onClick = {()=>setColor("darkcyan")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "darkcyan"}}>Darkcyan
          </button>

          <button 
          onClick = {()=>setColor("Purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Purple"}}>Purple
          </button>

          <button 
          onClick = {()=>setColor("darkblue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Darkblue"}}>Darkblue
          </button>

          <button 
          onClick = {()=>setColor("lightgreen")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "lightgreen"}}>lightgreen
          </button>

        </div>
        </div>
     </div>

    </>
  )
}

export default App
