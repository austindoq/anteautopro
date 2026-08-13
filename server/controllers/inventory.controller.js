import brandNewModel from "../models/brandNew.model.js";
import tradeInModel from "../models/tradeIn.model.js";
import cloudinary from "../config/cloudinary.js";
import { model } from "mongoose";

//Save Brand New Inventory Item
export const createBrandNewInventoryItem = async (req, res) => {
  const {
    make,
    model,
    year,
    drive,
    transmission,
    vin,
    description,
    newStatus,
  } = req.body;
  const imageUrl = req.file.secure_url;
  const imagePublicId = req.file.public_id;

  if (
    !imageUrl ||
    !imagePublicId ||
    !make ||
    !model ||
    !year ||
    !drive ||
    !transmission ||
    !vin ||
    !description
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
      drive,
      transmission,
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
  const { inventoryId } = req.params;

  try {
    const brandNewItem = await brandNewModel.findById(inventoryId);

    try {
      await cloudinary.v2.uploader.destroy(brandNewItem.imagePublicId);
    } catch (error) {
      res.status(500).json({
        message: `There was an error deleting this vehicle's image hosting image: ${error}`,
      });
    }

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
  const {
    make,
    model,
    year,
    vin,
    drive,
    transmission,
    odometer,
    description,
    newStatus,
  } = req.body;
  const imageUrl = req.file.secure_url;
  const imagePublicId = req.file.public_id;

  if (
    !imageUrl ||
    !imagePublicId ||
    !make ||
    !model ||
    !year ||
    !drive ||
    !transmission ||
    !vin ||
    !odometer ||
    !description
  ) {
    return res
      .status(400)
      .json({ message: "Missing schema field. Cannot save." });
  }

  try {
    await tradeInModel.create({
      imageUrl,
      imagePublicId,
      make,
      model,
      year,
      drive,
      transmission,
      vin,
      odometer,
      description,
      newStatus,
    });
    return res
      .status(201)
      .json({ message: `Trade In ${make} Added Successfully!` });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error saving to database: ${error}` });
  }
};

//Delete Trade In Inventory Item
export const deleteTradeInInventoryItem = async (req, res) => {
  const { inventoryId } = req.params;
  try {
    const tradeInItem = await tradeInModel.findById(inventoryId);

    try {
      await cloudinary.v2.uploader.destroy(tradeInItem.imagePublicId);
    } catch (error) {
      res.status(500).json({
        message: `There was an error deleting this vehicle's image hosting image: ${error}`,
      });
    }

    await tradeInModel.findByIdAndDelete(inventoryId);
    return res.status(200).json({ message: `Successfully deleted!` });
  } catch (error) {
    return res.status(500).json({ message: `Error deleting: ${error}` });
  }
};

//GET All Brand New Listings
export const getAllBrandNewListings = async (req, res) => {
  try {
    const allBrandNewListings = await brandNewModel
      .find()
      .sort({ createdAt: -1 });
    return res.status(200).send(allBrandNewListings);
  } catch (error) {
    return res.status(500).json({
      message: `There was an error retrieving listings from database: ${error}`,
    });
  }
};

//GET All Trade In  Listings
export const getAllTradeInListings = async (req, res) => {
  try {
    const allTradeInListings = await tradeInModel
      .find()
      .sort({ createdAt: -1 });
    return res.status(200).send(allTradeInListings);
  } catch (error) {
    return res.status(500).json({
      message: `There was an error retrieving listings from database: ${error}`,
    });
  }
};

//Retrieve Brand New By Recent
export const getAllBrandNewMostRecent = async (req, res) => {
  try {
    const allBrandNewMostRecent = await brandNewModel
      .find()
      .sort({ createdAt: -1 });
    return res.status(200).send(allBrandNewMostRecent);
  } catch (error) {
    return res.status(500).json({
      message: `There was an error retrieving brand new vehicles from database: ${error}`,
    });
  }
};

//GET User Search Results
export const getSearchListings = async (req, res) => {
  let { search } = req.query;
  search = search.toLowerCase().trim();
  const { contentType } = req.params;

  //QUERYABLE FIELDS AND REGEX SEARCH CASE INSENSITIVE
  const searchQuery = {
    $or: [
      { make: { $regex: search, $options: "i" } },
      { model: { $regex: search, $options: "i" } },
      { year: { $regex: search, $options: "i" } },
    ],
  };

  if (contentType === "brandNewListings") {
    try {
      const results = await brandNewModel.find(searchQuery);
      return res.status(200).send(results);
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Error retrieving listings: ${error}` });
    }
  } else if (contentType === "tradeInListings") {
    try {
      const results = await tradeInModel.find(searchQuery);
      return res.status(200).send(results);
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Error retrieving listings: ${error}` });
    }
  }
};

//GET 3 Most Recent Trade Ins
export const mostRecentTradeIns = async (req, res) => {
  try {
    const results = await tradeInModel.find().sort({ createdAt: -1 }).limit(3);
    return res.status(200).send(results);
  } catch (error) {
    return res.status(500).json({
      message: `There was an error retrieving most recent trade ins: ${error}`,
    });
  }
};
