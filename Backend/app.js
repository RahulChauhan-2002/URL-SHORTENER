import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import router from './src/routes/shorturlroute.js';
import dbConnection from './src/config/mongoDB_config.js';
import {redirectshort_url} from './src/controllers/shortUrl.js';
import auth_routes from './src/routes/auth_routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { attachUser } from './src/utils/attachUser.js';

const app=express();
const allowedOrigins = [
  "https://url-shortener-1-98oq.onrender.com" 
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

const port=process.env.PORT || 4000
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(attachUser);

// for generating short url using long url
app.use("/api/v1",router);
app.use("/api/v1",auth_routes);
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
