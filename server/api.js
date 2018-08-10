/**
 * Created by lijian on 2017/8/23.
 */
// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();


/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newAccount = new models.Login({
        account : req.body.account,
        password : req.body.password
    });
    // 保存数据newAccount数据进mongoDB
    newAccount.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed');
        }
    });
});

// 创建账号接口
router.post('/api/user/signup',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newAccount = new models.UserSchema({
        name : req.body.name,
        password : req.body.password
    });
    // 保存数据newAccount数据进mongoDB
    newAccount.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed');
        }
    });
});

// 获取已有账号接口
router.get('/api/login/getAccount',(req,res) => {
    // 通过模型去查找数据库
    models.Login.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});


//录入电影接口
router.post('/api/upLoad/upLoadMovie',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newMovie = new models.UploadMovie({
        title : req.body.title,
        images : req.body.images
    });
    // 保存数据newAccount数据进mongoDB
    newMovie.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createMovie successed');
        }
    });
});
//录入电影详情接口
router.post('/api/upLoad/upLoadMovieDetail',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newMovie = new models.MovieDetailSchema({
        title : req.body.title,
        year : req.body.year,
        summary : req.body.summary,
        genres : req.body.genres,
        downUrl : req.body.downUrl,
        imgUrl:req.body.imgUrl,
        actors:req.body.actors
    });
    // 保存数据newAccount数据进mongoDB
    newMovie.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('upLoadMovieDetail successed');
        }
    });
});

//录入热门影院上映电影详情接口
router.post('/api/upLoad/upLoadTopMovieDetail',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newMovie = new models.TopMovieDetailSchema({
        title : req.body.title,
        year : req.body.year,
        summary : req.body.summary,
        genres : req.body.genres,
        downUrl : req.body.downUrl,
        imgUrl:req.body.imgUrl,
        actors:req.body.actors
    });
    // 保存数据newAccount数据进mongoDB
    newMovie.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('upLoadMovieDetail successed');
        }
    });
});

// 获取电影列表接口
router.get('/api/movie/getMovie',(req,res,next) => {
    // 通过模型去查找数据库
    let MovieQuery=models.MovieDetailSchema;
        MovieQuery.find((err,data) => {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        }).limit(8).sort({'_id':-1});
});

//获取正在上映的电影列表接口topMovies
router.get('/api/movie/getTopMovies',(req,res) => {
    // 通过模型去查找数据库
    // let TopMovieQuery=models.TopMovieDetailSchema;
    let TopMovieQuery=models.dianyingtiantangSchema;
    TopMovieQuery.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    }).limit(8).sort({'_id':-1});
});

router.get('/api/movie/getMovie2/:objectId',(req,res,next) => {
    // 通过模型去查找数据库
    let MovieQuery=models.MovieDetailSchema;
    console.log(req.params.objectId);
    var id=req.params.objectId;

    if(id){
        MovieQuery.find({_id: {$lt: id}},(err,data) => {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        }).limit(8).sort({'_id':-1});
    }else{
        MovieQuery.find((err,data) => {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        }).limit(8).sort({'_id':-1});
    }


});
// 获取电影详情接口
router.get('/api/movie/getMovieDetail/:id',(req,res) => {
    // 通过模型去查找数据库
    models.MovieDetailSchema.findById(req.params.id,(err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});
// 获取电影详情接口
router.get('/api/movie/getMovieDetail3/:title',(req,res) => {
    // var whereStr = {'title':'{$regex:/'+req.params.title+'/i}'};
    var whereStr = {'title':{$regex:req.params.title}};
    // 通过模型去查找数据库
    models.MovieDetailSchema.find(whereStr,(err,data) => {
        console.log(data)
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});


module.exports = router;