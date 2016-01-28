import React from 'react';
import ReactDom from 'react-dom';

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
        <button id="btn1" className="btnReact" onClick={this.create}>Create</button>
        <button id="btn2" className="btnReact" onClick={this.read}>Read</button>
        <button id="btn3" className="btnReact" onClick={this.update}>Update</button>
        <button id="btn4" className="btnReact" onClick={this.deleteOrg}>Delete</button>
      </div>
    );
  }
}

ReactDom.render(<Btn />, btn);

module.exports = Btn;