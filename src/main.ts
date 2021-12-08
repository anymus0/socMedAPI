import express from 'express';
import cors from 'cors';
// import routes
import postRouter from './modules/post/routes/postRoutes'
const port = 3030;
const app = express();
app.use(express.json())

// use cors in dev mode only
if (process.env.NODE_ENV !== 'production') {
  console.log('using cors');
  app.use(cors())
}

// use routes
app.use('/post', postRouter)

const run = async () => {
  try {
    app.listen(3030, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error(error)
  }
}

run();