const TodoModel = require("../models/todo");

exports.create = async (req, res) => {
  try {
    const result = await TodoModel.create(req.body);
    return res.send(result);
  } catch (error) {
    return res.send(error);
  }
};

exports.list = async (_, res) => {
  try {
    const result = await TodoModel.find({}).exec();
    return res.send(result);
  } catch (error) {
    return res.send(error);
  }
};

exports.get = async (req, res) => {
  try {
    const result = await TodoModel.findById(req.params.id).exec();
    if (result) {
      return res.send(result);
    }
    return res.status(404).send();
  } catch (error) {
    return res.send(error);
  }
};

exports.update = async (req, res) => {
  try {
    const result = await TodoModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).exec();

    if (result) {
      return res.send(result);
    }
    return res.status(404).send();
  } catch (error) {
    return res.send(error);
  }
};

exports.remove = async (req, res) => {
  try {
    const result = await TodoModel.findByIdAndDelete(req.params.id).exec();
    if (result) {
      return res.send({ deleted: true });
    }
    return res.status(404).send();
  } catch (error) {
    return res.send(error);
  }
};

exports.findByTag = async (req, res) => {
  try {
    const result = await TodoModel.find({ tag: req.params.tagId }).exec();

    return res.send(result);
  } catch (error) {
    return res.send(error);
  }
};
