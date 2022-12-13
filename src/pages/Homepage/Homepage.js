import './Homepage.scss'
import Marketplace from '../../components/Marketplace/Marketplace.js'



function Homepage() {
    return (
        <main className='homepage'>
            <div className='homepage__banner'>
                <div className='homepage__banner-overlay'></div>
                <div className='homepage__banner-content-container'>
                    <p className='homepage__banner-content'>Nourish the Planet, Nourish Community</p>
                    <h1 className='homepage__banner-heading'>GrowLocal</h1>
                </div>
            </div>
                <Marketplace />
        </main>
    )
}
export default Homepage