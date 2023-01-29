import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    const title = 'new title set now'

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
      fetch(' http://localhost:8000/blogs')
        .then()
    })
    return ( 
        <div className="home">
         <BlogList blogs={blogs} title="All Bloggers" handleDelete={handleDelete}/>
         <BlogList blogs={blogs.filter((blog) => {
           return  blog.author === 'mario'
         })} title= {title} handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;