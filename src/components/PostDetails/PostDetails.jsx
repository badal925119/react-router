import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()
    const {title, body}=post
    return (
        <div>
            <h1>Show Title: {title}</h1>
            <h1>show Body : {body}</h1>
        </div>
    );
};

export default PostDetails;