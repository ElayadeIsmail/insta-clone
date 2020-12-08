const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      autopopulate: true,
    },
    image: {
      type: String,
      required: true,
    },
    isLiked: {
      type: Boolean,
      default: false,
    },
    isCommented: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },
      },
    ],
    comments: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'user',
          autopopulate: true,
        },
        body: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

postSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('post', postSchema);
