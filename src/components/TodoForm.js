import React from "react"

class TodoForm extends React.Component{
    constructor(){
        super()
        this.state = {
            item: ""
        }
    }

    handleChanges = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleKeyPress = event => {
        if(event.key === "Enter"){
            
        }
    }

    submitItem = event => {
        event.preventDefault()
        this.setState({ item: ""})
        this.props.addItem(event, this.state.item)
    }

    render() {
        return(
        <div>
            <h2>add to do task</h2>
            <form onSubmit={this.submitItem} onKeyPress={this.handleKeyPress}>
                <input name="item" type="text" value={this.state.item} onChange={this.handleChanges}/>
                <button> Add Item </button>
            </form>
        </div>
    )
}
}

export default TodoForm