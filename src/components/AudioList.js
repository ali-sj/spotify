import React, { useEffect } from "react";
import { FaHeadphones, FaRegClock, FaHeart, FaRegHeart } from "react-icons/fa";

import { trackAction } from "../Redux/actions/trackAction";
import { useDispatch,useSelector } from "react-redux";
import { favoriteSongsList, songsListAction } from "../Redux/actions/songsListAction";

const AudioList = ({handler,re}) => {
  const dispatch = useDispatch();
  const songs=useSelector((state)=>state.songsList)
  const track=useSelector((state)=>state.track)
  useEffect(() => {
    dispatch(songsListAction())
    const alldiv = document.querySelector(".audioList").querySelectorAll("div");

    function changeMenuActive() {
      alldiv.forEach((item) => item.classList.remove("light"));
      this.classList.add("light");
    }
    alldiv.forEach((item) => item.addEventListener("click", changeMenuActive));
  }, []);
  return (
    <div className="audioList">
      <h2 className="title">
        The list <span>12 songs</span>
      </h2>
      {songs.map((song) => {
        return (
          <div key={song.id} className="songscontainer ">
            <div className="count">#{song.id}</div>

            <div
              className={`song ${song.id===track.id?'active':''}`}
              
            >
              <img src={song.image} alt="" />

              <div className="section">
                <p className="songname" onClick={() => {
                dispatch(trackAction(song.id));
              handler(true)
              re.click()
                
              }}>
                  <span>Take on me</span>{" "}
                  <span className="songename_span">{song.artist}</span>
                </p>
                <div className="hits">
                  <p className="hit">
                    <i>
                      <FaHeadphones />
                    </i>
                    95,490,102
                  </p>
                  <p className="duration">
                    <i>
                      <FaRegClock />
                      03.04
                    </i>
                  </p>
                  <div className="favorite" onClick={()=>{dispatch(favoriteSongsList(song.id))}}>
                    {song?.favorite ? (
                      <i>
                        <FaHeart />
                      </i>
                    ) : (
                      <i >
                        <FaRegHeart />
                      </i>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AudioList;
