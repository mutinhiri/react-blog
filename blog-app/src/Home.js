import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)

    const title = 'new title set now'

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }

    useEffect(() => {
      fetch(' http://localhost:8000/blogs')
        .then(res => {
           return res.json()
        })
        .then(data => {
            // console.log(data)
            setBlogs(data)
        })
    }, [])
    return ( 
        <div className="home">
        {blogs && <BlogList blogs={blogs} title="All Bloggers" />}
         {/* <BlogList blogs={blogs.filter((blog) => {
           return  blog.author === 'mario'
         })} title= {title} handleDelete={handleDelete}/> */}
        </div>
     );
}
 
export default Home;