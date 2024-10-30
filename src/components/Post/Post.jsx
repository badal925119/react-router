import { Link } from "react-router-dom";


const Post = ({post}) => {
    const { id,title, body}=post
    return (
        <div className="border border-lime-300 my-2 rounded-lg p-3 shadow-xl">
            <h1>Title: {title}</h1>
            <p>Body: {body}</p>
            <Link to={`/post/${id}`}><button>More Details</button></Link>
        </div>
    );
};

export default Post;