import React, { useEffect, useState } from "react";
import "../styles/leftMenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import {BiSearchAlt} from 'react-icons/bi'
import Menu from "./Menu";
import { MenuList } from "./MenuList";
import MenuPlayList from "./MenuPlayList";
import TrackList from "./TrackList";
const LeftMenu = () => {


  return (
    
      <div className="leftmenu">
      
        <div className="logocontainer">
          <i><FaSpotify/></i>
          <h2>
            spotify
          </h2>
          <i className="dots" ><FaEllipsisH/></i>
        </div>
        <div className="searchbox">
          <input type='text' placeholder="search..."/>
          <i><BiSearchAlt/></i>
          </div>
          <Menu title='menu' menuList={MenuList}/>
          <MenuPlayList/>
          <TrackList/>
      </div>
    
  );
};

export default LeftMenu;
