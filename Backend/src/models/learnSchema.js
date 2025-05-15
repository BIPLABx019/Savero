import mongoose,{Schema} from "mongoose";

const quizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true }
});

const learningContentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }, // can be Markdown or plain text
  videoUrl: { type: String }, // optional video for the topic
  tags: [{ type: String }], // e.g., ["saving", "budgeting"]
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner'
  },
  estimatedTime: { type: Number }, // in minutes
  quiz: [quizSchema], // optional quiz
  isFree: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LearningContent', learningContentSchema);
