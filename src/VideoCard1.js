import React from 'react'
import "./Videos.css"
function VideoCard1({id,source,title,content}) {
    
    return (
        <div>
            <div className="videoCard">
            <video id={id}  className="videoCard__thumbnail" controls={false} >
  <source src={source.toString()} type="video/webm"></source>
</video>

    <div className="video__info">
        <div className="text">
            <h4>{title}</h4> 
        </div>
    </div>
            
        </div>
        </div>
    )
}

export default VideoCard1
