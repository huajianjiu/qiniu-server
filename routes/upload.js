var express = require('express');
var router = express.Router();
const utils = require('../utils');
const config = require('../config/index')
const qiniu = require('qiniu')

router.get('/upload-token', function(req, res, next) {
    res.send({"code": "200", "message":"success","data":{token:utils.upload.uptoken(config.bucket)}});
});
router.post('/upload-urls',(req,res,next)=>{
    let imageList = req.body.imageList;
    console.log(imageList);
    res.send({"code": "200", "message":"success"})
})

module.exports = router;
