import './Marketplace.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Marketplace() {

    const [produces, setProduces] = useState([])
    const [isShown, setIsShown] = useState(false)
    const [searchInput, setSearchInput] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);




    useEffect(() => {
        axios.get(`http://localhost:8080/produce`)
            .then(response => {
                setProduces(response.data)
            }).catch(err => {
                console.log("Error 404 Bad Request", err)
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = produces.filter((post) => {
                return Object.values(post).join('').toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(produces)
        }
    }


    return (
        <div className='marketplace'>
            <div className='marketplace__form-container'>
                <form className='marketplace__form'>
                    <div className='marketplace__search-container'>
                        <input
                            className='marketplace__search'
                            type='search'
                            placeholder='Search here'
                            onChange={(e) => searchItems(e.target.value)}
                            // value={searchInput}
                            >
                        </input>
                    </div>
                </form>
            </div>
            <section className='section-container'>
                {filteredResults.map((produce) => (
                    <Link to={`/${produce.user_id}`} className='marketplace-card'>
                        <div className='marketplace-card__container'
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}
                        >
                            {isShown && <div className='marketplace-card__detail-overlay'>
                                <div className='marketplace-card__content-container--overlay'>
                                    <div className='marketplace-card__content-subcontainer--overlay'>
                                        <p className='marketplace-card__heading--overlay'>Category</p>
                                        <p className='marketplace-card__content--overlay'>{produce.produce_type}</p>
                                    </div>
                                    <div className='marketplace-card__content-subcontainer--overlay'>
                                        <p className='marketplace-card__heading--overlay'>Quantity</p>
                                        <p className='marketplace-card__content--overlay'>{produce.quantity}</p>
                                    </div>
                                </div>
                                <div className='marketplace-card__content-container--overlay'>
                                    <div className='marketplace-card__content-subcontainer--overlay'>
                                        <p className='marketplace-card__heading--overlay'>Harvested On</p>
                                        <p className='marketplace-card__content--overlay'>{new Date(produce.harvest_date).toLocaleDateString()}</p>
                                    </div>
                                    <div className='marketplace-card__content-subcontainer--overlay'>
                                        <p className='marketplace-card__heading--overlay'>Posted On</p>
                                        <p className='marketplace-card__content--overlay'>{new Date(produce.post_date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>}
                            <img className='marketplace-card__image' src={produce.image} alt={produce.produce_name} />
                        </div>
                        <h3 className='marketplace-card__item-name'>{produce.produce_name}</h3>
                    </Link >
                ))}
            </section>
        </div>
    )
}
export default Marketplace