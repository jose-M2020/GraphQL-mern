import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  // TODO: change start and end to type Date
  start: {
    type: String,
  },
  end: {
    type: String,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },
  date: {type:Date, default: Date.now, require: true},
  notify: {type:Boolean, default: false}
}, { timestamps: true });

export default mongoose.model('Event', EventSchema);