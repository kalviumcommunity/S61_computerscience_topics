import '../components/entity.css';
import data from '../../data.json';
import React, { useState, useEffect } from 'react';

const Entity = () => {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        fetch("https://s61-computerscience-topics.onrender.com/api/data")
            .then((res) => res.json())
            .then((something) => setFetchedData(something.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    // Sorting data by ID
    const sortedData = [...fetchedData].sort((a, b) => a.ID - b.ID);

    return (
        <div>
            {sortedData && sortedData.map((data, index) => (
                <div className="entity" key={data.ID}>
                    <div className='items'>
                        <h1> {data.ID}</h1>
                        <h2>Topic: {data.Topic}</h2>
                        <p><strong>Description: </strong>{data.Description}</p>
                        <p><strong>Required Knowledge:</strong> {data.RequiredKnowledge}</p>
                        <p><strong>Popularity:</strong> {data.Popularity}</p>
                        <p><strong>Level of Hardness: </strong>{data.LevelOfHardness}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Entity;
