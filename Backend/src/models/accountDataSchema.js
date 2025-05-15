import mongoose,{Schema} from "mongoose";

const transactionSchema = new mongoose.Schema({
  date: Date,
  amount: Number,
  type: { type: String, enum: ['debit', 'credit'] },
  description: String,
  mode: String
});

const subscriptionSchema = new mongoose.Schema({
  merchant: String,
  amount: Number,
  interval: String,
  lastDebited: Date,
  nextDue: Date,
  mode: String,
  category: String
});

const userFinanceSchema = new mongoose.Schema({
  account: {
    name: String,
    accountNumber: String,
    ifsc: String,
    type: String,
    institution: String
  },
  balance: {
    current: Number,
    available: Number
  },
  transactions: [transactionSchema],
  subscriptions: [subscriptionSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('UserFinanceData', userFinanceSchema);
