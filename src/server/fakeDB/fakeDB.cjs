const mongoose = require("mongoose");
const { projects, jobs } = require("./data.cjs");

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

const jobSchema = new Schema({
    company: { type: String, required: true, maxLength: 128 },
    position: { type: String, required: true },
    bullets: Array,
    startDate: Date,
    endDate: { type: Date, default: null },
    createdAt: { type: Date, default: Date.now },
});

mongoose.model("Project", projectSchema);
mongoose.model("Job", jobSchema);

const { Project, Job } = mongoose.models;

class FakeDB {
    // eslint-disable-next-line class-methods-use-this
    async clean() {
        await Project.deleteMany({});
        await Job.deleteMany({});
    }

    // eslint-disable-next-line class-methods-use-this
    async add() {
        await Project.create(projects);
        await Job.create(jobs);
    }

    async populate() {
        await this.clean();
        await this.add();
    }
}

module.exports = new FakeDB();
