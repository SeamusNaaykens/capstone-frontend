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
        <div>
            <h1>{user.username}</h1>
            <img />
            <div>
                <h2>About you:</h2>
                <p>{user.profile_statement}</p>
            </div>
            <div>
                <h2>Favourite produce:</h2>
                <p>{user.favourite_produce}</p>
            </div>
            <div>
                <h2>Located in:</h2>
                <p>{user.location}</p>
            </div>
            <div>
                <h2>Growing since: </h2>
                <p>{user.account_creation}</p>
            </div>
        </div>
    )
}
export default ProfileInfo