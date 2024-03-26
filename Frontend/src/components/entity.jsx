import '../components/entity.css';
import data from '../../data.json';
import React, { useState, useEffect } from 'react';
import EntityForm from './entityForm';
import axios from 'axios';
import UpdateEntityForm from './updateEntity';
const Entity = () => {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        fetch("https://s61-computerscience-topics.onrender.com/api/data")
            .then((res) => res.json())
            .then((something) => setFetchedData(something.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleAddEntity = (newData) => {
        setFetchedData((prevData) => (prevData ? [...prevData, newData] : [newData]));
      };


      const handleDelete = (id) => {
        axios.delete(`https://s61-computerscience-topics.onrender.com/api/remove/${id}`)
        .then(() => {setFetchedData(fetchedData.filter((data) => data._id!== id))})
      }

      const handleUpdateEntity = (id, newData) => {
        axios.put(`https://s61-computerscience-topics.onrender.com/api/update/${id}`, newData)
        .then(() => {setFetchedData(fetchedData.map((data) => data._id === id? newData : data))})
      }
    

    // Sorting data by ID
    const sortedData = [...fetchedData].sort((a, b) => a.ID - b.ID);

    return (
        <div>
            <div className='items'style={{display:'flex', justifyContent:'space-between',gap:'15px'}}>
                <EntityForm  AddEntity={handleAddEntity} />
                <UpdateEntityForm AddEntity={handleUpdateEntity} />

            </div>   
            
            {sortedData && sortedData.map((data, index) => (
                <div className="entity" key={data.ID}>
                    <div className='items'>
                        <p> {data._id}</p>
                        <h1> {data.ID}</h1>
                        <h2>Topic: {data.Title}</h2>
                        <p><strong>Description: </strong>{data.Description}</p>
                        <p><strong>Required Knowledge:</strong> {data.RequiredKnowledge}</p>
                        <p><strong>Popularity:</strong> {data.Popularity}</p>
                        <p><strong>Level of Hardness: </strong>{data.LevelOfHardness}</p>
                        <div>
                            <button onClick={() => handleDelete(data._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Entity;
