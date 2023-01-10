import './EditPost.scss'
import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


function EditPost() {

    const API_URL = 'https://growlocal.herokuapp.com'

    // Variable used to save useNavigate function
    const navigate = useNavigate()

    // useParam to capture profile id
    const { postId } = useParams();

    // State variable used to set form input into state
    const [editPost, setEditPost] = useState({
        produce_name: '',
        produce_type: '',
        quantity: '',
        location: '',
        harvest_date: '',
    })

    // Axios request used to get access a single post and set it in state
    useEffect(() => {
        axios.get(`${API_URL}/${postId}`)
            .then(res => {
                setEditPost(res.data)
            })
    }, [postId])

    // Logic used to update a post spread operator is used to copy and input new data
    const updatePost = (e) => {
        const { name, value } = e.target;
        setEditPost((current) => {
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

        const formData = new FormData(form);

        axios.patch(`${API_URL}/produce/${postId}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                  },
            })
            .then(res => {
                navigate(`/`)
                alert('Post updated sucessfully')
            })
            .catch((err) => {
                console.log(err)
            })
        e.target.reset()
    }

    return (
        <section className='edit-post'>
            <div className='edit-post__form-container'>
                <h1 className='edit-post__heading'>Edit Post</h1>
                <form className='edit-post__form' onSubmit={handleSubmitEvent}>
                    <div className='edit-post__input-container'>
                        <div className='edit-post__input-subcontainer'>
                            <h2 className='edit-post__input-heading'>PRODUCE NAME</h2>
                            <input
                                className='edit-post__input'
                                type='text'
                                onChange={updatePost}
                                value={editPost.produce_name}
                                required={true}
                                label='Produce Name'
                                placeholder='What is your produce'
                                name='produce_name'
                                id='produce_name'>
                            </input>
                        </div>
                        <div className='edit-post__input-subcontainer'>
                            <h2 className='edit-post__input-heading'>PRODUCE CATEGORY</h2>
                            <input
                                className='edit-post__input'
                                type='text'
                                onChange={updatePost}
                                value={editPost.produce_type}
                                required={true}
                                label='Produce Category'
                                placeholder='What type of produce are you posting'
                                name='produce_type'
                                id='produce_type'>
                            </input>
                        </div>
                    </div>
                    <div className='edit-post__input-container'>
                        <div className='edit-post__input-subcontainer'>
                            <h2 className='edit-post__input-heading'>LOCATION</h2>
                            <input
                                className='edit-post__input'
                                type='text'
                                onChange={updatePost}
                                value={editPost.location}
                                required={true}
                                label='Location'
                                placeholder='Which city and quadrant you are located in'
                                name='location'
                                id='location'>
                            </input>
                        </div>
                        <div className='edit-post__input-subcontainer'>
                            <h2 className='edit-post__input-heading'>QUANTITY</h2>
                            <input
                                className='edit-post__input'
                                type='text'
                                onChange={updatePost}
                                value={editPost.quantity}
                                required={true}
                                label='Quantity'
                                placeholder='How much are you willing to trade?'
                                name='quantity'
                                id='quantity'>
                            </input>
                        </div>
                    </div>
                    <div className='edit-post__input-container'>
                        <div className='edit-post__input-subcontainer'>
                            <h2 className='edit-post__input-heading'>HARVESTED ON</h2>
                            <input
                                className='edit-post__input'
                                type='text'
                                onChange={updatePost}
                                required={true}
                                label='Harvest Date'
                                placeholder='When was this harvested? Enter date in year-month-day format'
                                name='harvest_date'
                                id='harvest_date'>
                            </input>
                        </div>
                        <div className='edit-post__input-subcontainer'>
                            <h2 className='edit-post__input-heading'>UPLOAD IMAGE</h2>
                            <input
                                className='edit-post__input'
                                type='file'
                                onChange={updatePost}
                                required={true}
                                label='Image'
                                placeholder='Upload a picture of your produce here!'
                                name='image'
                                id='image'>
                            </input>
                        </div>
                    </div>
                    <div className='edit-post__button-container'>
                        <Link to={`/${editPost.user_id}`} className='edit-post__button--2'>CANCEL</Link>
                        <button className='edit-post__button--1'>SAVE</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default EditPost