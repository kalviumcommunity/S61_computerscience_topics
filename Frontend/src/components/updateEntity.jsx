import React, { useState } from 'react';
import axios from 'axios';

const updateEntityForm = ({AddEntity}) => {
  const [formData, setFormData] = useState({
    ID: 0,
    Title: '',
    Description: '',
    RequiredKnowledge: '',
    Popularity: 0,
    LevelOfHardness: 0,
    Mongo_ID: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name == "Needed basics"){
        setFormData((prevData) => ({
         ...prevData,
          [name]: value.split(","),
        }));
    }else{
        setFormData((prevData) => ({
         ...prevData,
          [name]: value,
        }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://s61-computerscience-topics.onrender.com/api/update/${formData["Mongo_ID"]}`,
        formData
      );
      const updatedEntity = response.data.data;
      AddEntity(updatedEntity);
      setFormData({
        "ID": 0,
        "Title": '',
        "Description": '',
        "RequiredKnowledge": '',
        "Popularity": 0,
        "LevelOfHardness": 0,
        "Mongo_ID": ''
      });
      window.location.reload();
    } catch (error) {
      console.error("Error adding entity:", error.message);
    }
  };  

  return (
    <div>
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column' , width: '400px'}}>
    <input type="text" name='Mongo_ID' value={formData.Mongo_ID} placeholder='Mongo ID' onChange={handleChange} />
      <input type="number" name="ID" value={formData.ID} placeholder="ID" onChange={handleChange} />
      <input type="text" name="Title" value={formData.Title} placeholder="Title" onChange={handleChange} />
      <input type="text" name="Description" value={formData.Description} placeholder="Description" onChange={handleChange} />
      <input type="text" name="RequiredKnowledge" value={formData.RequiredKnowledge} placeholder="Required Knowledge" onChange={handleChange} />
      <input type="number" name="Popularity" value={formData.Popularity} placeholder="Popularity" onChange={handleChange} />
      <input type="number" name="LevelOfHardness" value={formData.LevelOfHardness} placeholder="Level Of Hardness" onChange={handleChange} />
      <button  onClick={handleSubmit} type="submit">Update Entity</button>
    </form>
</div>
  );
};

export default updateEntityForm;
