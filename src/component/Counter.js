import React, {Component} from "react";

class Counter extends Component
{
    constructor() {
        super();
        this.state =
            {
                count : 0
            }
    }

    increment()
    {

        // SET STATE
        /*this.setState(
            {
                count : this.state.count + 1
            },
            ()=> {
                console.log(this.state.count)
            }
        )*/



        //PREVIOUS STATE AND CALL BACK
        this.setState((prevState)=>(
            {
                count : prevState.count + 1
            }
        ),
            ()=>{
            console.log('hello', this.state.count)
            }
        )



    }




    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }

    render()
    {
        return(
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={()=>this.incrementFive()}>Add Value</button>
            </div>
        )
    }
}

export default Counter;
