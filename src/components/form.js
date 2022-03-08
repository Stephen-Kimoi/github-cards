import * as React from 'react'; 
import axios from 'axios';

class Form extends React.Component { 
//  userNameInput = React.createRef(); 
 state = {
   userName : '', 
 }

 handleSubmit = async (event) => { 
  event.preventDefault(); 
  const resp =  await axios.get(`https://api.github.com/users/${this.state.userName}`); 
  this.props.onSubmit(resp.data);  
 } 

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
         type="text" 
         placeholder="Enter github username"  
         value={this.state.userName} 
         onChange={ (event) => {this.setState({userName: event.target.value})}}
        //  ref={this.userNameInput} 
         required />
        <br/>   
        <button>Add card</button>
      </form>
    )
  }
}

export default Form; 