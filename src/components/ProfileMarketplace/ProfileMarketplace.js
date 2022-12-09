import './ProfileMarketplace.scss'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'


function ProfileMarketplace() {

const { profileId } = useParams()

const passProfileId = profileId || null

 const [ userPosts, setUserPosts ] = useState([])

 useEffect(() => {
    if (passProfileId === null) {
        return;
    }
    axios.get(`http://localhost:8080/users/${passProfileId}/produce`)
    .then(response => {
        setUserPosts(response.data)
    }).catch(err => {
        console.log("Error 404 Bad Request", err)
    })
 }, [passProfileId])

    return(
        <div>
             <Link className='profile-marketplace-card'>
                <card >
                    <img className='profile-marketplace-card__image' src={userPosts.image}/>
                    <h3 className='profile-marketplace-card__item-name'>{userPosts.produce_name}</h3>
                    <div className='profile-marketplace-card__content-container'>
                        <div>
                            <p className='profile-marketplace-card__heading'>CATEGORY:</p>
                            <p className='profile-marketplace-card__content'>{userPosts.produce_type}</p>
                        </div>
                        <div>
                            <p className='profile-marketplace-card__heading'>QUANITY:</p>
                            <p className='profile-marketplace-card__content'>{userPosts.quantity}</p>
                        </div>
                        <div>
                            <p className='profile-marketplace-card__heading'>LOCATION:</p>
                            <p className='marketplace-card__content'>{userPosts.location}</p>
                        </div>
                        <div>
                            <p className='profile-marketplace-card__heading'>HARVESTED ON:</p>
                            <p className='profile-marketplace-card__content'>{new Date(userPosts.harvest_date).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <p className='profile-marketplace-card__heading'>POSTED ON:</p>
                            <p className='profile-marketplace-card__content'>{new Date(userPosts.post_date).toLocaleDateString()}</p>
                        </div>
                    </div>
                </card>
            </Link>
        </div>
    )
}
export default ProfileMarketplace