import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('kashif');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }
        setIsPending(true)
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" }, //this line tells the machine the type of request we are sinding which is json  
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false)
            history("/")
        })
    }

    return (
        <div className="create">
            <h2>We are at blog page</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </label>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="kashif">Kashif</option>
                    <option value="aatif">Aatif</option>
                    <option value="faiz">Faiz</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog ...</button>}
            </form>
        </div>
    );
}

export default CreateBlog;

