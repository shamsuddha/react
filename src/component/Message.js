import React, {Component} from "react";

class Message extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                message: "Welcome Visitor"
            }
    }


    changeMessage()
    {
        this.setState({
            message: "thank you for subscribing"
        })
    }


    render() {
        return (
          <div>
              <h1>{this.state.message}</h1>
              <button onClick={()=>this.changeMessage()}>Click here</button>
          </div>
        )

    }
}
export default Message;