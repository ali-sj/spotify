import React from 'react'
import {FaPlus} from 'react-icons/fa'
import {BsMusicNoteList} from 'react-icons/bs'
import {BsTrash} from 'react-icons/bs'
import { PlayList } from './PlayList'


const MenuPlayList = () => {
  return (
    <div className='playlistcontainer'>
        <div className='nemecontainer'>
            <p>PlayList</p>
            <i><FaPlus/></i>
        </div>
        <div className='playlistscroll'>
            {PlayList.map(item=>{return     <div key={item.id} className='playlist'>
                <i className='list'><BsMusicNoteList/></i>
                <p>{item.name}</p>
                <i className='trash'><BsTrash/></i>
                
            </div>})}
        
        </div>

      
    </div>
  )
}

export default MenuPlayList
