import React from 'react'
import "./Videos.css"
function VideoCard({id,source,title,likedislikeId}) {
    function playVid(){
        console.log(document.getElementById(id.toString()))
        document.getElementById(id.toString()).controls=true;
        if(document.getElementById(id.toString()).paused){
            document.getElementById(id.toString()).play();
        }
        else{
            document.getElementById(id.toString()).pause();
        }
    }
    function likeDislike() {
        document.getElementById(likedislikeId.toString()).classList.toggle("fa-thumbs-down");
      }
  
    return (
        <div>
            <div className="videoCard">
            <video id={id} onClick={playVid} className="videoCard__thumbnail" controls={false} >
  <source src={source.toString()} type="video/webm"></source>
</video>

    <div className="video__info1" onClick={playVid}>
        <div className="text">
            <h4>{title}</h4> 
            
    </div>
    </div>
    <div className="display__likeshare">
            <i id={likedislikeId} onClick={likeDislike} class="fa fa-thumbs-up"></i>
            &nbsp;&nbsp;&nbsp;<i class="fa fa-share" aria-hidden="true"></i></div>
        </div>
        </div>
       
    )
}

export default VideoCard
