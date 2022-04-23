import React, { useEffect, useRef, useState } from "react";
import "../styles/MainContainer.css";
import Banner from "./Banner";
import { FaUsers } from "react-icons/fa";
import { img, songs } from "./Songs";
import AudioList from "./AudioList";
import { useDispatch, useSelector } from "react-redux";
import {
  nextTrackAction,
  previousTrackAction,
  trackAction,
} from "../Redux/actions/trackAction";
import {
  FaPause,
  FaHeart,
  FaRegHeart,
  FaPlay,
  FaStepBackward,
  FaBackward,
  FaForward,
  FaStepForward,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import axios from "axios";

const MainContainer = () => {
  const [isPlay, setIsplay] = useState(false);
  const [isLove, setIslove] = useState(false);
  const track = useSelector((state) => state.track);
  const volume = useSelector((state) => state.volume);
 const muted=useSelector((state)=>state.muted)
  
  const dispatch = useDispatch();
  const [durationTrack, setDurationTrack] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurentTime] = useState(0);



  const[current,setCurrent]=useState(0)

  const ref = useRef();
  const progresBar=useRef()
  const animationRef=useRef(null)
 const playpauseRef=useRef()
  useEffect(()=>{ 
axios.get('https://api.themoviedb.org/3/movie/550?api_key=64e8350fa5cccc62b244807987192a2b')
.then(res=>console.log(res.data))

if(isPlay){
  ref.current.play()
}else{
  ref.current.pause()
 }
     setDuration(ref.current.duration)
 
    //..................................effect of light track
    ref.current.volume = volume / 100;
    const allli = document.querySelectorAll(".Menulist li");
    allli[2].classList.add("active");

    function changeMenuActive() {
      allli.forEach((item) => item.classList.remove("active"));

      this.classList.add("active");
    }

    allli.forEach((item) => item.addEventListener("click", changeMenuActive));
   
    //..................................effect of light track
   



  }, [
   
 
    
    ref?.current?.readyState,
   current,
  track,
  isPlay,
  volume

  ])
   

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : minutes;

    const seccond = Math.floor(sec % 60);
    const returnSec = seccond < 10 ? `0${seccond}` : seccond;
    return `${returnMin}:${returnSec}`;
  };
  const seekTrackHandler = (e) => {
    ref.current.currentTime = (ref.current.duration / 100) * e.target.value;
  
  
    
  };
  const changeIsloveHandler = () => {
    setIslove(!isLove);
  };
  
  const changePlayPause = () => {
    const prevValue = isPlay;
  
    if (!prevValue) {
      ref.current.play();
      animationRef.current=setInterval(() => {
        progresBar.current.value=100*(ref.current.currentTime/ref.current.duration)
        setCurrent(ref.current.currentTime)
      }, 1000);
      //animation.current=requestAnimationFrame(whilePlaying)


    }else{
      ref.current.pause()
      clearInterval(animationRef.current)

    }
    setIsplay(!prevValue);

  };
  const endTrackHandler=()=>{
    
    const nextTrack = songs.find((songe) => {
      return songe.id === track.id + 1;
    });
    dispatch(trackAction(nextTrack.id));
  
  
  }
  return (
    <div className="maincontainer">
   
      <Banner />
      <div className="Menulist">
        <ul>
          <li>
            <a href="#">popular</a>
          </li>
          <li>
            <a href="#">Albums</a>
          </li>
          <li>
            <a href="#">Songs</a>
          </li>
          <li>
            <a href="#">Fans</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <p>
          <i>
            <FaUsers />
          </i>
          12.5M <span>followers</span>
        </p>
      </div>
      <AudioList re={playpauseRef.current} handler={setIsplay} inputRef={ref} />
      {/* buttons and controls */}

      {/* ......................................... */}
      <div className="musicplayer">
        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeIsloveHandler}>
              {isLove ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>
            <div className="dawnload">
              <i>
                <BsDownload />
              </i>
            </div>
          </div>
          <div className="middle">
            <div className="back">
              <i
                onClick={() => {
                  dispatch(previousTrackAction(track.id));
                }}
              >
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playpause" ref={playpauseRef} onClick={changePlayPause}>
              {isPlay ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <FaPlay />
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i
                onClick={() => {
                  dispatch(nextTrackAction(track?.id));
                }}
              >
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>
        <div className="trackplayed">
          <div className="currentTime">{calculateTime(current)}</div>

          <audio
            ref={ref}
            src={track?.nameSonge}
            onPlay={(e) => {}}
            onEnded={endTrackHandler}
            muted={muted}

            preload="metadata"
          ></audio>

          <input
            className="inputplayed"
            onChange={seekTrackHandler}
            min={0}
            max={100}
            defaultValue={0}
         
            type="range"
            ref={progresBar}
          />
          <div className="timeDuration">
            {isNaN(duration) ? "00:00" : calculateTime(duration)}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default MainContainer;
