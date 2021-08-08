import React, {Component} from "react";
class EventBind extends Component
{
    constructor() {
        super();
        this.state =
            {
                message: "hello world"
            }

     /*   /!* BINDING IN CONSTRUCTOR*!/
        this.handler = this.handler.bind(this)*/
    }
    handler = () =>
    {
        this.setState(
            {
                message: "good bye"
            }
        )
    }


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/*  <button onClick={this.handler.bind(this)}>Click</button>*/}
                {/*  <button onClick={()=>this.handler()}>Click</button>*/}

                <button onClick={this.handler}>Click</button>
            </div>
        )
    }
}
export default EventBind;