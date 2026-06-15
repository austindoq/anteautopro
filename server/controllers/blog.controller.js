import blogModel from "../models/blog.model.js";

export const createBlogPost = async (req, res) => {
  const { title, body, imageURL } = req.body;

  if (!title || !body || !imageURL) {
    return res.status(400).json({
      message: `Title, body, and imageURL are required to create a blog post.`,
    });
  }

  try {
    await blogModel.create({ title, body, imageURL });
    return res.status(201).json({ message: `Blog post created successfully!` });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: `Unable to save blog post: ${error}` });
  }
};

// export const deleteBlogPost = async (req, res) => {
// };
