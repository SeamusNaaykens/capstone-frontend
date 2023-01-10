import './Header.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/GROWLocal.jpg'
import addProfile from '../../assets/icons/add-icon-white.png'

function Header({isLoggedIn}) {

    const [user, setUser] = useState(null);
    const [failedAuth, setFailedAuth] = useState(false);

    useEffect(() => {

        const API_URL = 'https://growlocal.herokuapp.com'

        const token = sessionStorage.getItem('token');

        if (!token) {
            return setFailedAuth(true);
        }

        // Get the data from the API
        axios.get(`${API_URL}/users/current/loggedin`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                setUser(response.data);
            })

            .catch((error) => {
                console.log(error);
                setFailedAuth(true);
            });
    }, [isLoggedIn]);

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        setUser(null);
        setFailedAuth(true);
    };


    return (
        <header className='header'>

            <div className='header__link-container--1'>
                <Link to={'/addProfile'} className='header__create-link'>
                    <img className='header__create-icon--1' src={addProfile} alt='Create profile' />
                    <div className='header__create-container'>
                        <img className='header__create-icon--2' src={addProfile} alt='Create profile' />
                        Create profile</div>
                </Link>
                {user === null ? (
                    <div className='header__current-user-container'>
                        <div className='header__avatar--placeholder'></div>
                        <Link to={'/login'} className='header__login-link'>
                            <div className='header__login-container'>Login</div>
                        </Link>
                    </div>)
                    :
                    (<div className='header__current-user-container'>
                        <Link to={`/${user.id}`}>
                            <img className='header__avatar' src={user.image} alt={user.username} />
                        </Link>
                        <button className='header__logout-button' onClick={handleLogout}>Logout</button>
                    </div>)}
            </div>
            <Link to={'/'} className='header__logo-container'>
                <img className='header__logo' src={logo} alt='GrowLocal logo' />
            </Link>
            <div className='header__link-container--2'>
                <div className='header__link-subcontainer'>
                    <Link to={'/'} className='header__link--1'>Homepage</Link>
                    <Link className='header__link--2'>Learning Channel</Link>
                    <Link to={'findProfiles'} className='header__link--3'>Find Profiles</Link>
                </div>
            </div>
        </header>
    )
}
export default Header