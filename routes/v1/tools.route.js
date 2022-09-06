const express = require("express");
const toolsControllers = require("../../controllers/tools.controller");
const limiter = require("../../middleware/limiter");
const viewCount = require("../../middleware/viewCount");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send('tools found')
// });

// router.post("/", (req, res) => {
//     res.send('tool added')
// });

//shortcut
router.route("/")
  /**
    * @api {get} /tools All tools
    * @apiDescription Get all the tools
    * @apiPermission admin
    *
    * @apiHeader {String} Authorization   User's access token
    *
    * @apiParam  {Number{1-}}         [page=1]     List page
    * @apiParam  {Number{1-100}}      [limit=10]  Users per page
    *
    * @apiSuccess {Object[]} all the tools.
    *
    * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
    * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
    */
  .get(toolsControllers.getAllTools)
  /**
    * @api {post} /tools save a tool
    * @apiDescription Get all the tools
    * @apiPermission admin
    *
    * @apiHeader {String} Authorization   User's access token
    *
    * @apiParam  {Number{1-}}         [page=1]     List page
    * @apiParam  {Number{1-100}}      [limit=10]  Users per page
    *
    * @apiSuccess {Object[]} all the tools.
    *
    * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
    * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
    */
  .post(toolsControllers.saveATool);

router.route("/:id")
  //router level middleware viewcount limiter
  // .get(viewCount, limiter, toolsControllers.getToolDetail)
  .get(viewCount, toolsControllers.getToolDetail)
  .patch(toolsControllers.updateTool)
  .delete(toolsControllers.deleteTool)

module.exports = router;