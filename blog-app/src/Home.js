// import { useState, useEffect } from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    // const title = 'new title set now'

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }


    return ( 
        <div className="home">
            { isPending && <div>Loading ...</div>}
            { error && <div>{ error }</div>}
        {blogs && <BlogList blogs={blogs} title="All Bloggers" />}
         {/* <BlogList blogs={blogs.filter((blog) => {
           return  blog.author === 'mario'
         })} title= {title} handleDelete={handleDelete}/> */}
        </div>
     );
}
 
export default Home;