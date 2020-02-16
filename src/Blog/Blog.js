import React from 'react'
import '../style/Blog.css'
import BlogCard from './BlogCard'

const Blog = () => {
  return ( 
    <div id="blog">
      <BlogCard title="Map object and Set object in Javascript" src={require('../media/Blog/blog6.png')} site="https://medium.com/@klee.mcintosh/map-object-set-object-in-javascript-903957380879" />
      <BlogCard title="Setting up a self join with Rails and ActiveRecord" src={require('../media/Blog/blog5.png')} site="https://medium.com/@klee.mcintosh/setting-up-a-self-join-with-rails-activerecord-9137062fac8b" />
      <BlogCard title="‘Drag and Drop’ with vanilla Javascript" src={require('../media/Blog/blog4.gif')} site="https://medium.com/@klee.mcintosh/drag-and-drop-with-vanilla-javascript-35673d6ac2" />
      <BlogCard title="Javascript event bubbling vs capturing and ‘addEventListener’" src={require('../media/Blog/blog3.gif')} site="https://medium.com/@klee.mcintosh/javascript-event-bubbling-vs-capturing-and-addeventlistener-3565f270de27" />
      <BlogCard title="Public method vs Private method in Ruby" src={require('../media/Blog/blog2.png')} site="https://medium.com/@klee.mcintosh/public-method-vs-private-method-in-ruby-f4c910065deb" />
      <BlogCard title="Basic methods of Active Record using Ruby" src={require('../media/Blog/blog1.png')} site="https://medium.com/@klee.mcintosh/basic-methods-of-active-record-using-ruby-c31fcbb08d1a" /> 
    </div>
  )
}

export default Blog