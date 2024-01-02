const User = (props) => {
    return (
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <h3>Location: Atlanta</h3>
            <h4>Contact: @Prashanth14</h4>
        </div>
    );
};

export default User;