import React from 'react'
import Home from '../pages/Home'
import About from './About'


export default function Change(props) {
  // if(props.page === 0 ){
  //   return <Home/>
  // }else{
  //   return <About/>
  // }
  return props.page?<About/>:<Home/>
}
