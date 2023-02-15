import './LearningChannel.scss'
import ForumModal from '../../components/ForumModal/ForumModal'
import { useState } from 'react'


function LearningChannel() {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }



    return (
        <main className='learning-channel'>
            <div className='learning-channel__container'>
                <h1 className='learning-channel__heading'>The Learning Channel</h1>
                <p className='learning-channel__info'>Welcome to the Learning Channel! Here you can learn all about growing food at home.</p>
            </div>

            <div className='learning-channel__content-container'>
                <div className='learning-channel__forum'>
                    <div className='learning-channel__container'>
                        <h2 className='learning-channel__subheading'>The GrowLocal Forum Board</h2>
                        <p className='learning-channel__content--1'>Help the GrowLocal Community by sharing your best tips and tricks for growing produce at home! Check out some of the topics below or add a new topic!</p>
                        <div className='learning-channel__button-container'>
                            <button className='learning-channel__button'>
                                <i>C</i><i>R</i><i>E</i><i>A</i><i>T</i><i>E</i>
                            </button>
                        </div>
                        <div className='learning-channel__forum-container'>
                            <button className='learning-channel__forum-topic'
                                onClick={() => {openModal()}}>
                                <h4 className='learning-channel__topic-title' >placeholder topic title</h4>
                            </button>
                            { isOpen && <ForumModal IsOpen={isOpen}
                            closeModal={closeModal} />}
                            <div className='learning-channel__forum-topic'>
                                <h4 className='learning-channel__topic-title' >placeholder topic title</h4>
                            </div>
                            <div className='learning-channel__forum-topic'>
                                <h4 className='learning-channel__topic-title' >placeholder topic title</h4>
                            </div>
                            <div className='learning-channel__forum-topic'>
                                <h4 className='learning-channel__topic-title' >placeholder topic title</h4>
                            </div>
                            <div className='learning-channel__forum-topic'>
                                <h4 className='learning-channel__topic-title' >placeholder topic title</h4>
                            </div>
                            <div className='learning-channel__forum-topic'>
                                <h4 className='learning-channel__topic-title' >placeholder topic title</h4>
                            </div>
                            <div className='learning-channel__forum-topic'>
                                <h4 className='learning-channel__topic-title' >placeholder topic title</h4>
                            </div>
                            <div className='learning-channel__forum-topic'>
                                <h4 className='learning-channel__topic-title' >placeholder topic title</h4>
                            </div>
                            <div className='learning-channel__forum-topic'>
                                <h4 className='learning-channel__topic-title' >placeholder topic title</h4>
                            </div>
                            <div className='learning-channel__forum-topic'>
                                <h4 className='learning-channel__topic-title' >placeholder topic title</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='learning-channel__tutorials'>
                    <div className='learning-channel__container'>
                        <h2 className='learning-channel__subheading'>Video Tutorials</h2>
                        <p className='learning-channel__content--2'>Looking for ways to grow food at home? Checkout some of these videos to get you started!</p>
                    </div>
                    <div>
                        <iframe
                            className='learning-channel__video'
                            src="https://www.youtube.com/embed/ATI7vfCgwXE"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                        </iframe>
                        <iframe
                            className='learning-channel__video'
                            src="https://www.youtube.com/embed/NlS_dTDsHHQ"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                        </iframe>
                        <iframe

                            className='learning-channel__video'
                            src="https://www.youtube.com/embed/_K25WjjCBuw"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default LearningChannel