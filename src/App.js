import React, {Component} from 'react';
import NoteComponent from './NoteComponent';
import EditNote from './EditNote';

//let notesArray = [];
//notesArray.push({name:"note1", text:"asda"});
//localStorage.setItem('notes', JSON.stringify(notesArray));
let data = JSON.parse(localStorage.getItem('notes'));

class App extends Component
{
    constructor ()
    {
        super();
        this.state = {
        notesdata: data,
        displayNotes:true,
        currentNote:"",
        nameTextBox:""
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleNew = this.handleNew.bind(this);
    }
    handleEdit(name)
    {
        this.setState({
                      displayNotes:false,
                      currentNote:name
        });
    }
    handleChange(event)
    {
        let {name, value, type, checked} = event.target;
        this.setState({
                      [name]:value
        })
    }
    handleNew()
    {
        data.push({name:this.state.nameTextBox, text:""});
        localStorage.setItem('notes', JSON.stringify(data));
        this.setState((prevState) => {
                      return{
                      currentNote:prevState.nameTextBox,
                      nameTextBox:""
                      }});
    }
    render()
    {
        if(this.state.displayNotes)
        {
            const newData = this.state.notesdata.map(item => <NoteComponent item = {item} handleEdit = {this.handleEdit}/>);
            return (
                    <div>
                        <div>{newData}</div>
                    <textarea name = "nameTextBox" value = {this.state.nameTextBox} rows = "5" cols = "30" onChange = {this.handleChange}></textarea>
                    <button onClick = {this.handleNew}>new</button>
                    </div>
            )
        }
        else
        {
            if(this.state.currentNote === "")
            {
                const data = JSON.parse(localStorage.getItem('notes'));
                return(
                       <EditNote item = {data[0]} />
                )
            }
            else
            {
                let obj = {
                name:"",
                text:""
                }
                const note = this.state.notesdata.map(item => {
                                                      if(item.name === this.state.currentNote)
                                                      obj = item;
                                                      });
                return (
                        <EditNote item = {obj} />
                )
            }
        }
    }
}

export default App;
