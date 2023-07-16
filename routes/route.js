const express = require("express");
const router = express.Router();
const { priceController } = require("../controllers");
/**
 * @desc    Get current price of the symbol
 * @route   GET /price
 * @body    {symbol: string}
 * @output  {data: {price: number, bidPrice: number, askPrice: number}}
 * @access  Public
 */
router.get("/price", priceController.getPrice);

module.exports = router;
