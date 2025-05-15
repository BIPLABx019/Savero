import mongoose,{Schema} from "mongoose";

const roundUpInvestmentSchema = new mongoose.Schema({
  transactionId: String,
  originalAmount: Number,
  roundUpAmount: Number,
  investedOn: { type: Date, default: Date.now }
});

const dailyInvestmentSchema = new mongoose.Schema({
  amount: Number,
  date: { type: Date, default: Date.now }
});

const goalBasedInvestmentSchema = new mongoose.Schema({
  goalName: String,
  targetAmount: Number,
  deadline: Date,
  investedSoFar: { type: Number, default: 0 },
  dailyTarget: Number,
  startDate: { type: Date, default: Date.now },
  lastInvestmentDate: Date,
  progress: {
    type: Number,
    default: 0 // percentage
  }
});

const investmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  roundUpInvestments: [roundUpInvestmentSchema],
  dailyInvestments: [dailyInvestmentSchema],
  goalBasedInvestments: [goalBasedInvestmentSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('InvestmentData', investmentSchema);
