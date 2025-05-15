import mongoose,{Schema} from "mongoose";

const aiInsightSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  insightType: {
    type: String,
    enum: ['Spending', 'Saving', 'Investment', 'Subscription', 'Goal'],
    required: true
  },
  message: {
    type: String,
    required: true
  },
  scoreImpact: {
    type: Number, // Optional: can show if it affects user's expense score (positive or negative)
    default: 0
  },
  suggestion: {
    type: String // AI-generated actionable suggestion
  },
  generatedAt: {
    type: Date,
    default: Date.now
  },
  read: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('AiInsight', aiInsightSchema);
