import { Router } from "express";
import { statusController } from "./app/controller/statusController";

const router: Router = Router()

//Routes
router.get("/", statusController.helth);

export { router };