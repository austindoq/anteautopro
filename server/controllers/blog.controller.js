import blogModel from "../models/blog.model.js";

//CREATE A BLOG POST
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

//RETRIEVE ALL BLOG POSTS
export const getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await blogModel.find().sort({ createdAt: -1 });
    return res.status(200).send(blogPosts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `There was an error while retrieving blog posts: ${error}`,
    });
  }
};

//DELETE A BLOG POST
export const deleteBlogPost = async (req, res) => {
  const { blogId } = req.params;
  try {
    await blogModel.findByIdAndDelete(blogId);

    return res.status(200).json({ message: `Blog post has been deleted.` });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Could not delete the blog post from the database: ${error}`,
    });
  }
};
