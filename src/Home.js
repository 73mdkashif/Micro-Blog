import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const url = 'http://localhost:8000/blogs/'
    const { data: blogs, isPending, error } = useFetch(url) //data:blogs means that we want to use data as blogs




    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div><h3>Loading...</h3></div>}
            {blogs && <BlogList blogs={blogs} title="All blog!" />}
        </div>
    )
}

export default Home;