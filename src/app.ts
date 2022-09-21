import express, { Express, Request, Response } from "express";

const app: Express = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello World");
});

app.listen(PORT, (): void => {
  console.log(`Server has been started on port ${PORT}...`);
});
