import React from 'react'
import { Link } from 'react-router-dom'

const Preview = (props) => {
  return (
    <div className="preview">
      <p className="previewTitle">{props.title}</p>

      <Link to={`/project/${props.id}`}>
        <img className="previewImg" src={props.src} alt="previewImg" />
      </Link>

    </div>
  )
}

export default Preview