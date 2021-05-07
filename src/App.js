import React from 'react';
import './App.css';
import Header from './Header/Header';
import NameResults from './NameResults/NameResults';

const generateNames = require('@rstacruz/startup-name-generator');

class App extends React.Component{
  state = {
    suggestedNames: [],
  }
  handleInputText = (value) => {
    this.setState({
      suggestedNames: value ? generateNames(value) : []
    })
  }
  render(){
    return <div>
      <Header handleInputText={this.handleInputText}/>
      <NameResults suggestedNames={this.state.suggestedNames} />
    </div>
  }
}

export default App;
