import express from 'express';
import { createPost } from '../controllers/createPostController'
import { getAllPosts } from '../controllers/getAllPosts'
const postRouter = express.Router();

// if the server gets a "POST /post/createPost" request, then run the controller function
postRouter.post('/createPost', (req, res) => { createPost(req, res) });

// "GET /post/getAllPosts"
postRouter.get('/getAllPosts', (req, res) => { getAllPosts(req, res) });


export default postRouter;