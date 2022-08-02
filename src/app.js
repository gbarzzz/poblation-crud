import express from "express";
import morgan from "morgan";

import countryRoutes from './routes/country.routes';

const app = express();

// settings
app.set("port", 9000);

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/countrys",countryRoutes);

export default app;