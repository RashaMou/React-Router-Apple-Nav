import React from 'react';
import appleLogo from './../appleIcons/appleLogo.png';
import './../App.css';
import { Link, NavLink, Route } from 'react-router-dom';
import SubNav from './SubNav';


const NavWrapper = (props) => {
  return ( 
    <div className='nav-wrapper'>
      <nav className='top-menu'>
        <Link to='/'><li><img src={appleLogo} alt='Apple logo' className='apple-logo'/></li></Link>
        {props.nav.map(item => {
          return (
            <div>
              <div>
                <NavLink to={`/${item.navItem}`}><li>{item.navItem}</li></NavLink>
              </div>
              <nav className='sub-menu'>
                <Route
                  path={`/${item.navItem}`}
                  render={props => <SubNav {...props} icons={item.subMenuIcons}/>}
                /> 
              </nav> 
            </div>  
          )
        })}
      </nav>
    </div>
  )
}

export default NavWrapper