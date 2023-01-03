const config = require('../config/index');
const qiniu = require('qiniu');
const { v5 : uuidv5 }= require('uuid');

// Access Key 和 Secret Key



const upload = {
    createFileNameByUUID(fileName,type){
        let name = uuidv5(fileName,config.MY_NAMESPACE)+"."+type;
        name=name.replace(/-*/g,"");;
        return name;
    },
    /**
     * 构建上传策略函数
     * @param {String} bucket 要上传的空间
     * @returns {String} token
     */
    uptoken() {
        var bucket = config.bucket;
        var accessKey = config.ACCESS_KEY;
        var secretKey = config.SECRET_KEY;
        var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
        var options = {
            scope: bucket
        };
        var putPolicy = new qiniu.rs.PutPolicy(options);

        var uploadToken = putPolicy.uploadToken(mac);
        return uploadToken;
    },
    /**
     * 获取日期时间时间戳
     *
     * @param {string} stringTime 字符型日期
     *
     * @return 时间戳
     */
    deteDiff(stringTime){
        var timestamp2 = Date.parse(new Date(stringTime));
        timestamp2 = timestamp2 / 1000;
        return timestamp2
    }

}

module.exports = upload;