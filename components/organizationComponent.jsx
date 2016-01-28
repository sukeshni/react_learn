import React from 'react';
import ReactDom from 'react-dom';

class Organization extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        value : ""
      };
      this.handleChange.bind(this);
  }

  handleChange(evt){
    this.setState({
      value: evt.target.value
    });
  }

  render(){
    return (
      <form>
        <input value={this.state.value} onChange={this.handleChange.bind(this)} className="orgComponent" placeholder="Enter Organization name ..."/>
      </form>
    );
  }
}

ReactDom.render(<Organization />, org);

module.exports = Organization;