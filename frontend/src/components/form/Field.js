import React from 'react'

export default class Field extends React.Component{
  render(){
    let { type, name, placeholder, id  } = this.props;
    return(
      <input type = { type } name = { name } placeholder = { placeholder } id = { id } />
    )
  }
}