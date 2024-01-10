const jobsheetController = require('../controllers/jobsheet');
const router = require('express').Router();

router.post('/submit-one', jobsheetController.submitOne);
router.post('/submit-many', jobsheetController.submitMany);

module.exports = router;
