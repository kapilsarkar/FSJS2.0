import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { blogsData } from '../data'
const Blogs = () => {
  const [blogs,Setblogs] = useState(blogsData);
  const truncateString=(str,num) => {
    if(str.length > num){
      return str.slice(0,num) + "..."
    }
    else{
      return str
    }
  }
  return (
    <div>
      <h1>BLOGGING PAGE</h1>
      <p>Welcome to the Blogging page</p>
      <p>Kapil SArkar you are Welcome to the Blogging Page</p>
      <section className='allBlogs'>
        {blogs.map((blog)=> {
          const {id,title,body} = blog
          return ( <article key={id}>
             <h2>{title}</h2>
             <p>{truncateString(body,100)}</p>
             <Link to={title} state={{id,title,body}}>Learn More</Link>
          </article>
          );
        })}
      </section>
    </div>
  )
}

export default Blogs

