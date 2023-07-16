const { priceService } = require("../services");
const appCache = require("../utils/appCache");

const getPrice = async (req, res) => {
  try {
    const { symbol = "LTCBTC" } = req.query;
    const priceDetails =
      (await priceService.getPriceDetails(symbol)) ||
      JSON.parse(await appCache.get("priceDetails"));
    res.status(200).json({ ...priceDetails });
    priceService.updatePrice(symbol);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getPrice,
};
