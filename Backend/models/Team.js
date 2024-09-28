import mongoose from 'mongoose';

const teamSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Team = mongoose.model('Team', teamSchema);

export default Team;
