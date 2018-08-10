<template>
    <el-form label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">电影后台</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="title"  placeholder="输入电影名"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="text" v-model="images"  placeholder="pic"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click="login()">录入</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        name: 'login',
        data () {
            return {
                checked: true,
                title:'',
                images:''
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
            createMovie() {
                let params = {
                    title : this.title,
                    images : this.images
                };
                this.$http.post('/api/upLoad/upLoadMovie',params);
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

