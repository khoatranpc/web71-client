import { Router } from "express";
import subjectsMiddlewares from "../middlewares/subjects.js";
import subjectsController from "../controllers/subjects.js";
const SubjectsRouter = Router();

SubjectsRouter.get('', subjectsMiddlewares.isValidAuth, subjectsController.getDataSubject);

// put, delete cho auth là TEACHER
// put: cập điểm TB cho 1 bộ môn
// delete: TEACHER thêm 1 bộ môn (post) -> xoá bộ môn này đi (delete)
export default SubjectsRouter;