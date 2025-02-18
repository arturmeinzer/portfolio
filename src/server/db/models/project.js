import mongoose from "mongoose";

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

export default mongoose.models.Project || mongoose.model("Project", projectSchema);
