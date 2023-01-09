import './Profile.scss'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import Chatbox from '../../components/Chatbox/Chatbox'
import ProfileMarketplace from '../../components/ProfileMarketplace/ProfileMarketplace'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Profile() {

    const API_URL = 'http://localhost:8080'

    const [user, setUser] = useState(null);
    const [failedAuth, setFailedAuth] = useState(false);

    useEffect(() => {
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
    }, []);


    if (failedAuth) {
        return (
            <main className="profile-no-access">
                <div className='profile-no-access__container'>
                    <p className='profile-no-access__text'>You must be logged in to see this page. <Link to="/login">Log in</Link> here!</p>
                </div>
            </main>
        );
    }

    if (user === null) {
        return (
            <main className="profile-no-access">
                <p>Loading...</p>
            </main>
        );
    }

    return (
        <main className='profile-page'>
            <div className='profile-page__content-container'>
                <ProfileInfo />
                <Chatbox />
            </div>
            <ProfileMarketplace />
        </main>
    )
}
export default Profile