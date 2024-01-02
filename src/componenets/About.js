import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
    <div>
        <h1>About Page</h1>
        <h2>This is About Page, this is Prashanth Reddy Kadire</h2>
        <User name={"Prashanth Function Component"}/>
        <UserClass name={"Prashanth Class Based Component"} location={"Atlanta"}/>
    </div>
    );
};

export default About;