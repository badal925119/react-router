import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData()
    const {name,website}=user
    return (
        <div>
            <h1>Details About user: {name}</h1>
            <h1>website: {website}</h1>
            
        </div>
    );
};

export default UserDetails;