import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { DataLimit } from "./constants";

// Variables
const app = express();
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
};
const jsonOptions = { limit: DataLimit };
const urlEncodedOptions = { extended: true, limit: DataLimit };
const staticFolder = "public";

// Middlewares
app.use(cors(corsOptions));
app.use(express.json(jsonOptions));
app.use(express.urlencoded(urlEncodedOptions));
app.use(express.static(staticFolder));
app.use(cookieParser());

export { app };
