const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      first: {
        type: String,
        required: true,
        trim: true,
      },
      last: {
        type: String,
        required: true,
        trim: true,
      },
    },
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      alt: String,
      img: {
        data: Buffer,
        contentType: String,
      },
    },
    userType: {
      type: String,
      enum: ['NewComer', 'Local', 'admin'],
      default: 'NewComer',
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    birthDay: {
      type: Date,
      required: true,
    },
    interests: [String],
    isActive: Boolean,
    createdActivities: [
      { type: mongoose.SchemaTypes.ObjectId, ref: 'Activity' },
    ],
    activities: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Activity' }],
  },
  { timestamps: true},
);
module.exports = mongoose.model('User', userSchema);
