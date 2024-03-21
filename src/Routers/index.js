import express from "express";
import { getAllSnippets, createNewSnippet, getSnippetsByUsername } from "../Controller/snipetController.js";

const router = express.Router();


router.route('/createSnippet').post(createNewSnippet);
router.route('/getAllSnippet').get(getAllSnippets);
router.route('/getSnippetByUsername/:username').get(getSnippetsByUsername);

export default router;