import React, { useEffect, useState } from 'react'
import {BsMusicNoteList,BsFillVolumeUpFill} from 'react-icons/bs'
import track from '../assets/4.jpg'
import { useDispatch, useSelector } from 'react-redux'

import {FaDesktop} from 'react-icons/fa'
import { volumeAction } from '../Redux/actions/volumeAction'
import {BiVolumeMute} from 'react-icons/bi'
import { muteAction } from '../Redux/actions/muteAction'

const TrackList = () => {

  const dispatch=useDispatch()
  const volume=useSelector((state)=>state.volume)
 const muted=useSelector((state)=>state.muted)
 
  const changeVolumeHandler=(e)=>{
    dispatch(volumeAction(e.target.value))
  }

  return (
    <div className='tracklist'>
        <div className='top'>
            <img src={track} alt='d'/>
            <p>sample name <span>Artist</span></p>
            
        </div>
        <div className='buttom'>
          <div onClick={()=>{dispatch(muteAction())}}>
              
            {muted?<i><BiVolumeMute/></i>:  <i><BsFillVolumeUpFill/></i>}
          
          </div>
        
            
            <input value={volume}  onChange={changeVolumeHandler}  min={0} max={100} type='range'/>
            <i><BsMusicNoteList/> </i>
            <i><FaDesktop/></i>
        </div>
      
    </div>
  )
}

export default TrackList
