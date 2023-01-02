var express = require('express');
var router = express.Router();
const utils = require('../utils');
const config = require('../config/index')


router.get('/upload-token', function(req, res, next) {
    res.json({"code": "200", "message":"success","data":{token:utils.upload.uptoken(config.bucket)}});
});
router.get('/upload-urls',(req,res,next)=>{

} )

module.exports = router;
