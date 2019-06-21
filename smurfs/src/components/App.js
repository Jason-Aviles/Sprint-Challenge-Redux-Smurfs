import React, { Component } from 'react';
import './App.css';
import SmurfListview from '../view/SmurfListview'
import {BrowserRouter, Route,Link} from 'react-router-dom'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <nav>
<Link to='/'>HOME</Link>

      </nav>
<Route exact path='/' component={SmurfListview}  />
    
    
    </BrowserRouter>
      </div>
    );
  }
}

export default App;
