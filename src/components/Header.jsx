import './Header.css'
import HeaderButton from './HeaderButton.jsx'

function Header() {
    return (
        <div className='header-title'> 
            <HeaderButton text='Home' link='/'/>
            <HeaderButton text='Resume' link='/resume'/>
            <HeaderButton text='Projects' link='/projects'/>
            <HeaderButton text='About Me' link='/about'/>
        </div>
    );
}

export default Header;
