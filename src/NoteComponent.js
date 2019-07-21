import React, {Component} from "react"

class NotesComponent extends Component
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
            <button onClick = {() => this.props.handleEdit(this.props.item.name)}>edit</button><br />
    </div>
            )}
}

export default NotesComponent;
