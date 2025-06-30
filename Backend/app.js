import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import router from './src/routes/shorturlroute.js';
import dbConnection from './src/config/mongoDB_config.js';
import {redirectshort_url} from './src/controllers/shortUrl.js';
import cors from 'cors';

const app=express();
app.use(cors());

const port=process.env.PORT || 4000
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// for generating short url using long url
app.use("/api/v1",router);
// for  redorecting on short url 
app.get("/:id",redirectshort_url);


const startServer = async () => {
  try {
    await dbConnection(); 
    app.listen(port, () => {
      console.log(`Server Running on port no. ${port}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
  }
};

startServer();
