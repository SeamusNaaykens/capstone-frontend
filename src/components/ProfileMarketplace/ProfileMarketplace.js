import './ProfileMarketplace.scss'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import addIcon from '../../assets/icons/add-icon.png'
import editIcon from '../../assets/icons/edit-24px.svg'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import DeleteModalPost from '../DeleteModal/DeleteModalPost.js'
import Modal from 'react-modal'
import React from 'react'


function ProfileMarketplace() {

    // UseParam to capture the profile Id that is passed into the axios request to access all user posts
    const { profileId } = useParams()

    const passProfileId = profileId || null

    //  Variables used to store an array of user posts in state
    const [userPosts, setUserPosts] = useState([])


    // Axios request used to access all user posts
    useEffect(() => {
        if (passProfileId === null) {
            return;
        }
        axios.get(`http://localhost:8080/users/${passProfileId}/produce`)
            .then(response => {
                setUserPosts(response.data)
                console.log(response.data)
            }).catch(err => {
                console.log("Error 404 Bad Request", err)
            })
    }, [passProfileId])

    // Delete Section 

    // The state variables used to toggle the delete modals and to pass necessary information down to the modal component in state
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [postId, setPostId] = useState("");
    const [postName, setPostName] = useState("");

    // Logic used to capture and pass information in state to the modal component
    const handleClick = (postId, postName) => {
        setPostId(postId)
        setPostName(postName)
    }

    // Logic used to open the delete modal
    function openModal() {
        setIsOpen(true)
    }

    // Logic used to close the delete modal
    function closeModal() {
        setIsOpen(false)
    }

    return (
        <div className='profile-marketplace'>
            <Modal
                postId={postId}
                postName={postName}
                userPosts={userPosts}
                isOpen={modalIsOpen}>
                {<DeleteModalPost
                    postId={postId}
                    postName={postName}
                    userPosts={userPosts}
                    toClose={closeModal}
                />}
            </Modal>
            <Link to={`/${profileId}/addPost`} className='profile-marketplace__icon-container'>
                <img className='profile-marketplace__add-icon' src={addIcon} alt='add post plus' />
            </Link>
            <div className='profile-marketplace__container'>
                {userPosts.length > 0 ? (userPosts.map((userPost) => (
                    <div className='profile-marketplace-card'>
                        <img className='profile-marketplace-card__image' src={userPost.image} alt={userPost.produce_name} />
                        <h3 className='profile-marketplace-card__item-name'>{userPost.produce_name}</h3>
                        <div className='profile-marketplace-card__content-container'>
                            <div className='profile-marketplace-card__content-subcontainer'>
                                <div>
                                    <p className='profile-marketplace-card__heading'>Category</p>
                                    <p className='profile-marketplace-card__content'>{userPost.produce_type}</p>
                                </div>
                                <div className='profile-marketplace-card__icon-container'>
                                    <Link to={`/${userPost.id}/editPost`}>
                                        <img className='profile-marketplace-card__edit-icon' src={editIcon} alt='edit pencil' />
                                    </Link>
                                    <div className='profile-marketplace-card__delete-icon--container' onClick={() => {
                                        handleClick(userPost.id, userPost.produce_name)
                                        openModal()

                                    }}>
                                        <img className='profile-marketplace-card__delete-icon' src={deleteIcon} alt='orange garbage can' />
                                    </div>
                                </div>
                            </div>
                            <div className='profile-marketplace-card__content-subcontainer'>
                                <div>
                                    <p className='profile-marketplace-card__heading'>Quantity</p>
                                    <p className='profile-marketplace-card__content'>{userPost.quantity}</p>
                                </div>
                                <div>
                                    <p className='profile-marketplace-card__heading'>Location</p>
                                    <p className='profile-marketplace-card__content'>{userPost.location}</p>
                                </div>
                            </div>
                            <div className='profile-marketplace-card__content-subcontainer'>
                                <div>
                                    <p className='profile-marketplace-card__heading'>Harvested On</p>
                                    <p className='profile-marketplace-card__content'>{new Date(userPost.harvest_date).toLocaleDateString()}</p>
                                </div>
                                <div>
                                    <p className='profile-marketplace-card__heading'>Posted On</p>
                                    <p className='profile-marketplace-card__content'>{new Date(userPost.post_date).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>))
                ) : <div className='profile-marketplace-card__no-post'><h1 className='profile-marketplace-card__no-post-message'>No posts yet! Use the orange plus icon above to create one</h1></div>}
            </div>
        </div>
    )
}
export default ProfileMarketplace