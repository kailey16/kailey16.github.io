import React from 'react'

const BlogCard = (props) => {
  return ( 
    <div className="blogcard">
      <a href={props.site} target="_blank" rel="noopener noreferrer" >
        <img className="blogImg" alt="Blog Preview" src={props.src} />
      </a>
      
      <div className="blogText">
        <i className="fab fa-medium blogIcon" />
        <div>{props.title}</div>
      </div>
    </div>
  )
}

export default BlogCard