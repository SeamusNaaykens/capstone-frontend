import './DeleteModalPost.scss'
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import closeIcon from '../../assets/icons/close-icon.png'

function DeleteModalPost({ userPosts, setClickDelete, postId }) {

    
    const navigate = useNavigate()

    // const { postId } = useParams()

    const [singlePost, setSinglePost] = useState([])
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8080/produce/${postId}`)
            .then(res => {
                setSinglePost(res.data)
            })
    }, [postId])

    const handleDelete = (event) => {
        axios
            .delete(`http://localhost:8080/produce/${postId}`)
            .then((response) => {
                setSuccess("Post Was Deleted Successfully!");
                axios.get("http://localhost:8080/produce").then((response) => {
                    userPosts(response.data);
                    alert('Post deleted sucessfully')
                    navigate(`/${userPosts.id}`)
                });
            })
            .catch((error) => {
                setError("Something Went Wrong! Please Try Again.");
            });
    };


    return (
        <div
            className='delete'
            onClick={() => setClickDelete(false)}>
            <div className='delete__container'>
                <img
                    className='delete__close-icon'
                    onClick={() => setClickDelete(false)}
                    src={closeIcon}
                    alt='closing X' />
                <h1 className='delete__title'>Delete {singlePost.produce_name}?</h1>
                <p className='delete__content'>Are you sure you would like to delete this post? You cannot undo this action. Please confirm post deletion.</p>
                <div className='delete__button-container'>
                    <p className="delete__message delete__message--success">{success}</p>
                    <p className="delete__message">{error}</p>
                    <button
                        className='delete__button--cancel'
                        onClick={() => setClickDelete(false)}>CANCEL</button>
                    <button
                        className='delete__button--confirm'
                        onClick={handleDelete}>CONFIRM</button>
                </div>
            </div>
        </div>
    )
}
export default DeleteModalPost