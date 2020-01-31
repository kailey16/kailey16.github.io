import React from 'react'

const Preview = (props) => {
  return (
    <div className="preview">
      <p className="previewTitle">{props.title}</p>
      <img className="previewImg" src={props.src} alt="previewImg" />
    </div>
  )
}

export default Preview