import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h1>Our Post: {posts.length}</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-2">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;