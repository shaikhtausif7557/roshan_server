// routes/projects.js
import express from 'express';
import Project from '../models/project.cjs';

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new project
router.post('/', async (req, res) => {
    const project = new Project({
        name: req.body.name,
        location: req.body.location,
        year: req.body.year
    });

    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
