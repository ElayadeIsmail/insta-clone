const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProfileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      autopopulate: true,
    },
    about: {
      type: String,
    },
    activity: {
      type: String,
    },
    location: {
      type: String,
    },
    isCurrentUserProfile: {
      type: Boolean,
      default: false,
    },
    isFollowing: {
      type: Boolean,
      default: false,
    },
    followers: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },
      },
    ],
    following: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },
      },
    ],
    posts: [],
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

ProfileSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('profile', ProfileSchema);
