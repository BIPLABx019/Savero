const mongoose = require('mongoose');

// Reward Points Schema
const rewardSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  points: {
    type: Number,
    default: 0, // Initial reward points
    required: true
  },
  pointsHistory: [
    {
      action: { 
        type: String, 
        enum: ['earned', 'redeemed'], 
        required: true 
      },
      amount: { 
        type: Number, 
        required: true 
      },
      description: String, // Optional description for the action
      date: { 
        type: Date, 
        default: Date.now 
      }
    }
  ],
  lastUpdated: { 
    type: Date, 
    default: Date.now 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  }
}, {
  timestamps: true // Tracks creation and updates
});

// Model for Rewards Schema
const Reward = mongoose.model('Reward', rewardSchema);

module.exports = Reward;
