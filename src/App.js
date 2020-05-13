import React, { useState, useEffect } from 'react';
import './App.css';
import Homepage from "./components/Homepage"



function App() {
    const [beers, setBeers] = useState(null);
    useEffect(() => {
        fetch(
                "http://api.brewerydb.com/v2/locations/?key=659d5c6b8f3d2447f090119e48202fdb"
            )
            .then(response => response.json())

            .then(data => setBeers(data.data))
            .catch(error => setBeers(error));
    }, []);
    if (beers === null) {
        return <div> bezig met gegevens ophalen</div>;
    }
    if (beers instanceof Error) {
        return <div>Er is iets misgegaan met ophalen van gegevens</div>;
    }

    return (
        <div>
            <Homepage beers={beers} />
        </div>
    );
}
export default App