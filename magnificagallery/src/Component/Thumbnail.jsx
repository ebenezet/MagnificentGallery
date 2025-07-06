import '../Style/Thumbnail.css'

export default function Thumbnail({thumbnail}) {
    return ( 
    
    
        <img  key={thumbnail.id} src={thumbnail.url} alt={thumbnail.alt} className="thumbnail"/>
    )
   
}