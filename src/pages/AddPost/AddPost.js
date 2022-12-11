import './AddPost.scss'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { v4 as uuidv4 } from "uuid";

const fields = [
    'produce_name',
    // 'image',
    'produce_type',
    'quantity',
    'location',
    'harvest_date'
];

function AddPost() {

    const {profileId } = useParams()

    const [newPost, setNewPost] = useState({
        produce_name: '',
        image: '',
        produce_type: '',
        quantity: '',
        location: '',
        harvest_date: '',
    })


    const updatePost = (e) => {
        const { name, value } = e.target;
        setNewPost((current) => {
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
            id: uuidv4(),
            user_id: profileId,
            post_date: postedDate
        };
        fields.forEach((field) => {
            obj[field] = e.target[field].value;
        });

        
        axios.post("http://localhost:8080/produce", obj).then(() => {
            axios.get("http://localhost:8080/produce").then((response) => {
                alert('Post was sucessfully created!')
            });
        }).catch(err => {
            console.log("Error 404 Bad Request", err)
        })
        e.target.reset();
    }



    return (
        <section className='add-post'>
            <div className='add-post__form-container'>
                <h1 className='add-post__heading'>Make a Post</h1>
                <form className='add-post__form' onSubmit={handleAdd}>
                    <div className='add-post__input-container'>
                        <div className='add-post__input-subcontainer'>
                            <h2 className='add-post__input-heading'>PRODUCE NAME</h2>
                            <input
                                className='add-post__input'
                                type='text'
                                onChange={updatePost}
                                value={newPost.produce_name}
                                required={true}
                                label='Produce Name'
                                placeholder='What is your produce called'
                                name='produce_name'
                                id='produce_name'>
                            </input>
                        </div>
                        <div className='add-post__input-subcontainer'>
                            <h2 className='add-post__input-heading'>PRODUCE CATEGORY</h2>
                            <input
                                className='add-post__input'
                                type='text'
                                onChange={updatePost}
                                value={newPost.produce_type}
                                required={true}
                                label='Produce Category'
                                placeholder='What type of produce are you posting'
                                name='produce_type'
                                id='produce_type'>
                            </input>
                        </div>
                    </div>
                    <div className='add-post__input-container'>
                        <div className='add-post__input-subcontainer'>
                            <h2 className='add-post__input-heading'>LOCATION</h2>
                            <input
                                className='add-post__input'
                                type='text'
                                onChange={updatePost}
                                value={newPost.location}
                                required={true}
                                label='Location'
                                placeholder='Which city and quadrant you are located in'
                                name='location'
                                id='location'>
                            </input>
                        </div>
                        <div className='add-post__input-subcontainer'>
                            <h2 className='add-post__input-heading'>QUANTITY</h2>
                            <input
                                className='add-post__input'
                                type='text'
                                onChange={updatePost}
                                value={newPost.quantity}
                                required={true}
                                label='Quantity'
                                placeholder='How much are you willing to trade?'
                                name='quantity'
                                id='quantity'>
                            </input>
                        </div>
                    </div>
                    <div className='add-post__input-container'>
                        <div className='add-post__input-subcontainer'>
                            <h2 className='add-post__input-heading'>HARVESTED ON</h2>
                            <input
                                className='add-post__input'
                                type='text'
                                onChange={updatePost}
                                value={newPost.harvest_date}
                                required={true}
                                label='Harvest Date'
                                placeholder='When did you harvest this produce?'
                                name='harvest_date'
                                id='harvest_date'>
                            </input>
                        </div>
                        {/* <div className='add-post__input-subcontainer'>
                            <h2 className='add-post__input-heading'>UPLOAD IMAGE</h2>
                            <input
                                className='add-post__input'
                                type='file'
                                onChange={updatePost}
                                value={newPost.image}
                                required={true}
                                label='Image'
                                placeholder='Upload a picture URL of your produce here!'
                                name='image'
                                id='image'>
                            </input>
                        </div> */}
                    </div>
                    <div className='add-post__button-container'>
                        <button className='add-post__button--1'>CREATE</button>
                        <Link className='add-post__button--2'>CANCEL</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default AddPost