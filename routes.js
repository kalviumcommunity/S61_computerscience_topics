const express = require('express');
const router = express.Router();
const scienceData = require('./model/model');

router.post("/add", async (req, res) => {
    const dataArray = req.body;
    try {
        const insertedData = await scienceData.create(dataArray); // Changed insertMany to create
        res.status(201).json({ message: "Science data posted successfully", data: insertedData });
    } catch (error) {
        console.error("Error posting data:", error);
        res.status(500).json({ error: "Unable to post data" });
    }
});

router.get("/data", async (req, res) => {
    try {
      const data = await scienceData.find();
      res.json({ message: "Data fetched successfully", data });
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Unable to fetch data" });
    }
  });

router.delete("/remove/:id", async (req, res) => {
    const dataId = req.params.id;
    try {
        const deletedData = await scienceData.findByIdAndDelete(dataId);
        if (!deletedData) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.json({ message: "Data deleted successfully", data: deletedData });
    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).json({ error: "Unable to delete data" });
    }
});

router.put("/update/:id", async (req, res) => {
    const dataId = req.params.id;
    const updatedData = req.body;
    try {
        const updatedDataItem = await scienceData.findByIdAndUpdate(dataId, updatedData, { new: true });
        if (!updatedDataItem) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.json({ message: "Data updated successfully", data: updatedDataItem });
    } catch (error) {
        console.error("Error updating data:", error);
        res.status(500).json({ error: "Unable to update data" });
    }
});

module.exports = router;
