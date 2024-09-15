import Item from "../models/itemModel.js";

// Get all items with pagination
export const allItems = async (req, res) => {
  try {
    let { limit = 10, start = 0 } = req.query;

    // Ensure limit and start are numbers
    limit = parseInt(limit);
    start = parseInt(start);

    // Fetch items with pagination
    const items = await Item.find().skip(start).limit(limit);

    return res.status(200).json({ success: true, items });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
};
