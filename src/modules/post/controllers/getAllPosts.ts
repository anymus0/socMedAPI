import { Request, Response } from 'express';
import { Post, posts } from '../models/PostModel';

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const allPost: Array<Post> = posts;
    res.status(200).json({
      allPost: allPost,
      success: true
    });
  } catch (error) {
    res.status(500).json({
      success: false
    });
    console.error(error);
  }
}
