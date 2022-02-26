const router = require('express').Router();

router.use('/ping', (req, res) => {
    res.status(200).send("I'm fine.");
});

module.exports = router;