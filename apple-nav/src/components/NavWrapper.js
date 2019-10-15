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
        <NavLink to='/mac'><li>Mac</li></NavLink>
        <NavLink to='/ipad'><li>iPad</li></NavLink>
        <NavLink to='/iphone'><li>iPhone</li></NavLink>
        <NavLink to='/watch'><li>Watch</li></NavLink>
        <NavLink to='/tv'><li>TV</li></NavLink>
        <NavLink to='/music'><li>Music</li></NavLink>   
      </nav>
        {props.nav.map(item => {
          return (
              <nav className='sub-menu'>
                <Route
                  path={`/${item.navItem}`}
                  render={props => <SubNav {...props} icons={item.subMenuIcons}/>}
                /> 
              </nav>   
          )
        })}
    </div>
  )
}

export default NavWrapper