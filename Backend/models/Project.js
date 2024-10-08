import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['In Progress', 'Completed', 'Pending'],
  },
  client: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
