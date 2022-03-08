import * as React from 'react';  
import Form from './form'; 
import CardList from './CardList'; 

const testData = [
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

class App2 extends React.Component {  
  state = {
    profiles : testData, 
  }  
  addNewProfile = (newProfiles) => {
    this.setState( prevState => ({
      profiles: [...prevState.profiles, newProfiles]
    }))
  }
  
  render () {
        return (
        <div>
          <div className="header">{this.props.title}</div>   
          <Form onSubmit={this.addNewProfile}/> 
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
