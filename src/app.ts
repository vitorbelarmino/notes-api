import "express-async-errors";
import express from "express";

export class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.app.get("/", (req, res) => {
      res.send("Hello world");
    });
    this.app.use(express.json());
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS,PUT,PATCH");
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
      if (_req.method === "OPTIONS") {
        return res.status(200).end();
      }
      next();
    };
    this.app.use(accessControl);
  }

  public start(port: number | string): void {
    this.app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  }
}
