import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/GROWLocal.jpg'
import addProfile from '../../assets/icons/add-icon-white.png'

function Header() {
    return (
        <header className='header'>
            <div className='header__link-container--1'>
                <Link to={'/addProfile'} className='header__create-link'>
                    <img className='header__create-icon--1' src={addProfile} alt='Create profile' />
                    <div className='header__create-container'>
                        <img className='header__create-icon--2' src={addProfile} alt='Create profile' />
                        Create profile</div>
                </Link>
                <Link className='header__login-link'>
                    <div className='header__login-container'>Login</div>
                </Link>
            </div>
            <Link to={'/'} className='header__logo-container'>
                <img className='header__logo' src={logo} />
            </Link>
            <div className='header__link-container--2'>
                <div className='header__link-subcontainer'>
                    <Link to={'/'} className='header__link--1'>Homepage</Link>
                    <Link className='header__link--2'>Learning Channel</Link>
                    <Link className='header__link--3'>My Profile</Link>
                </div>
            </div>
        </header>
    )
}
export default Header