import { useContext,useRef } from "react"
import VideoContext from "./VideoContext"
const AddVideo = () => {
    const {addVideo} = useContext(VideoContext)
    const inputRef = useRef()
    
    // useEffect(() => {console.log("...")},[link])
    // useEffect(() => {
    //     console.log("SET")
    //     document.addEventListener('keypress',handleKeyPress)
    // },[])
   
   
    
    // const handleKeyPress = (e) => {
        
    //     if(e.key === 'Enter')  {
    //         handleSubmit()
    //     }
    // }
    
    const handleSubmit = () => {
 
        const val = inputRef.current.value
        
        if(val.trim() !== '') {
            
            inputRef.current.value = ""
            addVideo(val)
            
            
        }
        
    }
    return (
        <div className="search-container">
            
            <input type="text" 
                
                
                placeholder="copy youtube link here"
                ref={inputRef}
                
                        />
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default AddVideo