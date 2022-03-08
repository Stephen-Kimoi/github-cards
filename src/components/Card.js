import * as React from 'react'; 

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

export default Card; 