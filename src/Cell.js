import React, { Component } from 'react';
class Cell extends Component {

state = {
  color: this.props.value
}

updateValue = () => {
  this.setState({
    color:'#333'
  })
  console.log(this.state.color)
}

render() {
  return <div
  className="cell"
  style={{backgroundColor: this.state.color}}
  onClick={this.updateValue}></div>
}

}

export default Cell
