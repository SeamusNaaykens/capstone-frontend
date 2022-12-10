import './EditPost.scss'
import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const fields = [
    'produce_name',
    'image',
    'produce_type',
    'quantity',
    'location',
    'harvest_date'
];

function EditPost() {


    const navigate = useNavigate()
    const { postId } = useParams();

    const [editPost, setEditPost] = useState({
        produce_name: '',
        image: '',
        produce_type: '',
        quantity: '',
        location: '',
        harvest_date: '',
    })

    useEffect(() => {

        axios.get(`http://localhost:8080/produce/${postId}`)
            .then(res => {
                setEditPost(res.data)
            })
    }, [postId])

    const updatePost = (e) => {
        const { name, value } = e.target;
        setEditPost((current) => {
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
            .patch(`http://localhost:8080/produce/${postId}`)
            .then(res => {
                obj = res.data
                navigate(`/${editPost.user_id}`)
                alert('Post updated sucessfully')
            })
            .catch((err) => window.alert(err))
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
                                value={editPost.harvest_date}
                                required={true}
                                label='Harvest Date'
                                placeholder='When did you harvest this produce?'
                                name='harvest_date'
                                id='harvest_date'>
                            </input>
                        </div>
                        <div className='edit-post__input-subcontainer'>
                            <h2 className='edit-post__input-heading'>UPLOAD IMAGE</h2>
                            <input
                                className='edit-post__input'
                                type='text'
                                onChange={updatePost}
                                value={editPost.image}
                                required={true}
                                label='Image'
                                placeholder='Upload a picture of your produce here!'
                                name='image'
                                id='image'>
                            </input>
                        </div>
                    </div>
                    <div className='edit-post__button-container'>
                        <button className='edit-post__button--1'>SAVE</button>
                        <Link className='edit-post__button--2'>CANCEL</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default EditPost