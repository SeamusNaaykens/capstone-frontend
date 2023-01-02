import './Marketplace.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import MarketplaceCard from '../MarketplaceCard/MarketplaceCard.js'

function Marketplace() {

    const API_URL = 'https://growlocal.herokuapp.com'

    // State variable used to save all posts in state
    const [produces, setProduces] = useState([])
    // State variable used to save search input in state
    const [searchInput, setSearchInput] = useState([]);
    // State variable used to save all filtered posts in state
    const [filteredResults, setFilteredResults] = useState([]);

    //Axios request used to call all posts and save them in state 
    useEffect(() => {
        axios.get(`${API_URL}/produce`)
            .then(response => {
                setProduces(response.data)
            }).catch(err => {
                console.log("Error 404 Bad Request", err)
            })
    }, [])

    // Logic used capture and access search input in state and filter posts in state. This logic is what I used for the search feature
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
                            value={searchInput} >
                        </input>
                    </div>
                </form>
            </div>
            <section className='section-container'>
                {searchInput.length > 1 ? (filteredResults.map((produce) => {
                    return (
                        <MarketplaceCard
                            userId={produce.user_id}
                            type={produce.produce_type}
                            quantity={produce.quantity}
                            harvest={produce.harvest_date}
                            posted={produce.post_date}
                            image={produce.image}
                            name={produce.produce_name} />)
                            
                })) : (produces.map((produce) => {
                    return (<MarketplaceCard
                        userId={produce.user_id}
                        type={produce.produce_type}
                        quantity={produce.quantity}
                        harvest={produce.harvest_date}
                        posted={produce.post_date}
                        image={produce.image}
                        name={produce.produce_name} />)
                }))}
            </section>
        </div>
    )
}
export default Marketplace