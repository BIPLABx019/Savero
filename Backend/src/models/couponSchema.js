import mongoose,{Schema} from "mongoose";

// Enum for coupon types
const couponTypeEnum = ['discount', 'gift-card'];

// Schema for Discount Coupons
const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  description: String,
  couponType: {
    type: String,
    enum: couponTypeEnum,
    default: 'discount',
    required: true
  },
  discountPercentage: {
    type: Number,
    required: function() { return this.couponType === 'discount'; }
  },
  validityPeriod: { type: Date, required: true }, // Expiration date
  isActive: { type: Boolean, default: true }, // To mark whether the coupon is active or expired
  category: { type: String, enum: ['electronics', 'fashion', 'food', 'all'], default: 'all' },
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

// Schema for Gift Cards (Money-Based Coupons)
const giftCardSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  description: String,
  couponType: {
    type: String,
    enum: couponTypeEnum,
    default: 'gift-card',
    required: true
  },
  amount: {
    type: Number,
    required: function() { return this.couponType === 'gift-card'; }
  },
  validityPeriod: { type: Date, required: true }, // Expiration date
  isActive: { type: Boolean, default: true }, // To mark whether the gift card is active or expired
  category: { type: String, enum: ['electronics', 'fashion', 'food', 'all'], default: 'all' },
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

// Combine both schemas into one model
const Coupon = mongoose.model('Coupon', couponSchema);
const GiftCard = mongoose.model('GiftCard', giftCardSchema);

module.exports = { Coupon, GiftCard };
