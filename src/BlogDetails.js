import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const url = "http://localhost:8000/blogs/" + id;
    const { data: blog, isPending, error } = useFetch(url);
    const history = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            history('/')
        })
    }

    return (
        <div className="blog-details">
            {isPending && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;