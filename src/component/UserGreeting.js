import React, {Component} from "react";

class UserGreeting extends Component
{
    constructor(props) {
        super(props);
        this.state =
            {
                isLoggedIn : false
            }
    }


    render() {


        return (
            this.state.isLoggedIn ?
                <div> Hello Rajit</div> :
                <div> Hello guest</div>
            )








 /*       if(this.state.isLoggedIn)
        {
            return(
                <div>
                    <h1> Welcome Rajit</h1>
                </div>
            )
        }
        else
        {
            return(
                <div>

                    <h1> Welcome Guest</h1>
                </div>
            )
        }*/
    }

}
export default UserGreeting;
