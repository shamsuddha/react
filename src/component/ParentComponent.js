import React, {Component} from "react";
import ChildComponent from "./ChildComponent";


class ParentComponent extends Component
{
    constructor() {
        super();

        this.state = {
            message : "Hello"
        }
        this.eventHandler = this.eventHandler.bind(this)
    }


    eventHandler(name)
    {
        alert(`${this.state.message} ${name}`)
    }

    render() {
        return(
            <div>
                <h1> Hello</h1>
                <ChildComponent name = {this.eventHandler}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent;