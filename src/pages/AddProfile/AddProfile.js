import './AddProfile.scss'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



const fields = [
    'username',
    'email',
    'location',
    'profile_statement',
    'favourite_produce',
    // 'image',
];

function AddProfile() {

    const navigate = useNavigate()

    const [users, setUsers] = useState({
        username: '',
        email: '',
        location: '',
        profile_statement: '',
        favourite_produce: '',
    })

    const addUser = (e) => {
        const { name, value } = e.target;
        setUsers((current) => {
            return {
                ...current,
                [name]: value,
            };
        });
    };

    const date = new Date();
    const postedDate =
        date.getFullYear() +
        "-" +
        date.getMonth() +
        "-" +
        date.getDate() +
        " " +
        date.getHours().toString() +
        ":" +
        date.getMinutes().toString() +
        ":" +
        date.getSeconds().toString();

    const handleAdd = (e) => {
        e.preventDefault();

        const obj = {
            account_creation: postedDate
        };
        fields.forEach((field) => {
            obj[field] = e.target[field].value;
        });

        axios.post("http://localhost:8080/users", obj).then(() => {
            axios.get("http://localhost:8080/users").then((response) => {
                navigate('/')
                alert('Profile created sucessfully')
            });
        });
        e.target.reset();
    };

    return (
        <section className='add-user'>
            <div className='add-user__form-container'>
                <h1 className='add-user__heading'>Create your Profile</h1>
                <form className='add-user__form' onSubmit={handleAdd}>
                    <div className='add-user__input-container'>
                        <div className='add-user__input-subcontainer'>
                            <h2 className='add-user__input-heading'>NAME</h2>
                            <input
                                className='add-user__input'
                                type='text'
                                onChange={addUser}
                                value={users.username}
                                required={true}
                                label='username'
                                placeholder='Change your name here!'
                                name='username'
                                id='username'>
                            </input>
                        </div>
                        <div className='add-user__input-subcontainer'>
                            <h2 className='add-user__input-heading'>EMAIL</h2>
                            <input
                                className='add-user__input'
                                type='text'
                                onChange={addUser}
                                value={users.email}
                                required={true}
                                label='Email'
                                placeholder='Register a valid email here'
                                name='email'
                                id='email'>
                            </input>
                        </div>
                    </div>
                    <div className='add-user__input-container'>
                        <div className='add-user__input-subcontainer'>
                            <h2 className='add-user__input-heading'>LOCATION</h2>
                            <input
                                className='add-user__input'
                                type='text'
                                onChange={addUser}
                                value={users.location}
                                required={true}
                                label='Location'
                                placeholder='Which city and quadrant you are located in'
                                name='location'
                                id='location'>
                            </input>
                        </div>
                        <div className='add-user__input-subcontainer'>
                            <h2 className='add-user__input-heading'>ABOUT YOU</h2>
                            <input
                                className='add-user__input'
                                type='text'
                                onChange={addUser}
                                value={users.profile_statement}
                                required={true}
                                label='Profile Statement'
                                placeholder='Let everyone know a bit about you'
                                name='profile_statement'
                                id='profile_statement'>
                            </input>
                        </div>
                    </div>
                    <div className='add-user__input-container'>
                        <div className='add-user__input-subcontainer'>
                            <h2 className='add-user__input-heading'>FAVOURITE PRODUCE</h2>
                            <input
                                className='add-user__input'
                                type='text'
                                onChange={addUser}
                                value={users.favourite_produce}
                                required={true}
                                label='Favourite Produce'
                                placeholder='What is your favourite fruit or veggies?'
                                name='favourite_produce'
                                id='favourite_produce'>
                            </input>
                        </div>
                        {/* <div className='add-user__input-subcontainer'>
                            <h2 className='add-user__input-heading'>PROFILE PICTURE</h2>
                            <input
                                className='add-user__input'
                                type='file'
                                onChange={addUser}
                                value={users.image}
                                required={true}
                                label='Profile Picture'
                                placeholder='Upload a picture to customize your profile'
                                name='profile_pic'
                                id='profile_pic'>
                            </input>
                        </div> */}
                    </div>
                    <div className='add-user__button-container'>
                        <Link to='/' className='add-user__button--2'>CANCEL</Link>
                        <button className='add-user__button--1'>CREATE</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default AddProfile