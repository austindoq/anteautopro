import brandNewModel from "../models/brandNew.model.js";
import tradeInModel from "../models/tradeIn.model.js";

//Save Brand New Inventory Item
export const createBrandNewInventoryItem = async (req, res) => {
  const { make, model, year, vin, description, newStatus } = req.body;
  const imageUrl = req.file.secure_url;
  const imagePublicId = req.file.public_id;

  if (
    !imageUrl ||
    !imagePublicId ||
    !make ||
    !model ||
    !year ||
    !vin ||
    !description ||
    !newStatus
  ) {
    return res
      .status(400)
      .json({ message: "Missing schema field. Cannot save." });
  }

  try {
    await brandNewModel.create({
      imageUrl,
      imagePublicId,
      make,
      model,
      year,
      vin,
      description,
      newStatus,
    });
    return res
      .status(201)
      .json({ message: `Brand New ${make} Added Successfully!` });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error saving to database: ${error}` });
  }
};

//Delete Brand New Inventory Item
export const deleteBrandNewInventoryItem = async (req, res) => {
  const inventoryId = req.params;

  try {
    await brandNewModel.findByIdAndDelete(inventoryId);
    return res.status(200).json({ message: `Successfully deleted!` });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error deleting blog post: ${error}` });
  }
};

//Save Trade In Inventory Item
export const createTradeInInventoryItem = async (req, res) => {
  console.log(req.body);
  const { make, model, year, vin, description, newStatus } = req.body;

  // if (
  //   !imageUrl ||
  //   !make ||
  //   !model ||
  //   !year ||
  //   !vin ||
  //   !description ||
  //   !newStatus
  // ) {
  //   return res
  //     .status(400)
  //     .json({ message: "Missing schema field. Cannot save." });
  // }

  // try {
  //   await tradeInModel.create({
  //     imageUrl,
  //     make,
  //     model,
  //     year,
  //     vin,
  //     description,
  //     newStatus,
  //   });
  //   return res
  //     .status(201)
  //     .json({ message: `Trade In ${make} Added Successfully!` });
  // } catch (error) {
  //   return res
  //     .status(500)
  //     .json({ message: `Error saving to database: ${error}` });
  // }
};

//Delete Trade In Inventory Item
export const deleteTradeInInventoryItem = async (req, res) => {
  const inventoryId = req.params;

  try {
    await tradeInModel.findByIdAndDelete(inventoryId);
    return res.status(200).json({ message: `Successfully deleted!` });
  } catch (error) {
    return res.status(500).json({ message: `Error deleting: ${error}` });
  }
};
