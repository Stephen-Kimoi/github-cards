import * as React from 'react'; 

const testData = [
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const CardList = (props) => (
  <div className="card-list">
    {props.profiles.map(profile => <Card {...profile}/>)}    
  </div> 
)

class Form extends React.Component { 
//  userNameInput = React.createRef(); 
 state = {
   userName : '', 
 }

 handleSubmit = (event) => { 
  event.preventDefault(); 
  console.log( 
    this.userNameInput.current.value
  ); 
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

class Card extends React.Component { 
  render () { 
    const profiles = this.props; 
    return (
      <div className="github-profile">
        <img className="user-image" src={profiles.avatar_url} />  
        <div className="info"> 
          <div className="name">{profiles.name}</div> 
          <div className="company">{profiles.company}</div>
        </div>
      </div> 
    )
  }
}

class App2 extends React.Component {  
  state = {
    profiles : testData, 
  }
  render () {
        return (
        <div>
          <div className="header">{this.props.title}</div>   
          <Form /> 
          <CardList profiles={this.state.profiles}/>  
        </div>
      )
 } 
}

export function App() {  
  return (
    <App2 title="Github Cards App"/> 
  );
}
