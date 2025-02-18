class Job {
    constructor(model) {
        this.Model = model;
    }

    getAll() {
        return this.Model.find({}).sort({ startDate: -1 });
    }

    getById(id) {
        return this.Model.findById(id);
    }

    create(data) {
        return this.Model.create(data);
    }

    findAndUpdate(id, data) {
        return this.Model.findOneAndUpdate({ _id: id }, data, { new: true, runValidators: true });
    }

    findAndDelete(id) {
        return this.Model.findOneAndDelete({ _id: id });
    }
}

export default Job;
