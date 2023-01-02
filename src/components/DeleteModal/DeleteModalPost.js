import './DeleteModalPost.scss'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import closeIcon from '../../assets/icons/close-icon.png'

function DeleteModalPost({ userPosts, toClose, postId, postName }) {

    const API_URL = 'https://growlocal.herokuapp.com'

    // Variable used to save useNavigate function
    const navigate = useNavigate()

    // State variables used to toggle succes of delete request
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    // Logic and axios request used to delete a post and update the array of posts in state
    const handleDelete = (event) => {
        axios
            .delete(`${API_URL}/produce/${postId}`)
            .then((res) => {
                setSuccess("Post Was Deleted Successfully!");
                axios.get(`${API_URL}/produce`).then((res) => {
                    userPosts(res.data);
                    navigate(`/`)
                });
            })
            .catch((error) => {
                setError("Something Went Wrong! Please Try Again.");
            });
    };

    return (
        <div className='delete'>
            <img
                className='delete__close-icon'
                onClick={toClose}
                src={closeIcon}
                alt='closing X' />
            <h1 className='delete__title'>Delete {postName}?</h1>
            <p className='delete__content'>Are you sure you would like to delete this post? You cannot undo this action. Please confirm post deletion.</p>
            <div className='delete__button-container'>
                <p className="delete__message delete__message--success">{success}</p>
                <p className="delete__message">{error}</p>
                <button
                    className='delete__button--cancel'
                    onClick={toClose}>CANCEL</button>
                <button
                    className='delete__button--confirm'
                    onClick={handleDelete}>CONFIRM</button>
            </div>
        </div>
    )
}
export default DeleteModalPost