import { Router } from "express";
import { userRouter } from "./userRoutes";
import { noteRouter } from "./noteRouter";

export const router = Router();
router.get("/", (req, res) => {
  res.send("Hello world");
});
router.use("/user", userRouter);
router.use("/note", noteRouter);
