import React from 'react'

const Preview = (props) => {
  return (
    <div className="preview">
      <img className="previewImg" src={props.src} alt="previewImg" />
      <p>{props.title}</p>
    </div>
  )
}

export default Preview