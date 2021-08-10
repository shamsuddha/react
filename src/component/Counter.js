import React, {Component} from "react";

class Counter extends Component
{
    constructor() {
        super();

        this.state = {
            count : 0
        }

        this.increment = this.increment.bind(this)
        this.incrementFive = this.incrementFive.bind(this)
    }

    increment()
    {
        this.setState((prevState)=>({
            count : prevState.count + 1
        }),
            ()=>{
            console.log("using the previous state in arrow function")
            }
        )

        /*this.setState( {
            count : this.state.count + 1
        },
            ()=>{
            console.log('hello')
            }
        )*/
    }

    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }


    render() {
        return (
            <div>
              <h1>count - {this.state.count}</h1>
                <button onClick={this.incrementFive}> Increment Value </button>
            </div>
        )
    }


}

export default Counter;

