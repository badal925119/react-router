import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,email,phone}=user
    return (
        <div className="border border-lime-300 my-2 rounded-lg p-3 shadow-xl">
            <h1>Name:{name}</h1>
            <h1>Email: {email}</h1>
            <h1>Phone: {phone}</h1>
            <Link to={`/user/${id}`}> <button className='bg-indigo-500 text-white p-1 rounded-lg font-bold'>More Details</button> </Link>
        </div>
    );
};

export default User;