//all routes related to those posts.
import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js' // dont forget "posts.'js'", since it is node and not react
//curly braces beacause we are doing name and not default export

const router = express.Router();



router.get('/', getPosts);
router.post('/', createPost);

export default router;