import React from 'react';

class Btn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isSelected: false};
  }
  handleClick() {
    this.setState({
      isSelected: true
    })
  }

  create(){
    alert('created');
  }
  read(){
    alert('read');
  }
  update(){
    alert('updated');
  }
  deleteOrg(){
    alert('deleted');
  }
  render() {
    return(
      <div>
        <button className="btnReact" onClick={this.create}>Create</button>
        <button className="btnReact" onClick={this.read}>Read</button>
        <button className="btnReact" onClick={this.update}>Update</button>
        <button className="btnReact" onClick={this.deleteOrg}>Delete</button>
      </div>
    );
  }
}

React.render(<Btn />, btn);