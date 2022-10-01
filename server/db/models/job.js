const mongoose = require("mongoose");

const { Schema } = mongoose;

const jobSchema = new Schema({
    company: { type: String, required: true, maxLength: 128 },
    position: { type: String, required: true },
    bullets: Array,
    startDate: Date,
    endDate: Date,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", jobSchema);
