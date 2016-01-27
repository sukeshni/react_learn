import React from 'react';

class Organization extends React.Component {

  handleChange(evt){
    this.setState({
      value: evt.target.value
    });
  }

  render(){
    return (
      <input className="orgComponent" type="text" onChange={this.handleChange} placeholder="Enter Organization name ..."/>
    );
  }
}

React.render(<Organization />, organization);