const Create = () => {
    return ( 
        <div className="title">
            <h2> Add a new blog</h2>
            <form>
               <label>Blog Title</label>
               <input
                    type="text"
                    required
                />
                <label>Blog Body</label>
              <textarea required>

              </textarea>
                
            </form>
        </div>
     );
}
 
export default Create;