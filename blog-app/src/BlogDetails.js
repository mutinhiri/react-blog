import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const { data:blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+ blog.id), {
            method: 'DELETE'
        }
    }
   
    return ( 
        <div className="blog-details">
            {/* <h2> Blog details- { id }</h2> */}
            { isPending && <div> Loading ...</div>}
            { error && <div> { error }</div>}
            { blog && (
                <article>
                    <h2> {blog.title }</h2>
                    <p> Written By { blog.author }</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;