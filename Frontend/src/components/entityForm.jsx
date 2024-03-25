import React, { useState } from 'react';
import axios from 'axios';

const EntityForm = () => {
  const [formData, setFormData] = useState({
    ID: '',
    Title: '',
    Description: '',
    RequiredKnowledge: '',
    Popularity: '',
    LevelOfHardness: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://s61-computerscience-topics.onrender.com/api/add',
      formData);

      setFormData({
        ID: '',
        Title: '',
        Description: '',
        RequiredKnowledge: '',
        Popularity: '',
        LevelOfHardness: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column' , width: '400px'}}>
      <input type="number" name="ID" value={formData.ID} placeholder="ID" onChange={handleChange} />
      <input type="text" name="Title" value={formData.Title} placeholder="Title" onChange={handleChange} />
      <input type="text" name="Description" value={formData.Description} placeholder="Description" onChange={handleChange} />
      <input type="text" name="RequiredKnowledge" value={formData.RequiredKnowledge} placeholder="Required Knowledge" onChange={handleChange} />
      <input type="number" name="Popularity" value={formData.Popularity} placeholder="Popularity" onChange={handleChange} />
      <input type="number" name="LevelOfHardness" value={formData.LevelOfHardness} placeholder="Level Of Hardness" onChange={handleChange} />
      <button type="submit">Add Entity</button>
    </form>
</div>
  );
};

export default EntityForm;
