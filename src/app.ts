import * as express from "express";
import * as compression from "compression";  // compresses requests
import * as bodyParser from "body-parser";

import apiRouter from "./controllers/api";

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);

export default app;