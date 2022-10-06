const mongoose = require("mongoose");

const { Schema } = mongoose;

const projectSchema = new Schema({
    title: { type: String, required: true, maxLength: 128 },
    content: { type: String, required: true },
    techStack: Array,
    images: Array,
    website: String,
    github: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Project", projectSchema);
