import React, {Component} from "react";
class Form extends Component
{

    constructor(props) {
        super(props);
        this.state =
            {
                userName: "",
                comment: "",
                topic: "react"
            }
    }

    handleUserNameChange = (event)=>
    {
        this.setState({
            userName : event.target.value
        })
    }

    handleCommentsChange = (event) =>
    {
       this.setState({
           comment : event.target.value
       })
    }

    handleTopicChange = (event) =>
    {
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = (event) =>
    {
        alert(`${this.state.userName}, ${this.state.comment}, ${this.state.topic}`)
        event.preventDefault();
    }

    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>

                    <label>User Name: </label>
                    <br/>
                    <input
                        type="text"
                        value={this.state.userName}
                        onChange={this.handleUserNameChange}
                    />
                <label> Comments </label>
                <textarea
                    value={this.state.comment}
                    onChange={this.handleCommentsChange}>
                </textarea>
                <lebel>Topic</lebel>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
                <button type="submit">Submit Data</button>
            </form>
            </div>
        )
    }
}

export default Form;