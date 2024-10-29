

const User = ({user}) => {
    const {id,name,email,phone}=user
    return (
        <div className="border border-lime-300 my-2 rounded-lg p-3 shadow-xl">
            <h1>id: {id}</h1>
            <h1>Name:{name}</h1>
            <h1>Email: {email}</h1>
            <h1>Phone: {phone}</h1>
        </div>
    );
};

export default User;