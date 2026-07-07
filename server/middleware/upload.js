import cloudinary from "../config/cloudinary.js";
import multer from "multer";
import { CloudinaryStorag } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "anteautoblog",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

export const upload = multer({ storage });
