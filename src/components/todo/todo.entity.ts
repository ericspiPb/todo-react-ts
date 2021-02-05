import mongoose from 'mongoose';

export interface ToDo extends mongoose.Document {
  value: string,
  completedAt?: Date,
  deletedAt?: Date
}

export const schema = new mongoose.Schema({
  value: String,
  completedAt: Date,
  deletedAt: Date
}, {
  timestamps: true
})

export default mongoose.model<ToDo>('ToDo', schema);
