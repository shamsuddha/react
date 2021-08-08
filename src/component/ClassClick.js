import React, {Component} from "react";


class ClassClick extends Component
{

    handler()
    {
        console.log("click the button")

    }

    render() {
        return (
            <div>
                <button onClick={this.handler}>Click me</button>
            </div>
        );
    }

}

export default ClassClick;
