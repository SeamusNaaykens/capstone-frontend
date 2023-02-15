import './ForumForm.scss'

function ForumForm() {
    return (
        <div>
            <form className="form">
               <div className="form__container">
                <input type='text' className="form__input" placeholder='Comment Here!'></input>
                <button className="form__button">POST</button>
               </div>
            </form>
        </div>
    )
}
export default ForumForm