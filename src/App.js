import logo from './logo.svg'
import profilePic from './profilePic.svg';
import './App.css';
import React from 'react'
import Profile from './Profile'

class App extends React.Component {
  
 
  constructor(props) {
    super(props);
    
    this.state = {
    person:{ 
      fullName:"Refka HADDAJI",
      bio:` 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. `, 
      imgSrc:profilePic, 
      profession:"Full-stack developer"
      },
      visibility: false,
      btnName:"Show"
    };
  }
 
toggleVisibility= ()=>{

  this.setState({visibility:!this.state.visibility})

  if(this.state.visibility=== true){
    this.setState({btnName:"Show" }) } 
  else{  
    this.setState({btnName:"Hide" }) 
   }
 // 
}

  render(){
    return (
    <div className="App">
     
        
        {this.state.visibility && <Profile personne={this.state.person} />}
        <button type="button" className="simple" onClick={this.toggleVisibility} > {this.state.btnName}</button>
        
    
    </div>
  );
}  
  }


export default App;
