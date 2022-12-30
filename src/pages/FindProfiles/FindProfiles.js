import './FindProfiles.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function FindProfiles() {

    // State variable to save all profiles in state
    const [allProfiles, setAllProfiles] = useState([]);
    // State variable used to save search input in state
    const [searchInput, setSearchInput] = useState([]);
    // State variable used to save all filtered posts in state
    const [filteredResults, setFilteredResults] = useState([]);

    // Axios request used to call all profiles and save them in state
    useEffect(() => {
        axios.get('http://localhost:8080/users')
            .then(response => {
                setAllProfiles(response.data)
            }).catch(err => {
                alert("Error 404 Bad Request", err)
            })
    }, [])

    // Logic used capture and access search input in state and filter posts in state. This logic is what I used for the search feature
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = allProfiles.filter((post) => {
                return Object.values(post).join('').toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(allProfiles)
        }
    }

    return (
        <div className='find-profiles'>
            <div className='find-profiles__container'>
                <h1 className='find-profiles__heading'>Looking for someone? Find them here!</h1>
                <div className='find-profiles__form-container'>
                    <form className='find-profiles__form'>
                        <div className='find-profiles__search-container'>
                            <input
                                className='find-profiles__search'
                                type='search'
                                placeholder='Search here'
                                onChange={(e) => searchItems(e.target.value)}
                                value={searchInput} >
                            </input>
                        </div>
                    </form>
                </div>
                {searchInput.length > 1 ? (filteredResults.map((allProfile) => {
                    return (
                        <Link to={`/${allProfile.id}`} className='find-profiles__content-container'>
                            <img className='find-profiles__picture' src={allProfile.image} alt={allProfile.name} />
                            <p className='find-profiles__name'>{allProfile.username}</p>
                            <p className='find-profiles__location'>{allProfile.location} </p>
                        </Link>)
                })) : (allProfiles.map((allProfile) => {
                    return (
                        <Link to={`/${allProfile.id}`} className='find-profiles__content-container'>
                            <img className='find-profiles__picture' src={allProfile.image} alt={allProfile.name} />
                            <p className='find-profiles__name'>{allProfile.username}</p>
                            <p className='find-profiles__location'>{allProfile.location} </p>
                        </Link>)
                }))}
            </div>
        </div>
    )
}
export default FindProfiles