import './NavBar.styles.css'
import menu from '../../media/images/menu.png';
import { Outlet } from 'react-router-dom';
import { useRef } from 'react';

const NavBar = (props) => {
  const navIconRef = useRef();
  return (
    <div className="nav-bar">
      <div className="split-color nav-bar-container"></div>
      <div className='icon-container nav-bar-container'>
        <div className='nav-icon' ref={navIconRef} onClick={() => {navIconRef.current.classList.toggle("open-nav"); props.handleMenu()}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <img src={menu} className='menu-icon pointer' onClick={() => props.handleMenu()}/> */}
        <p className='fake-logo pointer'>KNOW IT.</p>
      </div>


      <Outlet></Outlet>

    </div>
  );
}

export default NavBar;