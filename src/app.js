import express from "express";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();
routes(app);
app.use(cors());

export default app;