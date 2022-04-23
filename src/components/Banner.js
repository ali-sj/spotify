import React from 'react'
import Artist from '../assets/artist.jpg'
import Ckecked from '../assets/checked.png'
import {FaEllipsisH,FaHeadphones,FaCheck} from 'react-icons/fa'
import { useSelector } from 'react-redux'



const Banner = () => {
    const track=useSelector((state)=>state.track)
  return (
    <div className='banner'>
        <img className='bannerimg' src={track.image??Artist}/>
        <div className='content'>
            <div className='backdrop'>
                <p>Home <span>/popular Artist</span></p>
                <i><FaEllipsisH/></i>
            </div>
            <div className='artist'>
                <div className='left'>
                    <div className='name'>
                    <h2>A-Ha</h2>
                    <img  src={Ckecked}/>

                    </div>
                    <p>
                        <i>
                            <FaHeadphones/>
                        </i>
                        11.184.1811 <span>monthly listeners</span>
                    </p>
                </div>
                <div className='right'>
                    <a className='playlink' href='#'>play</a>
                    <a className='followinglink' href='#'><i><FaCheck/></i>following</a>
                </div>
                

            </div>
        </div>
      <div className='buttomlayer'></div>
    </div>
  )
}

export default Banner
