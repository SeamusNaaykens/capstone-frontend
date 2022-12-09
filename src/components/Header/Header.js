import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/GROWLocal.jpg'

function Header() {
    return (
        <header className='header'>
            <div className='header__link-container--1'>
                <Link className='header__login-link'>Login</Link>
                <Link to={'/'} className='header__logo-container'>
                    <img className='header__logo' src={logo} />
                </Link>
            </div>
            <div className='header__container'>
                <div className='header__link-container--2'>
                    <Link to={'/'} className='header__link'>Homepage</Link>
                    <Link className='header__link'>Learning Channel</Link>
                    <Link className='header__link'>My Profile</Link>
                </div>
                <input className='header__logo-search' type='text' placeholder='Search'></input>
            </div>
        </header>
    )
}
export default Header