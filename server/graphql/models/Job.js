const { ROLE_ADMIN } = require("../../../constants/roles");

class Job {
    constructor(model, user) {
        this.Model = model;
        this.user = user;
        this.rights = [ROLE_ADMIN];
    }

    getAll() {
        return this.Model.find({}).sort({ startDate: -1 });
    }

    getById(id) {
        return this.Model.findById(id);
    }

    create(data) {
        if (!this.user || !this.rights.includes(this.user.role)) {
            throw new Error("Not authorized!");
        }
        return this.Model.create(data);
    }

    findAndUpdate(id, data) {
        if (!this.user || !this.rights.includes(this.user.role)) {
            throw new Error("Not authorized!");
        }
        return this.Model.findOneAndUpdate({ _id: id }, data, { new: true, runValidators: true });
    }

    findAndDelete(id) {
        if (!this.user || !this.rights.includes(this.user.role)) {
            throw new Error("Not authorized!");
        }
        return this.Model.findOneAndRemove({ _id: id });
    }
}

module.exports = Job;
