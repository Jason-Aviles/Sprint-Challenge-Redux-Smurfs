import React, { Component } from 'react';
import {connect} from 'react-redux'
import {editSmurfs} from '../actions'

class EditSmurf extends Component {
    state={

        name: '',
        age: '',
        height: ''

    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
          const editSmurf = this.props.smurfs.filter(
            smurf => smurf.id === this.props.match.params.id
          );
          console.log(editSmurf);
          this.setState({
            name: editSmurf.name,
            age: editSmurf.age,
            height: editSmurf.height
          });
        }
      }
    

onInputChange=(e)=>{
this.setState({[e.currentTarget.name]:e.currentTarget.value})

}

onSubmitHandle=(e)=>[
    e.preventDefault(),
    this.props.editSmurfs(this.state)

]

    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.onSubmitHandle}>
                     <input onChange={this.onInputChange}  name='name' value={this.state.name}/>
                     <input onChange={this.onInputChange}  name='age' value={this.state.age}/>
                     <input onChange={this.onInputChange}  name='height' value={this.state.height}/>


                    <button>Edit</button>
                </form>
            </div>
        );
    }
}

export default connect(null,{editSmurfs})(EditSmurf);
