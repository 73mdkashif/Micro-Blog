import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be pound</p>
            <Link to="/">Back to homepage...</Link>

        </div>
    );
}

export default NotFound;