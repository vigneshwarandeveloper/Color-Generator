import React from 'react'
import { toast } from 'react-toastify';

export const SingleColor = ({color,index}) => {
    const {hex,weight}=color;
    const saveToClipboard=async()=>{
      if(navigator.clipboard){
        try{
          await navigator.clipboard.writeText(`#${hex}`)
          toast.success("Color is Copied")
        }catch{
          toast.error("Unable to copy the color")
        }

      }else{
        toast.error("Clipboard access not availabel");
      }
    }
  return (
    <article className={index>8?"color color-light":"color"} style={{background:`#${hex}`}} onClick={saveToClipboard}>
    <p className='percent-value'>{weight}%</p>
    <h4 className='color-value'>#{hex}</h4>
    </article>
  )
}
