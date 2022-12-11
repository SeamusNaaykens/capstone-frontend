import './DeleteModalUser.scss'
import axios from "axios";
import { useState } from "react";
import closeIcon from '../../assets/icons/close-icon.png'
import { useNavigate } from 'react-router-dom'

function DeleteModalUser({setClickDelete, id, name, userInState}) {

    const navigate = useNavigate()
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleDelete = (event) => {
        axios
            .delete(`http://localhost:8080/users/${id}`)
            .then((response) => {
                setSuccess("Post Was Deleted Successfully!");
                axios.get("http://localhost:8080/users").then((response) => {
                    userInState(response.data);
                    alert('User deleted sucessfully')
                    navigate('/')

                });
            })
            .catch((error) => {
                setError("Something Went Wrong! Please Try Again.");
            });
    };

    return(
        <div
        className='delete'
        onClick={() => setClickDelete(false)}>
        <div className='delete__container'>
            <img
                className='delete__close-icon'
                onClick={() => setClickDelete(false)}
                src={closeIcon}
                alt='closing X' />
            <h1 className='delete__title'>Delete user {name}?</h1>
            <p className='delete__content'>Are you sure you would like to delete this user? You cannot undo this action. Please confirm post deletion.</p>
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
export default DeleteModalUser