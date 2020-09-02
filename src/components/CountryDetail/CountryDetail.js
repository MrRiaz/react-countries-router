import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {

    const {countryName} = useParams();
    const [countryDetail, setCountryDetail] = useState([]);

    const {name, capital, region, population, subregion, area, timezones, borders, flag} = countryDetail;

    useEffect(()=> {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data[0]);
            setCountryDetail(data[0])
        })
    }, []);

    const style = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        width: '350px',
        textAlign: 'center'
    }

    return (
        <div style={style}>
            <img style={{width: '220px'}} src={flag} alt=""/>
            <h3>{name} </h3>
            <p>Capital: {capital} </p>
            <p>Region: {region} </p>
            <p>subregion: {subregion} </p>
            <p>Population: {population}</p>
            <p>Area: {area} </p>
            <p>Timezones: {timezones}</p>
            <p>Borders: {borders} </p>
        </div>
    );
};

export default CountryDetail;