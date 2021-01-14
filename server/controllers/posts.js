import postMessage from '../models/PostMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await postMessage.find();

    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = (req, res) => {
  res.send('Post Creation');
};