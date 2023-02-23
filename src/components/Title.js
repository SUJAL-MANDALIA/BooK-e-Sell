import React from 'react'

 function Title(props) {
  return (
    <div>
        <h1>This is Title</h1>
        <h3>{props.titleText}</h3>
    </div>
  )
}

export default Title;
