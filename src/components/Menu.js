import React, { useEffect, useRef } from 'react'
import { MenuList } from './MenuList'
const Menu = ({title,menuList}) => {
  const beforeRef=useRef()
//   useEffect(()=>{
// document.querySelectorAll('li.icon-menu').forEach((item,index)=>{
//   item.addEventListener('mouseover',()=>item.classList.add('active'))
//   item.addEventListener('mouseleave',()=>{item.classList.remove('active')})
// })
//   },[])
useEffect(()=>{


  const allli=document.querySelectorAll('.menulist li')
  allli[0].classList.add('active')
  


  
  function changeMenuActive(){
allli.forEach(item=>item.classList.remove('active'));
this.classList.add('active');


  }
  allli.forEach(item=>item.addEventListener("click",changeMenuActive))

})
  return (
    <div className='menuContainer'>
    <p>{title}</p>
    <ul className='menulist'>
        {menuList && menuList.map(item=><li className='icon-menu ' key={item.id}>
            <a href='#'>
                <i >{item.icon}</i>
                <span>{item.name}</span>
            </a>
        </li>)}
    </ul>
    </div>
  )
}

export default Menu
