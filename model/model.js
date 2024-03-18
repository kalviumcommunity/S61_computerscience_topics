const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    ID: Number,
    Title: String,
    Description: String,
    RequiredKnowledge: Array,
    Popularity: String,
    LevelOfHardness: String,
});

const scienceData = mongoose.model('appData', dataSchema);

module.exports = scienceData;
