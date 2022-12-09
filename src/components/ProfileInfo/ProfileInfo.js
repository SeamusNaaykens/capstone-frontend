import './ProfileInfo.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function ProfileInfo() {

    const { profileId } = useParams()

    const passProfileId = profileId || null

    const [ user, setUser ] = useState([])

    useEffect(() => {
        if (passProfileId === null) {
            return;
        }
        axios.get(`http://localhost:8080/users/${passProfileId}`)
        .then(response => {
            setUser(response.data)
        }).catch(err => {
            console.log("Error 404 Bad Request", err)
        })
     }, [passProfileId])


    return (
        <div className='profile-info__container'>
            <h1 className='profile-info__name'>{user.username}</h1>
            <img />
            <div className='profile-info__content-container'>
                <h2 className='profile-info__heading'>About you:</h2>
                <p className='profile-info__content'>{user.profile_statement}</p>
            </div>
            <div className='profile-info__content-container'>
                <h2 className='profile-info__heading'>Favourite produce:</h2>
                <p className='profile-info__content'>{user.favourite_produce}</p>
            </div>
            <div className='profile-info__content-container'>
                <h2 className='profile-info__heading'>Located in:</h2>
                <p className='profile-info__content'>{user.location}</p>
            </div>
            <div className='profile-info__content-container'>
                <h2 className='profile-info__heading'>Growing since: </h2>
                <p className='profile-info__content'>{user.account_creation}</p>
            </div>
        </div>
    );
};
export default ProfileInfo