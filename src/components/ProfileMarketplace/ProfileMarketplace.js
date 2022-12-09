import './ProfileMarketplace.scss'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'


function ProfileMarketplace() {

    const { profileId } = useParams()

    const passProfileId = profileId || null

    const [userPosts, setUserPosts] = useState([])

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

    return (

        userPosts.map((userPost) => (
            <div className='profile-marketplace-card'>
                <img className='profile-marketplace-card__image' src={userPost.image} />
                <h3 className='profile-marketplace-card__item-name'>{userPosts.produce_name}</h3>
                <div className='profile-marketplace-card__content-container'>
                    <div>
                        <p className='profile-marketplace-card__heading'>CATEGORY:</p>
                        <p className='profile-marketplace-card__content'>{userPost.produce_type}</p>
                    </div>
                    <div>
                        <p className='profile-marketplace-card__heading'>QUANITY:</p>
                        <p className='profile-marketplace-card__content'>{userPost.quantity}</p>
                    </div>
                    <div>
                        <p className='profile-marketplace-card__heading'>LOCATION:</p>
                        <p className='marketplace-card__content'>{userPost.location}</p>
                    </div>
                    <div>
                        <p className='profile-marketplace-card__heading'>HARVESTED ON:</p>
                        <p className='profile-marketplace-card__content'>{new Date(userPost.harvest_date).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p className='profile-marketplace-card__heading'>POSTED ON:</p>
                        <p className='profile-marketplace-card__content'>{new Date(userPost.post_date).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>))
    )
}
export default ProfileMarketplace