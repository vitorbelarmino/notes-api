import { Router } from "express";
import { userRouter } from "./userRoutes";
import { noteRouter } from "./noteRouter";
import swaggerDocs from "../swagger.json";
import swaggerUi from "swagger-ui-express";

export const router = Router();
router.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
router.use("/user", userRouter);
router.use("/note", noteRouter);
