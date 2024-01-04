import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name:"Dummy",
                location: "Default",
                avatar_url: "http://dummy.jpg",
            },
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Prashanth14");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        });
    }

    render(){
        const {name, location, avatar_url
        } = this.state.userInfo;
        return(
            <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @Prashanth14</h4>
            </div>
        );
    }
}

export default UserClass;