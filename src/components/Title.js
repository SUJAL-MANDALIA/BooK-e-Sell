import React from 'react'

 function Title(props) {
    const {title , description} = props
  return (
    <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
    </div>
  )
}

export default Title;
