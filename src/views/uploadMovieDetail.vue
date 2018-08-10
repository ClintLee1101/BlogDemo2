<template>
    <el-form label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">电影录入系统</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="title"  placeholder="输入电影名"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="text" v-model="year"  placeholder="年份"></el-input>
        </el-form-item>
        <div style="margin: 15px 0;"></div>
            <el-checkbox-group
                    v-model="genres">
                <el-checkbox v-for="el in checkedGenres" :label="el" :key="el">{{el}}</el-checkbox>
            </el-checkbox-group>
        <el-input style="margin-top:20px"
                type="textarea"
                :rows="2"
                placeholder="请输入简介"
                v-model="summary">
        </el-input>
        <el-input style="margin-top:20px"
                  type="textarea"
                  :rows="2"
                  placeholder="请输入演员/分隔"
                  v-model="actors">
        </el-input>
        <el-form-item style="margin-top:20px">
            <el-input type="text" v-model="downUrl"  placeholder="下载地址"></el-input>
        </el-form-item>
        <el-form-item style="margin-top:20px">
            <el-input type="text" v-model="imgUrl"  placeholder="图片地址"></el-input>
        </el-form-item>
        <el-form-item>
            <el-radio v-model="radio" label="1">老片录入</el-radio>
            <el-radio v-model="radio" label="2">正在上映</el-radio>
        </el-form-item>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click="upLoadMovieDetail()">提交</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        name: 'login',
        data () {
            return {
                checkAll: true,
                checked: true,
                title:'',
                year:'',
                summary:'',//简介
                actors:'',//输入演员名
                genres:['动作','文艺'],//电影类型
                downUrl:'',
                imgUrl:'',
                radio:'',
                checkedGenres: ['动作','文艺','科幻','犯罪','剧情','爱情','同性','历史','战争','虚拟现实','游戏','冒险'
                ],
            }
        },
        mounted: function () {

        },
        methods: {
            login() {
                // 获取已有账号密码
                this.$http.get('/api/login/getAccount')
                    .then((response) => {
                        // 响应成功回调
                        console.log(response)
                        let params = {
                            account : this.ruleForm.account,
                            password : this.ruleForm.checkPass
                        };
                        // 创建一个账号密码
                        return this.$http.post('/api/login/createAccount',params);
                    })
                    .then((response) => {
                        console.log(response)
                    })
                    .catch((reject) => {
                        console.log(reject)
                    });
            },

            upLoadMovieDetail() {
                let params = {
                    title : this.title,
                    year : this.year,
                    summary : this.summary,
                    genres : this.genres,
                    downUrl : this.downUrl,
                    imgUrl:this.imgUrl,
                    actors:this.actors.split("/"),
                };
                console.log(params.genres);
                if(this.radio==1){
                    this.$http.post('/api/upLoad/upLoadMovieDetail',params).then((response) => {
                        alert('录入老片成功');
                        console.log(response)
                    })
                        .catch((reject) => {
                            console.log(reject)
                        });
                }else{
                    this.$http.post('/api/upLoad/upLoadTopMovieDetail',params).then((response) => {
                        console.log(response)
                        alert('录入新片成功');
                    })
                        .catch((reject) => {
                            console.log(reject)
                        });
                }


            }
        },
        watch: {},
        components: {}
    }
</script>

<style scoped>
    .login-container {
        border-radius: 5px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        background-color:#ffffff;
        /*background-color:#13CE66;*/
    }

    .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
    .remember {
        margin: 0px 0px 35px 0px;
    }
    .el-form-item{
        padding-bottom: 10px;
    }
</style>