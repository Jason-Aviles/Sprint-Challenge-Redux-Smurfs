import React, { Component } from 'react';
import {connect} from 'react-redux'
import {editSmurfs,getSmurf} from '../actions'

class EditSmurf extends Component {
    state={

        name: '',
        age: '',
        height: ''

    }

   componentDidMount(){
       this.props.getSmurf()
   }
    

onInputChange=(e)=>{
this.setState({[e.currentTarget.name]:e.currentTarget.value})

}

onSubmitHandle=(e)=>[
    e.preventDefault(),
    this.props.editSmurfs(this.props.smurfIds)

]

    render() {
        const id = this.props.smurf.map(smurf => smurf.id)
        
        return (
            <div>
                <form onSubmit={this.onSubmitHandle}>
                  edit name:   <input onChange={this.onInputChange}  name='name' value={this.state.name}/>
                   edit age:  <input onChange={this.onInputChange}  name='age' value={this.state.age}/>
                    edit height: <input onChange={this.onInputChange}  name='height' value={this.state.height}/>


                    <button>Edit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
   
    return{smurf:state.smurfs}
}



export default connect(mapStateToProps,{editSmurfs,getSmurf})(EditSmurf);
