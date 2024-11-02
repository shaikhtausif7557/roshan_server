// models/project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    year: { type: Number, required: true }
});

const Project = mongoose.model('Project', projectSchema);

module.exports=Project;
