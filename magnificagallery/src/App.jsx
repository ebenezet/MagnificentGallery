
import { useEffect, useState } from 'react'

import './App.css'
import OncClickForward from './Component/OnClickForward'
import OnClickBackward from './Component/OnClickBackward'


export default function App() {
const [images, displayImages] = useState([])
const [index, setIndex] = useState(0)


  useEffect( ()=> {
async function fetchData(){
  const response = await fetch("https://week-6-api.vercel.app/api/images")
  const images = await response.json()
     

    displayImages(images)
}

fetchData() } , [])





return (
    <div className='MyGallery'>
      <h1> Magnifica Gallery</h1>
        {images.map((image, index) => <img key={image.id} src={image.url} alt={image.alt}/>) }
       <div className='left-right-button'>
        <button onClick={()=> <OncClickForward/>}>Right</button>
        <button onClick={()=> <OnClickBackward/>}>Left</button>
        </div>
    </div>
)


} 
