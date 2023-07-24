import React, { useState } from 'react'

export const  Form= ({addColor}) => {
    const [color,setcolor]=useState("");

    const handlesubmit=(e)=>{
        e.preventDefault();
        addColor(color);
    }

  return (
    <section className='container'>
    <h4>Color Generator</h4>
    <form className='color-form' onSubmit={handlesubmit}>
    <input 
    type='color' 
    value={color}
    onChange={(e)=> setcolor(e.target.value)}
    />
        <input 
            type='text'
            value={color}
            onChange={(e)=> setcolor(e.target.value)}
            placeholder="#E8f6f4"
        />
        <button type='submit' className='btn'
        style={{background:color}}
        >Submit</button>
    </form>
    </section>
  )
}
