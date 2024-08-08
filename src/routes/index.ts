import { Router } from "express";
import { UserRouter } from "./userRoutes";

export const router = Router();
router.get("/", (req, res) => {
  res.send("Hello world");
});
router.use("/user", UserRouter);
