import './EditProfile.scss'
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const fields = [
    'produce_name',
    'image',
    'produce_type',
    'quantity',
    'location',
    'harvest_date'
];

function EditProfile() {

    const navigate = useNavigate()
    const { profileId } = useParams();

    const [editUser, setEditUser] = useState({
        username: '',
        // image: '',
        location: '',
        profile_statement: '',
        favourite_produce: '',
    })

    useEffect(() => {

        axios.get(`http://localhost:8080/users/${profileId}`)
            .then(res => {
                setEditUser(res.data)
            })
    }, [profileId])

    const updateUser = (e) => {
        const { name, value } = e.target;
        setEditUser((current) => {
            return {
                ...current,
                [name]: value,
            }
        })
    }

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        const obj = {}
        fields.forEach((field) => {
            obj[field] = e.target[field].value
        })
        e.target.reset()
        axios
            .patch(`http://localhost:8080/users/${profileId}`)
            .then(res => {
                obj = res.data
                navigate(`/${editUser.id}`)
                alert('User updated sucessfully')
            })
            .catch((err) => window.alert(err))
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
                                type='text'
                                onChange={updateUser}
                                value={editUser.image}
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
                        <button className='edit-user__button--1'>SAVE</button>
                        <Link className='edit-user__button--2'>CANCEL</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default EditProfile