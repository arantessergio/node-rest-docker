const TagModel = require("../models/tag");

exports.create = async (req, res) => {
  try {
    const result = await TagModel.create(req.body);
    return res.send(result);
  } catch (error) {
    return res.send(error);
  }
};

exports.list = async (_, res) => {
  try {
    const result = await TagModel.find({}).exec();
    return res.send(result);
  } catch (error) {
    return res.send(error);
  }
};

exports.remove = async (req, res) => {
  try {
    const result = await TagModel.findByIdAndDelete(req.params.id).exec();
    if (result) {
      return res.send({ deleted: true });
    }
    return res.status(404).send();
  } catch (error) {
    return res.send(error);
  }
};
