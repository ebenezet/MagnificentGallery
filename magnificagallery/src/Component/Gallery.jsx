
import { useEffect, useState } from 'react'

import './App.css'

const [index, setIndex] = useState(0)


export default function Gallery({images}){

    function OncClickForward () {
       index !== images.length -1 ? 
       setIndex(index + 1) : setIndex(index = 0)} 
    
    function OnClickBackward() {
       index !== 0 ? 
       setIndex(index - 1) : setIndex(index = images.length - 1)}

return (
    <div className='MyGallery'>
        <img className="BigImage" src={images[index]}/>
    </div>
)

}