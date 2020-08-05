const router = require('express').router();
const jobsController = require("../../controllers/jobs");

// Matches with "/api/jobs"
router.route("/")
.get(jobsController.getJobs)
.post(jobsController.createJob);

// Matches with "/api/jobs/:id" 
router.route("/:id")
.get(jobsController.getJob)
// .put(jobsController.update)
// .delete(jobsController.remove);


module.exports= router