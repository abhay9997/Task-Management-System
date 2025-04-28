const express = require('express');
const router = express.Router();
const NodeCache = require('node-cache');
const { fetchTasksFromDB, updateTaskInDB } = require('../db'); 

const cache = new NodeCache({ stdTTL: 300 }); // Cache TTL (time-to-live) in seconds

const getTasks = async () => {
    let tasks = cache.get("tasks");
    if (!tasks) {
        tasks = await fetchTasksFromDB();
        cache.set("tasks", tasks);
    }
    return tasks;
};

router.get('/TaskRoutes', async (req, res) => {
    const userId = req.query.userId; // Get userId from query parameters
    try {
        if (!userId) {
            return res.status(400).send("User ID is required");
        }
        const tasks = await fetchTasksFromDB(userId);
        res.json({ Task_Routes: tasks });
    } catch (error) {
        console.error("Error in /TaskRoutes route:", error.message);
        res.status(500).send("Server error");
    }
});
router.patch('/TaskRoutes/:id', async (req, res) => {
    const { id } = req.params;
    const status = req.body;
    

    try {
        const updatedTask = await updateTaskInDB(id, status);
        console.log("updatedTask" , updatedTask)


        if (!updatedTask) {
            return res.status(404).send("Task not found");
        }

        // Invalidate the cache so it gets refreshed with updated data
        cache.del("tasks");
        console.log("updatedTask.value" , updatedTask)
        res.json(updatedTask);
    } catch (error) {
        console.error("Error updating task:", error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
