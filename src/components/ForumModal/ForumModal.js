import './ForumModal.scss'
import avatar from '../../assets/images/mac-pic.jpg'
import ForumForm from '../../components/ForumForm/ForumForm'

function ForumModal({ closeModal }) {
  return (
    <div className="modal-container">
      <div className="modal">

        <div classnName="modal__details">
          <h1 className="modal__title">What Vegetables Grow Best in Calgary, AB?</h1>
          <p className="modal__description">Sentence that will tell user what this modal is for or something.</p>
        </div>
        <div className='modal__comment-board'>
          <div className='modal__comment'>
            <div className='modal__comment-container'>
              <img src={avatar} className='modal__comment-avatar' />
              <p className='modal__comment-creator'>Maclayne Simone</p>
              <p className='modal__comment-date'>02/14/23</p>
            </div>
            <p className='modal__comment-content'>I have had the best luck with Tomatoes and most herbs!</p>
          </div>
          <div className='modal__comment'>
            <div className='modal__comment-container'>
              <img src={avatar} className='modal__comment-avatar' />
              <p className='modal__comment-creator'>Maclayne Simone</p>
              <p className='modal__comment-date'>02/14/23</p>
            </div>
            <p className='modal__comment-content'>I have had the best luck with Tomatoes and most herbs!</p>
          </div>
        </div>
        <ForumForm/>
        <div className="link-2" onClick={closeModal}></div>

      </div>
    </div>

  )

}
export default ForumModal