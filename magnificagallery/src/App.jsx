
import { useEffect, useState } from 'react'

import './App.css'



export default function App() {
const [images, displayImages] = useState([])
let [currentIndex, setCurrentIndex] = useState(0)
const[isVisible, setIsVisible] = useState(false)


  useEffect( ()=> {
async function fetchData(){
  const response = await fetch("https://week-6-api.vercel.app/api/images")
  const images = await response.json()
     

    displayImages(images)
}

fetchData() } , [])

function OncClickForward () {
 return currentIndex !== images.length -1 ? 
setCurrentIndex(currentIndex + 1) : setCurrentIndex(index = 0)
}

OnClickBackward
function OnClickBackward(){
  
  return currentIndex !== 0 ? 
  setCurrentIndex(currentIndex - 1) : setCurrentIndex(currentIndex = images.length - 1)
}
OnClickBackward



return (
    <div className='MyGallery'>
      <h1> Magnifica Gallery</h1>
        {images.map((image, index) => (
          <div key={index} className='images'>
        <button onClick={()=> setIsVisible(!isVisible)}>  <img key={image.id} src={image.url} alt={image.alt} index={index}  /> </button>
         {isVisible && <img key={image.id} src={image.url} alt={image.alt}/>}
          </div>
          )
          ) }
       <div className='left-right-button'>
        <button className='right' onClick={()=> <OncClickForward/>}>Right</button>
        <button className='left' onClick={()=> <OnClickBackward/>}>Left</button>
        </div>
    </div>
)


} 
