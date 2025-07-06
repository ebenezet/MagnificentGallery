
export default function OnClickBackward(){
    
    return 
        index !== 0 ? 
        setIndex(index - 1) : setIndex(index = images.length - 1)
}