import React from 'react';
import VideoCard from "./VideoCard";
import "./App.css"
import {Link} from "react-router-dom";

function Videos() {
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
      }
    let videosContent=[
        {
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0043/small_watermarked/091_091-0061_preview.webm",
            title:"Beautiful Aerial Of A Surfer Standing With Surfboard In Gorgeous Dusk Sunset Red Light",
            id:"videoCard2",
            like:false,
            dislike:false,
            likedislikeId:"id3"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/free/2016-09/small_watermarked/160825_05_Sunflowers3_1080p_preview.webm",
            title:"SunFlower Field",
            id:"videoCard3",
            like:false,
            dislike:false,
            likedislikeId:"id4"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0042/small_watermarked/900-2_900-6469-PD2_preview.webm",
            title:"Grizzly Bear (Ursus Arctos) Eating With A Dark Forest Behind And Heavy Snow Fall B Roll",
            id:"videoCard4",
            like:false,
            dislike:false,
            likedislikeId:"id5"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0035/small_watermarked/butterfly_world10_preview.webm",
            title:"ButterFly",
            id:"videoCard5",
            like:false,
            dislike:false,
            likedislikeId:"id6"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0025/small_watermarked/356_356-0736_preview.webm",
            title:"Close up of a polar bear walking on sea ice in Prince Regent Inlet near Baffin Island in Nunavut Canada",
            id:"videoCard7",
            like:false,
            dislike:false,
            likedislikeId:"id8"
        },{
            source:"https://cdn.videvo.net/videvo_files/video/free/2015-08/small_watermarked/Sunset_Swinging04_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_preview.webm",
            title:"Sunset Swinging",
            id:"videoCard9",
            like:false,
            dislike:false,
            likedislikeId:"id10"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/free/2020-03/small_watermarked/200207_London%20Streets_1_4k_072_preview.webm",
            title:"Rear View Pedestrians Walking In Busy Street",
            id:"videoCard10",
            like:false,
            dislike:false,
            likedislikeId:"id11"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/free/2020-03/small_watermarked/200207_London%20Streets_1_4k_082_preview.webm",
            title:"Traffic in Central London Street",
            id:"videoCard11",
            like:false,
            dislike:false,
            likedislikeId:"id12"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0049/small_watermarked/632_632-0024_preview.webm",
            title:"An excellent orbiting aerial view shows the upper half of the Statue of Liberty in New York City New York at night",
            id:"videoCard13",
            like:false,
            dislike:false,
            likedislikeId:"id14"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/free/2018-06/small_watermarked/180419_Boxing_A1_24_preview.webm",
            title:"Young Boxer Training with Coach",
            id:"videoCard14",
            like:false,
            dislike:false,
            likedislikeId:"id15"
        },
       {
            source:"https://cdn.videvo.net/videvo_files/video/free/2017-05/small_watermarked/170411A_06_Blossom_1080p_preview.webm",
            title:"Pink Sakura Tree",
            id:"videoCard16",
            like:false,
            dislike:false,
            likedislikeId:"id17"
        },{
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0232/small_watermarked/20_fin_folder_1185_basket_puppies_preview.webm",
            title:"Basket Of Happiness - Little Puppies On A Lush Green Lawn",
            id:"videoCard17",
            like:false,
            dislike:false,
            likedislikeId:"id18"

        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0207/small_watermarked/Child%208-9%20years%20old%20running%20across%20field%20at%20sun%20in%20sunset%20and%20holds%20her%20white%20balloons%20and%20smiling%20at%20camera_preview.webm",
            title:"Young girl runs across field with white balloons during sunset",
            id:"videoCard18",
            like:false,
            dislike:false,
            likedislikeId:"id19"
        },{
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0241/small_watermarked/0015_Gora_Car_plus_allergiya_49_girl_flower_preview.webm",
            title:"The Child Admires The Flowering Tree The View From Behind",
            id:"videoCard19",
            like:false,
            dislike:false,
            likedislikeId:"id20"
        },{
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0213/small_watermarked/Farmer%20woman%20hands%20caring%20about%20seedlings%20in%20soil.%20Closeup_preview.webm",
            title:"Farmer Woman Hands Caring About Seedlings In Soil Closeup",
            id:"videoCard20",
            like:false,
            dislike:false,
            likedislikeId:"id21"
        }

    ]
    return (
                <>
                <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>×</a>
        <Link to="/videosMetaData">About Videos</Link>
        <Link to="/videos">Play Videos</Link>
        </div>

        <div id="main">
        <button class="openbtn" onClick={openNav}>☰ Open Sidebar ⬅</button>  
        <h2>YouTube Play</h2>
        <div className="recommendedVideos">
                    <div className="dispaly__videos">
                {
                    videosContent.map((each,index)=>{
                        return <VideoCard id={each.id} source={each.source} title={each.title} likedislikeId={each.likedislikeId}></VideoCard>
                    })
                }
            
                </div>


                </div>
        </div>
        </>
        
        
    )
}

export default Videos;
