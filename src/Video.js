import {BiTrash} from 'react-icons/bi'
const Video = ({video,deleteVideo}) => {

    return (
        <div className="video-container" >
            <iframe src={video.url} title={video.id}/>
            <button onClick={() => deleteVideo(video.id)} >
                <BiTrash />
            </button>
        </div>
    )
}
export default Video