import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const { name, capital, population} = props.country;
    const style = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    const history = useHistory();
    const handleAddCountry = () => {
        history.push(`/name/${name}`);
    }

    return (
        <div style={style}>
            <h3>{name} </h3>
            <p> Capital: {capital} </p>
            <p>Population: {population} </p>
            <button onClick={() => handleAddCountry(name)}> Click here </button> 
            <Link to={`/name/${name}`}>Click here</Link>
        </div>
    );
};

export default Country;