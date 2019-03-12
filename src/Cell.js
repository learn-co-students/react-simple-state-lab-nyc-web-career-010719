import React, {Component} from 'react';

export default class Cell extends Component {
  constructor(props){
    super(props)
    this.state={color:this.props.value}

  }
  handleClick=()=>{
    // debugger
    console.log(this.state)
    this.setState({
      color:'#333'
    })
    console.log(this.state)
  }

  render(){
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>

      </div>
    )
  }

}
