import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render(){
        return (
            <div>
                <h1 className="text-center font-bold text-2xl m-2 p-2">About Page</h1>
                <h2 className="text-center text-2xl m-2 p-2 justify-between">Hi there 👋

I am Prashanth Reddy Kadire, a Full Stack Developer with a passion for turning innovative ideas into powerful software solutions. I'm currently based in Atlanta, GA, but I'm open to exciting opportunities anywhere. With a background in Computer Science and Engineering, I have a solid foundation in the latest technologies and a proven track record of bringing my technical expertise to life through software projects that align seamlessly with organizational goals.</h2>
                <UserClass name={"First"} location={"Atlanta"}/>
            </div>
            );
    }
}

// const About = () => {
//     return (
//     <div>
//         <h1>About Page</h1>
//         <h2>This is About Page, this is Prashanth Reddy Kadire</h2>
//         {/* <User name={"Prashanth Function Component"}/> */}
//         <UserClass name={"Prashanth Class Based Component"} location={"Atlanta"}/>
//     </div>
//     );
// };

export default About;