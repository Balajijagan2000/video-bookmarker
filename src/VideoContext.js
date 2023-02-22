import { createContext, useState} from "react";
if(!localStorage.getItem("videos")) {
    
    localStorage.setItem("videos",[])

}
const VideoContext = createContext()

export const VideoContextProvider = ({children}) => {
    const [videos,setVideos] = useState(
        localStorage.getItem("videos") ? JSON.parse(localStorage.getItem("videos"))
        :
        []
        )
    const addVideo = (url) => {

            const id = videos.length === 0 ? 1 : videos[0].id + 1
            
            const newURL = `https://youtube.com/embed/${url.split('//')[1].split('/')[1]}`

            const newVideo = {id,url:newURL}
            const newVideos = [newVideo, ...videos]
            localStorage.setItem("videos",JSON.stringify(newVideos))
            setVideos([...newVideos])

        }

    const deleteVideo = (id) => {
        const filteredVideos = videos.filter(video => {
            return video.id !== id
        })
        localStorage.setItem("videos",JSON.stringify(filteredVideos))
        setVideos(filteredVideos)

    }
    return (
        <VideoContext.Provider value={{videos,addVideo,deleteVideo}}>
            {children}
        </VideoContext.Provider>
    )
}

export default VideoContext