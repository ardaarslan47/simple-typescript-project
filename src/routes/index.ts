import express, { Router } from "express";
import { getIndex } from "../controllers";

const router = express.Router();

router.route("/").get(getIndex);

module.exports = router