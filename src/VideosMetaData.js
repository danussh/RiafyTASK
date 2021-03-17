import React from 'react';
import VideoCard1 from "./VideoCard1";
import "./App.css"
import {Link} from "react-router-dom";
function VideosMetaData() {
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
            source:"https://cdn.videvo.net/videvo_files/video/free/2020-05/small_watermarked/3d_ocean_1590675653_preview.webm",
            title:"Flying Over Bright Blue Open Ocean",
            id:"videoCard"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/free/2019-12/small_watermarked/190915_B_02_HaLong_33_preview.webm",
            title:"Overview of Mountains",
            id:"videoCard1"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0043/small_watermarked/091_091-0061_preview.webm",
            title:"Beautiful Aerial Of A Surfer Standing With Surfboard In Gorgeous Dusk Sunset Red Light",
            id:"videoCard2"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/free/2016-09/small_watermarked/160825_05_Sunflowers3_1080p_preview.webm",
            title:"SunFlower Field",
            id:"videoCard3"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0042/small_watermarked/900-2_900-6469-PD2_preview.webm",
            title:"Grizzly Bear (Ursus Arctos) Eating With A Dark Forest Behind And Heavy Snow Fall B Roll",
            id:"videoCard4"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0035/small_watermarked/butterfly_world10_preview.webm",
            title:"ButterFly",
            id:"videoCard5"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/free/2019-11/small_watermarked/190301_1_25_10_preview.webm",
            title:"Lioness Walking Through Scrubland",
            id:"videoCard6"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0025/small_watermarked/356_356-0736_preview.webm",
            title:"Close up of a polar bear walking on sea ice in Prince Regent Inlet near Baffin Island in Nunavut Canada",
            id:"videoCard7"
        },{
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0021/small_watermarked/number_collection011_preview.webm",
            title:"Number Collection",
            id:"videoCard8"
        },{
            source:"https://cdn.videvo.net/videvo_files/video/free/2015-08/small_watermarked/Sunset_Swinging04_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_preview.webm",
            title:"Sunset Swinging",
            id:"videoCard9"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/free/2020-03/small_watermarked/200207_London%20Streets_1_4k_072_preview.webm",
            title:"Rear View Pedestrians Walking In Busy Street",
            id:"videoCard10"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/free/2020-03/small_watermarked/200207_London%20Streets_1_4k_082_preview.webm",
            title:"Traffic in Central London Street",
            id:"videoCard11"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0049/small_watermarked/632_632-0023_preview.webm",
            title:"An aerial view shows the skyline of 42nd Street in New York City New York at night highlighting the Chrysler Building",
            id:"videoCard12"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0049/small_watermarked/632_632-0024_preview.webm",
            title:"An excellent orbiting aerial view shows the upper half of the Statue of Liberty in New York City New York at night",
            id:"videoCard13"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/free/2018-06/small_watermarked/180419_Boxing_A1_24_preview.webm",
            title:"Young Boxer Training with Coach",
            id:"videoCard14"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0122/small_watermarked/5%20Gator_preview.webm",
            title:"Ice Hockey",
            id:"videoCard15"
        },{
            source:"https://cdn.videvo.net/videvo_files/video/free/2017-05/small_watermarked/170411A_06_Blossom_1080p_preview.webm",
            title:"Pink Sakura Tree",
            id:"videoCard16"
        },{
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0232/small_watermarked/20_fin_folder_1185_basket_puppies_preview.webm",
            title:"Basket Of Happiness - Little Puppies On A Lush Green Lawn",
            id:"videoCard17"
        },
        {
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0207/small_watermarked/Child%208-9%20years%20old%20running%20across%20field%20at%20sun%20in%20sunset%20and%20holds%20her%20white%20balloons%20and%20smiling%20at%20camera_preview.webm",
            title:"Young girl runs across field with white balloons during sunset",
            id:"videoCard18"
        },{
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0241/small_watermarked/0015_Gora_Car_plus_allergiya_49_girl_flower_preview.webm",
            title:"The Child Admires The Flowering Tree The View From Behind",
            id:"videoCard19"
        },{
            source:"https://cdn.videvo.net/videvo_files/video/premium/video0213/small_watermarked/Farmer%20woman%20hands%20caring%20about%20seedlings%20in%20soil.%20Closeup_preview.webm",
            title:"Farmer Woman Hands Caring About Seedlings In Soil Closeup",
            id:"videoCard20"
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
<button class="openbtn" onClick={openNav}>☰ Flip Sidebar ⬅</button>  
<h2>Data YouPlay</h2>
<div className="recommendedVideos">
            <div className="dispaly__videos">
        {
            videosContent.map((each,index)=>{
                return <VideoCard1 id={each.id} source={each.source} title={each.title}></VideoCard1>
            })
        }
      
        </div>


        </div>
</div>
</>
        
    )
}

export default VideosMetaData;
