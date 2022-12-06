import './Marketplace.scss'
import { Link } from 'react-router-dom'

function Marketplace() {
    return(
        <div className='marketplace'>
            <Link className='marketplace__item'>
            <img className='marketplace__item-image'/>
            <h3 className='marketplace__item-name'></h3>
            </Link>
        </div>
    )
}
export default Marketplace