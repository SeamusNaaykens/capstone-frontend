import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/GROWLocal.png'

function Header() {
    return (
        <header className='header'>
            <Link className='header__login-link'>Login</Link>
            <Link>
                <img className='header__logo' src={logo}/>
            </Link>
            <div className='header__container'>
                <div className='header__link-container'>
                    <Link className='header__link'>Homepage</Link>
                    <Link className='header__link'>Learning Channel</Link>
                    <Link className='header__link'>My Profile</Link>
                </div>
                <input className='header__search-bar' type='text' placeholder='Search'></input>
            </div>
        </header>
    )
}
export default Header