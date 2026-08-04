import cloudinary from "../config/cloudinary.js";
import multer from "multer";
import CloudinaryStorage from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "anteautoinventory",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

const uploadVehicle = multer({ storage });

export default uploadVehicle;
