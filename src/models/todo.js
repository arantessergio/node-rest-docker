const mongoose = require("mongoose");

const { Schema } = mongoose;

const TodoSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: Schema.Types.ObjectId,
      reference: "Tag",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", TodoSchema);
