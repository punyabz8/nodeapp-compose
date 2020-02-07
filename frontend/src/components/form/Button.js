import React from 'react';

export default class Button extends React.Component{
  render(){
    let { onclick, message, type ='button' } = this.props
    return(
    <button type = { type } onClick = { onclick }> { message} </button>
    )
  }
}