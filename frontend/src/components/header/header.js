import React from 'react';
import NavBar from './navbar';
import { Link } from 'react-router-dom';

import './style.css';

class header extends React.Component{
  render(){
    return(
      <div className='header' ref={this.refHeader}>
        <div className='header-wrapper'>
          <div className='logo'>
            <p><Link to='/'>ORGANIZE</Link></p>
          </div>
          <NavBar />
        </div>
      </div>
    )
  }
}

export default header;
