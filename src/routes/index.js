import { Router } from "express";
import authRouter from "./auth.router.js";
import sessionsRouter from "./sessions.router.js";
import productRouter from "./product.router.js";
import cartRouter from "./cart.router.js";
import mocksRouter from "./mocks.router.js";
import petsRouter from "./pets.router.js";
import adoptionsRouter from "./adoption.router.js";

const router = Router();

router.use("/auth", authRouter);

router.use("/sessions", sessionsRouter);

router.use("/products", productRouter);

router.use("/carts", cartRouter);

router.use("/pets", petsRouter);

router.use("/adoptions", adoptionsRouter);

router.use("/mocks", mocksRouter);

export default router;
