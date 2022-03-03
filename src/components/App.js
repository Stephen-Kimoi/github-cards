import * as React from 'react'; 

const testData = [
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const CardList = (props) => (
  <div class="card-list">
    <Card {...testData[0]}/> 
    <Card {...testData[1]}/> 
    <Card {...testData[2]}/>    
  </div> 
)

class Card extends React.Component { 
  render () { 
    const profiles = this.props; 
    return (
      <div className="github-profile">
        <img src={profiles.avatar_url} />  
        <div className="info"> 
          <div className="name">{profiles.name}</div> 
          <div className="company">{profiles.company}</div>
        </div>
      </div> 
    )
  }
}

class App2 extends React.Component {
  render () {
        return (
        <div>
          <div className="header">{this.props.title}</div>  
          <CardList />  
        </div>
      )
 } 
}

export function App() {  
  return (
    <App2 title="Github Cards App"/> 
  );
}
