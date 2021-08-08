import React, {Component} from "react";

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                count: 0
            }
    }
    addIncrement()
    {
        this.setState({
            count : this.state.count + 1
        },
            ()=> {
           console.log('hello', this.state.count)
            }
        )

    }

    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={()=>this.addIncrement()}>Add one</button>
            </div>
        )

    }
}
export default Counter;