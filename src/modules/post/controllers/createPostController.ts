import { Request, Response } from 'express';
import { Post, posts } from '../models/PostModel';

export const createPost = async (req: Request, res: Response) => {
  try {
    // create variable of the input from the frontend
    // the forntend is responsible for sending a JSON that contains the 'newPost' object
    const newPost: Post = req.body.newPost
    // this is like creating a new row in SQL (again, lazy...)
    posts.push(newPost);
    res.status(200).json({
      success: true
    });
  } catch (error) {
    console.error(error);
  }
}
