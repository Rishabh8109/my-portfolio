import { Link } from 'react-scroll';
import {NavbarLogo} from '../Navbar/NavbarElement';

function Logo() {
  const logo = "https://avatars.githubusercontent.com/u/61899406?v=4"
    return (
        <>
          <NavbarLogo>
                <img src={logo} alt="logo"  width="16%" style={{borderRadius : '50%'}}/>
                <Link to="home" duration={600} smooth={true} spy={true} style={{cursor : 'pointer'}} className="navbrand">
                  FrontendDev
                </Link>
          </NavbarLogo>  
        </>
    )
}

export default Logo;
