import './ProfileInfo.scss'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import editIcon from '../../assets/icons/edit-24px.svg'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import DeleteModalUser from '../DeleteModal/DeleteModalUser'
import Modal from 'react-modal'
import React from 'react'

function ProfileInfo() {

    // useParam used to capture profile id
    const { profileId } = useParams()

    const passProfileId = profileId || null

    // State variable used to save user data in state
    const [user, setUser] = useState([])

    // Axios request used to access a single users data
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


    // Logic used to open and close delete modal
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }


    return (

        <div className='profile-info'>
            <Modal
            isOpen={modalIsOpen}>
                {<DeleteModalUser
                    setUser={setUser}
                    id={user.id}
                    name={user.username}
                    toClose={closeModal} />}
            </Modal>
            <h1 className='profile-info__name'>{user.username}</h1>
            <div className='profile-info__container'>
                <div className='profile-info__subcontainer--1'>
                    <img className='profile-info__picture' src={user.image} alt={user.username} />
                    <div className='profile-info__content-container'>
                        <div className='profile-info__heading-container'>
                            <h2 className='profile-info__heading'>About you:</h2>
                        </div>
                        <p className='profile-info__content'>{user.profile_statement}</p>
                    </div>
                </div>
                <div className='profile-info__subcontainer--2'>

                    <div className='profile-info__content-container'>
                        <div className='profile-info__heading-container'>
                            <h2 className='profile-info__heading'>Favourite produce:</h2>
                        </div>
                        <p className='profile-info__content'>{user.favourite_produce}</p>
                    </div>
                    <div className='profile-info__content-container'>
                        <div className='profile-info__heading-container'>
                            <h2 className='profile-info__heading'>Located in:</h2>
                        </div>
                        <p className='profile-info__content'>{user.location}</p>
                    </div>
                    <div className='profile-info__content-container'>
                        <div className='profile-info__heading-container'>
                            <h2 className='profile-info__heading'>Growing since: </h2>
                        </div>
                        <div className='profile-info__content-subcontainer'>
                            <p className='profile-info__content'>{new Date(user.account_creation).toLocaleDateString()}</p>
                            <div className='profile-info__icon-container'>
                                <Link to={`/${profileId}/editProfile`}>
                                    <img className='profile-info__icon' src={editIcon} alt='blue edit pencil' />
                                </Link>
                                <div onClick={() => {
                                    openModal()
                                }}>
                                    <img className='profile-info__icon' src={deleteIcon} alt='orange delete garbage can' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfileInfo