import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const { data:blog, isPending } = useFetch('http://localhost:8000/blogs/' + id)
   
    return ( 
        <div className="blog-details">
            {/* <h2> Blog details- { id }</h2> */}
            { isPending && <div> Loading ...</div>}
        </div>
     );
}
 
export default BlogDetails;