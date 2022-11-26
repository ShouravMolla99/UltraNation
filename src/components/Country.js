import React from 'react';

const Country = (props) => {
    const { name, population, region, flag } = props.country;
    const flagStyle = {
        height: '100px'

    }
    const addHandler = props.addHandler;
    return (
        <div style={{ border: '2px solid lightblue', margin: '10px', padding: '5px' }}>
            <h4>This is {name}</h4>
            <img style={flagStyle} src={flag} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => addHandler(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;