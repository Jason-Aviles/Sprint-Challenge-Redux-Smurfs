import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addSmurf} from '../actions'

class AddSmurf extends Component {
    state={

        name: '',
        age: '',
        height: ''

    }

onInputChange=(e)=>{
this.setState({[e.currentTarget.name]:e.currentTarget.value})

}

onSubmitHandle=(e)=>[
    e.preventDefault(),
    this.props.addSmurf(this.state)

]

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandle}>
                     <input onChange={this.onInputChange}  name='name' value={this.state.name}/>
                     <input onChange={this.onInputChange}  name='age' value={this.state.age}/>
                     <input onChange={this.onInputChange}  name='height' value={this.state.height}/>


                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default connect(null,{addSmurf})(AddSmurf);
