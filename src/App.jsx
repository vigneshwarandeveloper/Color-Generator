import { useState } from "react";
import { ColorList } from "./component/ColorList";
import { Form } from "./component/Form";
import Values from "values.js";
import { ToastContainer,toast } from "react-toastify";


const App = () => {
  const [colors,setcolors]=useState(new Values("#14a38c").all(10))


const addColor=(color)=>{
  try {
    const newcolor=new Values(color).all(10);
    setcolors(newcolor)
  } catch (error) {
    toast.error(error.message)
  }
}


  return (
  <main style={{backgroundColor:"whitesmoke"}}>
  <Form  addColor={addColor}/>
  <ColorList colors={colors}/>
  <ToastContainer position="top-center"/>
  </main>
  )
};
export default App;
