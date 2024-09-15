import Item from "../models/itemModel.js";

//get all items
export const allItems = async (req, res) => {
  try {
    const { limit, start } = req.query;

    const items = await Item.find();
    const sendItems = items.slice(start, Number(start) + Number(limit));

    return res.status(200).json({ success: true, items: sendItems });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
};
