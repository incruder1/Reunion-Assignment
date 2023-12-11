import express from "express";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddlewares.js";
import {list,addProperty,updateProperty,deleteProperty} from "../controllers/property.js"

//router object
const router = express.Router();

router.get("/list-property",list);

router.post("/add",requireSignIn,isAdmin,addProperty);

router.put("/:id",requireSignIn,isAdmin,updateProperty)
// requireSignIn,isAdmin
router.delete("/:id",requireSignIn,isAdmin,deleteProperty);
export default router;