import './NavBar.styles.css'
import menu from '../../media/images/menu.png';
import { Outlet } from 'react-router-dom';

const NavBar = () => {
    return (
      <div className="nav-bar">
        <div className="nav-bar-container">
          <img src={menu} className='menu-icon pointer'/>
          <p className='fake-logo pointer'>KNOW IT.</p>
        </div>
        <Outlet></Outlet>
        
      </div>
    );
}
  
export default NavBar;