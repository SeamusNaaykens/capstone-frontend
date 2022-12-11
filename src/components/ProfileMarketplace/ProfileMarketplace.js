import './ProfileMarketplace.scss'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import addIcon from '../../assets/icons/add-icon.png'
import editIcon from '../../assets/icons/edit-24px.svg'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import DeleteModalPost from '../DeleteModal/DeleteModalPost.js'


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

    // Delete Section 
    const [clickDelete, setClickDelete] = useState(false);


    return (
        <div className='profile-marketplace'>
                 {clickDelete &&
                        <DeleteModalPost
                            setClickDelete={setClickDelete}
                            userPosts={userPosts}/>}
            <Link to={`/${profileId}/addPost`} className='profile-marketplace__icon-container'>
                <img className='profile-marketplace__add-icon' src={addIcon} />
            </Link>
            {userPosts.map((userPost) => (
                <div className='profile-marketplace-card'>
                    <img className='profile-marketplace-card__image' src={userPost.image} />
                    <h3 className='profile-marketplace-card__item-name'>{userPost.produce_name}</h3>
                    <div className='profile-marketplace-card__content-container'>
                        <div className='profile-marketplace-card__content-subcontainer'>
                            <div>
                                <p className='profile-marketplace-card__heading'>CATEGORY:</p>
                                <p className='profile-marketplace-card__content'>{userPost.produce_type}</p>
                            </div>
                            <div className='profile-marketplace-card__icon-container'>
                                <Link to={`/${userPost.id}/editPost`}>
                                    <img className='profile-marketplace-card__edit-icon' src={editIcon} />
                                </Link>
                                <div onClick={() => {
                                    setClickDelete(true)
                                }}>
                                    <img className='profile-marketplace-card__delete-icon' src={deleteIcon} />
                                </div>
                            </div>
                        </div>
                        <div className='profile-marketplace-card__content-subcontainer'>
                            <div>
                                <p className='profile-marketplace-card__heading'>QUANTITY:</p>
                                <p className='profile-marketplace-card__content'>{userPost.quantity}</p>
                            </div>
                            <div>
                                <p className='profile-marketplace-card__heading'>LOCATION:</p>
                                <p className='marketplace-card__content'>{userPost.location}</p>
                            </div>
                        </div>
                        <div className='profile-marketplace-card__content-subcontainer'>
                            <div>
                                <p className='profile-marketplace-card__heading'>HARVESTED ON:</p>
                                <p className='profile-marketplace-card__content'>{new Date(userPost.harvest_date).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <p className='profile-marketplace-card__heading'>POSTED ON:</p>
                                <p className='profile-marketplace-card__content'>{new Date(userPost.post_date).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                </div>))}

        </div>
    )
}
export default ProfileMarketplace