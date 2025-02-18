import mongoose from "mongoose";

const { Schema } = mongoose;

const jobSchema = new Schema({
    company: { type: String, required: true, maxLength: 128 },
    position: { type: String, required: true },
    bullets: Array,
    startDate: Date,
    endDate: { type: Date, default: null },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Job || mongoose.model("Job", jobSchema);
