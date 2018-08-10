/**
 * Created by lijian on 2017/8/23.
 */
// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
// 用户密码加盐
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

mongoose.connect('mongodb://localhost/myDbs',{useMongoClient:true});
// mongoose.connect('mongodb://localhost/myDbs');

// 为这次连接绑定事件
const db = mongoose.connection;


db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));



/************** 定义模式userSchema **************/
const userSchema = mongoose.Schema({
    name: {
        unique: true,
        type: String
    },
    password: String
})

userSchema.pre('save',function(next){
    var user = this
    // if(this.isNew){
    //     this.meta.createAt = this.meta.updateAt = Date.now()
    // }else{
    //     this.meta.updateAt = Date.now()
    // }
    bcrypt.genSalt(SALT_WORK_FACTOR,function(err, salt){
        if(err) return next(err)
            bcrypt.hash(salt, user.password, salt, function(err, hash){
                if(err) return next(err)
                user.password = hash;
                next(err)
            })
    })
    next()
})
/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
    account : String,
    password : String
});
/************** 定义模式上传uploadMovieSchema电影信息模型 **************/
const uploadMovieSchema = mongoose.Schema({
    title : String,
    images : String
});

/************** 定义查询电影信息详情movieDetailSchema模型 **************/
const movieDetailSchema = mongoose.Schema({
    title : String,
    year : String,
    summary:String,//简介
    genres:Array,//类型
    downUrl:String,
    imgUrl:String,
    actors:Array,//演员 导演
});

/************** 定义查询电影信息详情movieDetailSchema模型 **************/
const TopMovieDetailSchema = mongoose.Schema({
    title : String,
    year : String,
    summary:String,//简介
    genres:Array,//类型
    downUrl:String,
    imgUrl:String,
    actors:Array,//演员 导演
})

const dianyingtiantangSchema = mongoose.Schema({
    title : String,
    year : String,
    summary:String,//简介
    genres:Array,//类型
    downUrl:String,
    imgUrl:String,
    actors:Array,//演员 导演
})

/************** 定义模型Model **************/
const Models = {
    Login : mongoose.model('Login',loginSchema),
    UploadMovie:mongoose.model('UploadMovie',uploadMovieSchema),
    MovieDetailSchema:mongoose.model('MovieDetail',movieDetailSchema),
    TopMovieDetailSchema:mongoose.model('TopMovieDetail',TopMovieDetailSchema),
    UserSchema:mongoose.model('UserSchema',userSchema),
    dianyingtiantangSchema:mongoose.model('dianyingtiantang',dianyingtiantangSchema)
}

module.exports = Models;