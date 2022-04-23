import React from 'react'

import './App.css'
import LeftMenu from './components/LeftMenu'
import RightMenu from './components/RightMenu'
import MainContainer from './components/MainContainer'
const App = () => {
  return (
    <div className='app'>
      <LeftMenu/>
      <MainContainer/>
      <RightMenu/>
     
<div className='background'></div>

    </div>
  )
}

export default App
