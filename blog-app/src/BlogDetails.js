import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const {} = useParams()
    return ( 
        <div className="blog-details">
            <h2> Blog details</h2>
        </div>
     );
}
 
export default BlogDetails;