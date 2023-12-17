import { useState } from "react"

function App() {
  const [show,setshow]=useState(true)

  return (
    <>
    <div className=" text-center text-white   bg-black px-10 py-7">
    <h3 className=" text-2xl">Toggle</h3>
    {
      show && 
      <p className="mt-4 text-orange-700 w-96 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex autem reprehenderit odio nemo repudiandae. Architecto at repellendus non iure commodi.</p>
    }
  <div>
  <button onClick={()=>{setshow(!show)}} className=" text-2xl px-3 py-2 bg-red-500 mt-4 rounded-md hover:bg-purple-400 duration-500" >
    {
      show ? "Hide" : "Show"
    }
  </button>
  </div>
     </div>
    </>
  )
}

export default App
