import './FindProfiles.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function FindProfiles() {

    // State variable to save all profiles in state
    const [allProfiles, setAllProfiles] = useState([]);

    // Axios request used to call all profiles and save them in state
    useEffect(() => {
        axios.get('http://localhost:8080/users')
            .then(response => {
                setAllProfiles(response.data)
            }).catch(err => {
                alert("Error 404 Bad Request", err)
            })
    }, [])



    return (
        <div className='find-profiles'>
            <div className='find-profiles__container'>
                <h1 className='find-profiles__heading'>Looking for someone? Find them here!</h1>
                {allProfiles.map((allProfile) => {
                    return (
                        <Link to={`/${allProfile.id}`} className='find-profiles__content-container'>
                            <img className='find-profiles__picture' src={allProfile.image}  alt={allProfile.name}/>
                            <p className='find-profiles__name'>{allProfile.username}</p>
                            <p className='find-profiles__location'>{allProfile.location} </p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
export default FindProfiles