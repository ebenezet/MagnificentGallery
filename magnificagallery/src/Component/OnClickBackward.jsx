
export default function OnClickBackward(){
    
    return 
        currentIndex !== 0 ? 
        setIndex(currentndex - 1) : setIndex(currentIndex = images.length - 1)
}