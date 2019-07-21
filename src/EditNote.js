import React, {Component} from "react";

class EditNote extends Component
{
    constructor()
    {
        super();
        this.state = {
            
        }
    }
    render()
    {
        return (
        <div>
                <h1>{this.props.item.name}</h1>
                <textarea rows = "10" cols = "100" value = {this.props.item.text}></textarea>
        </div>
        )
    }
}

export default EditNote;
