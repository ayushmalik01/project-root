const Task = require("../models/Task");

// GET all tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json(err);
    }
};

// CREATE task
exports.createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        const saved = await task.save();
        res.json(saved);
    } catch (err) {
        res.status(500).json(err);
    }
};

// UPDATE task
exports.updateTask = async (req, res) => {
    try {
        const updated = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json(err);
    }
};

// DELETE task
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
};