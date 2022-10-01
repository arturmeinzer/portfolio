const { projects, users, jobs } = require("./data");

const Project = require("../db/models/project");
const Job = require("../db/models/job");
const User = require("../db/models/user");

class FakeDB {
    // eslint-disable-next-line class-methods-use-this
    async clean() {
        await User.deleteMany({});
        await Project.deleteMany({});
        await Job.deleteMany({});
    }

    // eslint-disable-next-line class-methods-use-this
    async add() {
        await User.create(users);
        await Project.create(projects);
        await Job.create(jobs);
    }

    async populate() {
        await this.clean();
        await this.add();
    }
}

module.exports = new FakeDB();
