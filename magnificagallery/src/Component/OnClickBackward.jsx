
export default function OnClickBackward(){
    
    return 
        currentIndex !== 0 ? 
        setCurrentIndex(currentIndex - 1) : setCurrentIndex(currentIndex = images.length - 1)
}