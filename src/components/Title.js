import React from 'react'
import './myStyles.css'

 function Title(props) {
    const {title , description} = props
  return (
    <div>
        <h1 className = 'title'>{title}</h1>
        <h3 className='description'>{description}</h3>
    </div>
  )
}

export default Title;
