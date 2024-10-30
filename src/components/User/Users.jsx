import { useLoaderData } from "react-router-dom";
import User from "../user/User";


const Users = () => {
    const users =useLoaderData();
    return (
        <div className="bg-yellow-800 p-2 my-2 text-white">
            <h1>Our User: {users.length}</h1>
            <p>You see our good users</p>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-2  "> 
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;