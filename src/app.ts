import express, { Express, Request, Response } from "express";

import routes from "./routes";

const PORT = process.env.PORT || 8080;

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello World");
});

app.listen(PORT, (): void => {
  console.log(`Server has been started on port ${PORT}...`);
});
