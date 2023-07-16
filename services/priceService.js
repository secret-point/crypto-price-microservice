const appCache = require("../utils/appCache");
const { instance } = require("../utils/axiosConfig");

const updateFrequency = process.env.UPDATE_FREQUENCY || 10000;
const commission = process.env.SERVICE_COMMISSION || 0.0001;

const getPriceDetails = async (symbol) => {
  try {
    const bookTracker = await instance.get("/ticker/bookTicker", {
      params: { symbol },
    });
    const { bidPrice, askPrice } = bookTracker;
    const adjustedBidPrice = Number(bidPrice) * (1 - Number(commission));
    const adjustedAskPrice = Number(askPrice) * (1 - Number(commission));
    const midPrice = Number(
      ((adjustedBidPrice + adjustedAskPrice) / 2).toFixed(9)
    );
    const priceDetails = {
      midPrice,
      bidPrice: adjustedAskPrice,
      askPrice: adjustedAskPrice,
    };
    await appCache.set("priceDetails", JSON.stringify(priceDetails));
    return priceDetails;
  } catch (err) {
    console.log(err);
  }
};

const updatePrice = (symbol) => {
  setInterval(() => getPriceDetails(symbol), updateFrequency);
};

module.exports = {
  updatePrice,
  getPriceDetails,
};
