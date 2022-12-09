import './Profile.scss'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import Chatbox from '../../components/Chatbox/Chatbox'
import ProfileMarketplace from '../../components/ProfileMarketplace/ProfileMarketplace'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Profile() {

    // const { profileId } = useParams

    // const passProfileId = profileId || null

    // const [ user, setUser ] =useState([])

    // useEffect(() => {
    //     if (passProfileId === null) {
    //         return;
    //     }
    //     axios.get(`http://localhost:8080/${passProfileId}`)
    //     .then(response => {
    //         setUser(response.data)
    //     }).catch(err => {
    //         console.log("Error 404 Bad Request", err)
    //     })
    //  }, [])


    return (
        <main className='profile__page'>
            <div className='profile__page-content-container'>
                <ProfileInfo  />
                <Chatbox />
            </div>
            <ProfileMarketplace />
        </main>
    )
}
export default Profile