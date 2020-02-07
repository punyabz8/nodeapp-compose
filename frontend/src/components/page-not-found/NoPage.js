import React from 'react';
import { Link } from 'react-router-dom';
import unHappy from '../../files/images/unHappy.png';

import "./style.css";

class NoPage extends React.Component{
  render(){
    return(
      <div className='notFound'>
        <img src = {unHappy} alt="unHappy emoji" />
        <h1>404 Error</h1>
        <h2>Page Not Found!!!</h2>
        <h3>We're sorry, the page you requested is not found.<br /> Please go back to <Link to='/'>Home</Link> page or check contact us at helpus@support.co</h3>
      </div>
    );
  }
}

export default NoPage;