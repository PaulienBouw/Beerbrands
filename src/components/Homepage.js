import React, { useState, useEffect } from 'react';



function Homepage(beers) {
    const [searchValue, setSearchValue] = useState("");
    const [countrySelect, setCountrySelect] = useState("");
    const [typeSelect, setTypeSelect] = useState("");

    const resetCountryClickHandler = () => {
        setCountrySelect("")
    };
    const resetTypeClickHandler = () => {
        setTypeSelect("")
    };
    const filterBeers = (beerList) => {
        if (!searchValue && !countrySelect && !typeSelect) {
            return beerList
        }
        return beerList.filter(
            beerItem =>
            //console.log(beerItem.country.displayName.includes(countrySelect))
            searchValue && beerItem.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            countrySelect && beerItem.country.displayName.includes(countrySelect) ||
            typeSelect && beerItem.locationType.includes(typeSelect)
        )
    }
    const createBeerItem = (item) => {
        return (
            <li key={item.id}>
                        <h1>{item.name}</h1>
                        <p>{item.country.displayName}</p>
                        {item.brewery.images? <img src={item.brewery.images.icon} alt="logo brewery"/>: <p className="missingImg"></p>}
                        <p>{item.locationType}</p>
                        <p>founded in {item.brewery.established}</p>
            </li>
        )
    }

    return (
        <article>
                <h1>BeerBrands by Paulien Bouw</h1>
                <form>
                    <label>Search 
                    <input
                        size="20"
                        id="searchBarBeer"
                        type="search"
                        value={searchValue}
                        placeholder="Search beer by name"
                        onChange={event => setSearchValue(event.target.value)}
                    />
                   </label>
                    <label>country:
                    <select id="country" name="countrylist" onChange={event => setCountrySelect(event.target.value)}>
                        <option value="">select country</option>
                      {beers.beers.filter((item, index, array) => array.findIndex(itm => itm.country.displayName === item.country.displayName) === index)
                        .map(item =>
                        (<option key={item.id} value={item.country.displayName}>{item.country.displayName}</option>)
                        )}
                      
                    </select>
                     <input
                        type="button"
                        id="resetSearch"
                        value="reset type"
                        onClick={resetCountryClickHandler}
                        /></label>
                    {console.log(countrySelect)}
                    
                    <label>type:
                    <select id="type" name="typelist" onChange={event => setTypeSelect(event.target.value)}>
                        <option value="">select type</option>
                      {beers.beers.filter((item, index, array) => array.findIndex(itm => itm.locationType === item.locationType) === index)
                        .map(item =>
                        (<option key={item.id} value={item.locationType}>{item.locationType}</option>)
                        )}
                      
                    </select>
                     <input
                        type="button"
                        id="resetSearch"
                        value="reset country"
                        onClick={resetTypeClickHandler}
                        /></label>
                    {console.log(typeSelect)}
                </form>
                <ul>
                {console.log(beers.beers)}
                {filterBeers(beers.beers)                           
                    .map(item=>(createBeerItem(item)                                          
                    ))}
                </ul>
        </article>










    )
}
export default Homepage;



//{beers.map(item=>
//                  (<div><h1>{item.name}</h1></div>))}