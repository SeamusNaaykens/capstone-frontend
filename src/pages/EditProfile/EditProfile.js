import './EditProfile.scss'
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function EditProfile() {

    // Variable used to save useNavigate function
    const navigate = useNavigate()

    // useParam to capture profile id
    const { profileId } = useParams();

    // State variable used to set form input into state
    const [editUser, setEditUser] = useState({
        username: '',
        email:'',
        // image: ,
        location: '',
        profile_statement: '',
        favourite_produce: '',
    })

     // Axios request used to get access a the user profile data and set it in state
    useEffect(() => {

        axios.get(`http://localhost:8080/users/${profileId}`)
            .then(res => {
                setEditUser(res.data)
            })
    }, [profileId])

    // Logic used to update profile data. Spread operator is used to copy and input new data
    const updateUser = (e) => {
        const { name, value } = e.target;
        setEditUser((current) => {
            return {
                ...current,
                [name]: value,
            }
        })
    }

     // Logic used to handle incoming form data, update posts in the backend and fetch the updated data. Additional logic is implemented to pass file data to backend 
    const handleSubmitEvent = (e) => {
        e.preventDefault();

        const form = e.target;

        // Create a FormData  (multipart form data) object   
        //  that we can use to send to the backend  
        //It will have any data from your form and you can
        //  add more data to the object later
        const formData = new FormData(form);
     
        axios
            .patch(`http://localhost:8080/users/${profileId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
              },
            }).then(res => {
                navigate(`/${editUser.id}`)
                alert('User updated sucessfully')
            })
            .catch((err) => window.alert(err)) 
            e.target.reset()
    }

    return (
        <section className='edit-user'>
            <div className='edit-user__form-container'>
                <h1 className='edit-user__heading'>Edit Profile</h1>
                <form className='edit-user__form' onSubmit={handleSubmitEvent}>
                    <div className='edit-user__input-container'>
                        <div className='edit-user__input-subcontainer'>
                            <h2 className='edit-user__input-heading'>NAME</h2>
                            <input
                                className='edit-user__input'
                                type='text'
                                onChange={updateUser}
                                value={editUser.username}
                                required={true}
                                label='username'
                                placeholder='Change your name here!'
                                name='username'
                                id='username'>
                            </input>
                        </div>
                        <div className='edit-user__input-subcontainer'>
                            <h2 className='edit-user__input-heading'>LOCATION</h2>
                            <input
                                className='edit-user__input'
                                type='text'
                                onChange={updateUser}
                                value={editUser.location}
                                required={true}
                                label='Location'
                                placeholder='Which city and quadrant you are located in'
                                name='location'
                                id='location'>
                            </input>
                        </div>
                    </div>
                    <div className='edit-user__input-container'>
                        <div className='edit-user__input-subcontainer'>
                            <h2 className='edit-user__input-heading'>PROFILE PICTURE</h2>
                            <input
                                className='edit-user__input'
                                type='file'
                                onChange={updateUser}
                                required={true}
                                label='Profile Picture'
                                placeholder='Upload a picture to customize your profile'
                                name='profile_pic'
                                id='profile_pic'>
                            </input>
                        </div>
                        <div className='edit-user__input-subcontainer'>
                            <h2 className='edit-user__input-heading'>ABOUT YOU</h2>
                            <input
                                className='edit-user__input'
                                type='text'
                                onChange={updateUser}
                                value={editUser.profile_statement}
                                required={true}
                                label='Profile Statement'
                                placeholder='Let everyone know a bit about you'
                                name='profile_statement'
                                id='profile_statement'>
                            </input>
                        </div>
                    </div>
                    <div className='edit-user__input-container'>
                    <div className='edit-user__input-subcontainer'>
                            <h2 className='edit-user__input-heading'>EMAIL</h2>
                            <input
                                className='edit-user__input'
                                type='text'
                                onChange={updateUser}
                                value={editUser.email}
                                required={true}
                                label='Email'
                                placeholder='Enter a valid email here'
                                name='email'
                                id='email'>
                            </input>
                        </div>
                        <div className='edit-user__input-subcontainer'>
                            <h2 className='edit-user__input-heading'>FAVOURITE PRODUCE</h2>
                            <input
                                className='edit-user__input'
                                type='text'
                                onChange={updateUser}
                                value={editUser.favourite_produce}
                                required={true}
                                label='Favourite Produce'
                                placeholder='What is your favourite fruit or veggies?'
                                name='favourite_produce'
                                id='favourite_produce'>
                            </input>
                        </div>
                    </div>
                    <div className='edit-user__button-container'>
                        <Link to={`/${profileId}`} className='edit-user__button--2'>CANCEL</Link>
                        <button className='edit-user__button--1'>SAVE</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default EditProfile