import { useContext } from "react"
import Video from "./Video"
import VideoContext from "./VideoContext"
const Videos = () => {

   
    const {videos,deleteVideo} = useContext(VideoContext)
    
    
    return (
        <div className="container">
            {
                videos.map( video => {
                    return <Video video={video} deleteVideo={deleteVideo} key={video.id} /> 
                })
            }
            
        </div>
    )
}
export default Videos