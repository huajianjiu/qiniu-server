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
        const AK =  'NbwIjO65vUzIpR6svD94ayLJzJxm52SZcLdyCXte'//在个人中心内
        const SK = 'HDPz9SIMDfUXPFRNJ4KZCuSHHbKz2UqZGyzSUt_u'
        const bucket = 'schoolbbs'//空间名称
        //鉴权对象mac
        const mac = new qiniu.auth.digest.Mac(AK, SK)
        //获取上传的token
        const options = {
        scope: bucket,
        expires: 3600 * 24 //到期时间
        }
        const putPolicy = new qiniu.rs.PutPolicy(options)
        const uploadToken = putPolicy.uploadToken(mac)//这是我们获取到的token，后端用接口传到前端，这里就不描述了
        console.log(uploadToken);
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