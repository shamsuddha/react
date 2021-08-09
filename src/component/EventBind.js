import React, {Component} from "react";
class EventBind extends Component
{
    constructor() {
        super();
        this.state =
            {
                message: "why you knocked me?"
            }

            this.handler = this.handler.bind(this)
    }


    handler()
    {
        this.setState({
            message: "Good bye"
        })
    }


    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.handler}>Show message</button>
            </div>
        )
    }

}
export default EventBind;