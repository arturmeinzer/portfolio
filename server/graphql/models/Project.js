class Project {
    constructor(model, user) {
        this.Model = model;
        this.user = user;
    }

    getAll() {
        return this.Model.find({});
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
        return this.Model.findOneAndRemove({ _id: id });
    }
}

export default Project;
