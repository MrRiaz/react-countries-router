import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from '../Country/Country';

const Home = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => {
        setCountries(data)
        })
    }, []);

    return (
        <div>
            <h2>Countr List: {countries.length}</h2>
            {
                countries.map(country => <Country key={country.alpha3Code} country = {country}></Country>)
            }
        </div>
    );
};

export default Home;